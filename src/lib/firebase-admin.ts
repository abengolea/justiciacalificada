import { initializeApp, getApps, cert, type ServiceAccount } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

/**
 * Inicializa Firebase Admin para uso en API routes.
 * Requiere una de estas opciones:
 * 1. GOOGLE_APPLICATION_CREDENTIALS: ruta al JSON de service account
 * 2. FIREBASE_SERVICE_ACCOUNT: JSON stringificado del service account
 */
function getFirebaseAdmin() {
  if (getApps().length > 0) {
    return getApps()[0];
  }

  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (serviceAccountJson) {
    try {
      const serviceAccount = JSON.parse(serviceAccountJson) as ServiceAccount;
      return initializeApp({ credential: cert(serviceAccount) });
    } catch (e) {
      console.error("Error parsing FIREBASE_SERVICE_ACCOUNT:", e);
    }
  }

  // Usa credenciales por defecto (GOOGLE_APPLICATION_CREDENTIALS o ADC en GCP)
  return initializeApp({ projectId: "qualified-justice" });
}

export function getAdminFirestore() {
  getFirebaseAdmin();
  return getFirestore();
}
