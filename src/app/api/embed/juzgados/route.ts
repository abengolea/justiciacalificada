import { NextRequest, NextResponse } from "next/server";
import { getAdminFirestore } from "@/lib/firebase-admin";
import type { Courthouse } from "@/lib/types";

/**
 * GET /api/embed/juzgados
 *
 * API para partners (ej: Colegios de Abogados) que quieren consumir datos de juzgados.
 * Filtra por jurisdicción según los parámetros del partner.
 *
 * Query params:
 * - apiKey: (opcional) API key del partner para validar y aplicar filtros
 * - ciudad: filtrar por ciudad (ej: "San Nicolás")
 * - dependencia: filtrar por dependencia/provincia (ej: "Buenos Aires")
 * - fuero: filtrar por fuero (ej: "Civil")
 *
 * Ejemplo: /api/embed/juzgados?ciudad=San%20Nicolás&apiKey=xxx
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const apiKey = searchParams.get("apiKey");
    const ciudad = searchParams.get("ciudad");
    const dependencia = searchParams.get("dependencia");
    const fuero = searchParams.get("fuero");

    // Si hay apiKey, validar partner (colección partners en Firestore)
    // Por ahora permitimos requests sin apiKey para desarrollo; en producción podrías requerirlo
    if (apiKey) {
      const db = getAdminFirestore();
      const partnersRef = db.collection("partners");
      const partnersSnap = await partnersRef
        .where("apiKey", "==", apiKey)
        .where("activo", "==", true)
        .limit(1)
        .get();

      if (!partnersSnap.empty) {
        const partner = partnersSnap.docs[0].data();
        // Validar que los filtros solicitados estén permitidos para este partner
        if (ciudad && partner.ciudadesPermitidas?.length && !partner.ciudadesPermitidas.includes(ciudad)) {
          return NextResponse.json(
            { error: "Ciudad no permitida para este partner" },
            { status: 403 }
          );
        }
        if (dependencia && partner.dependenciasPermitidas?.length && !partner.dependenciasPermitidas.includes(dependencia)) {
          return NextResponse.json(
            { error: "Dependencia no permitida para este partner" },
            { status: 403 }
          );
        }
      }
      // Si el apiKey no existe, podrías rechazar o permitir (según política)
    }

    const db = getAdminFirestore();
    const snapshot = await db.collection("juzgados").get();

    let juzgados: Courthouse[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Courthouse[];

    // Filtrar en memoria (más flexible para múltiples filtros)
    if (ciudad) {
      juzgados = juzgados.filter((j) => j.ciudad?.toLowerCase().includes(ciudad.toLowerCase()));
    }
    if (dependencia) {
      juzgados = juzgados.filter((j) => j.dependencia === dependencia);
    }
    if (fuero) {
      juzgados = juzgados.filter((j) => j.fuero === fuero);
    }

    return NextResponse.json({
      juzgados,
      total: juzgados.length,
    });
  } catch (error) {
    console.error("Error en API embed/juzgados:", error);
    return NextResponse.json(
      { error: "Error al obtener juzgados" },
      { status: 500 }
    );
  }
}
