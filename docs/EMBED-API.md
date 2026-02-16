# API de Embed para Partners

Permite que otras webs jurídicas (ej: Colegios de Abogados) integren Justicia Calificada en su sitio.

## 1. Widget embebible (iframe)

La forma más simple: insertar un iframe en la web del partner.

### URL base
```
https://tu-dominio.com/embed
```

### Parámetros de filtro
| Parámetro | Descripción | Ejemplo |
|-----------|-------------|---------|
| `ciudad` | Filtrar por ciudad | `San Nicolás` |
| `dependencia` | Filtrar por dependencia/provincia | `Buenos Aires` |
| `fuero` | Filtrar por fuero | `Civil` |

### Ejemplo para Colegio de Abogados de San Nicolás
```html
<iframe
  src="https://tu-dominio.com/embed?ciudad=San%20Nicolás"
  width="100%"
  height="800"
  frameborder="0"
  title="Justicia Calificada - Juzgados de San Nicolás"
></iframe>
```

### Comportamiento
- Los abogados deben **iniciar sesión** para calificar (mismo login que la app principal)
- La vista se filtra automáticamente por los parámetros de la URL
- Diseño compacto sin header/footer de la web principal
- Incluye enlace "Powered by Justicia Calificada"

---

## 2. API REST (JSON)

Para partners que quieren consumir datos y mostrar en su propia UI.

### Endpoint
```
GET /api/embed/juzgados
```

### Parámetros
| Parámetro | Requerido | Descripción |
|-----------|-----------|-------------|
| `ciudad` | No | Filtrar por ciudad |
| `dependencia` | No | Filtrar por dependencia |
| `fuero` | No | Filtrar por fuero |
| `apiKey` | Opcional* | API key del partner (para validación) |

\* En producción puedes requerir `apiKey` para control de acceso y facturación.

### Ejemplo de respuesta
```json
{
  "juzgados": [
    {
      "id": "abc123",
      "nombre": "Juzgado Civil y Comercial Nº 1",
      "ciudad": "San Nicolás",
      "dependencia": "Buenos Aires",
      "fuero": "Civil",
      "instancia": "Primera",
      "direccion": "...",
      "telefono": "..."
    }
  ],
  "total": 1
}
```

---

## 3. Partners con API Key (control por jurisdicción)

Para vender acceso restringido por jurisdicción:

1. **Crear partner en Firestore** (colección `partners`):
   - Solo admins pueden crear/editar
   - Campos: `nombre`, `apiKey`, `ciudadesPermitidas[]`, `dependenciasPermitidas[]`, `activo`

2. **Validación**: Si el request incluye `apiKey`, la API valida que los filtros (`ciudad`, `dependencia`) estén en las listas permitidas del partner.

3. **Panel admin**: Podés agregar una sección en `/admin` para gestionar partners (crear, editar, generar API keys).

---

## 4. Configuración necesaria

### Para la API (server-side)
La ruta `/api/embed/juzgados` usa Firebase Admin. Configurá una de estas opciones:

1. **Variable de entorno** `FIREBASE_SERVICE_ACCOUNT`: JSON stringificado del service account de Firebase
2. **Variable** `GOOGLE_APPLICATION_CREDENTIALS`: Ruta al archivo JSON del service account

En Vercel: agregar `FIREBASE_SERVICE_ACCOUNT` en las variables de entorno (valor = contenido del JSON del service account).

---

## 5. Ejemplo de uso completo

**Colegio de Abogados de San Nicolás** quiere embeber en su web:

```html
<section>
  <h2>Calificaciones de Juzgados de San Nicolás</h2>
  <p>Accedé a las calificaciones de tus colegas. Iniciá sesión para calificar.</p>
  <iframe
    src="https://justiciacalificada.com/embed?ciudad=San%20Nicolás"
    width="100%"
    height="700"
    frameborder="0"
    style="border-radius: 8px;"
    title="Juzgados de San Nicolás - Justicia Calificada"
  ></iframe>
</section>
```

Los abogados que visiten la web del Colegio verán solo los juzgados de San Nicolás y podrán calificarlos tras iniciar sesión.
