/**
 * Plantillas de correo con tipografía mejorada.
 * Fuentes optimizadas para legibilidad en clientes de email.
 */

const FONT_STACK =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

const TYPOGRAPHY = {
  body: `font-family: ${FONT_STACK}; font-size: 16px; line-height: 1.62; color: #333333; margin: 0 0 1em 0;`,
  heading: `font-family: ${FONT_STACK}; font-size: 22px; font-weight: 600; line-height: 1.35; color: #1a2c41; margin: 0 0 0.75em 0; letter-spacing: -0.02em;`,
  title: `font-family: ${FONT_STACK}; font-size: 24px; font-weight: 700; letter-spacing: -0.03em; margin: 0;`,
  listItem: `font-family: ${FONT_STACK}; font-size: 15px; line-height: 1.6; color: #333333; padding: 6px 0;`,
  quote: `font-family: ${FONT_STACK}; font-size: 15px; line-height: 1.6; font-style: italic; color: #4a5568;`,
  footer: `font-family: ${FONT_STACK}; font-size: 13px; line-height: 1.5; color: #6b7280;`,
  button: `font-family: ${FONT_STACK}; font-size: 15px; font-weight: 600; letter-spacing: 0.01em;`,
};

export interface EmailLayoutOptions {
  title?: string;
  body: string;
  footer?: string;
}

/**
 * Genera el HTML de un correo con layout consistente y tipografía mejorada.
 */
export function emailLayout({ title = "Justicia Calificada", body, footer }: EmailLayoutOptions): string {
  const defaultFooter =
    "Recibió este correo porque está registrado en Justicia Calificada. Este es un correo electrónico automatizado, por favor no responda.";
  const footerText = footer ?? defaultFooter;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9;">
  <div style="font-family: ${FONT_STACK}; max-width: 600px; margin: 24px auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
    <div style="background-color: #2a3b4f; color: #ffffff; padding: 24px 20px; text-align: center;">
      <h1 style="${TYPOGRAPHY.title}">${title}</h1>
    </div>
    <div style="padding: 28px 24px; background-color: #ffffff;">
      ${body}
    </div>
    <div style="background-color: #f8fafc; padding: 20px 24px; text-align: center; border-top: 1px solid #e2e8f0;">
      <p style="${TYPOGRAPHY.footer} margin: 0;">${footerText}</p>
    </div>
  </div>
</body>
</html>`;
}

/**
 * Estilos tipográficos para usar en fragmentos HTML de correo.
 */
export const emailStyles = TYPOGRAPHY;

/**
 * Genera un botón CTA para correos.
 */
export function emailButton(href: string, text: string): string {
  return `
    <a href="${href}" style="display: inline-block; ${TYPOGRAPHY.button} background-color: #3b82f6; color: #ffffff !important; padding: 12px 24px; text-decoration: none; border-radius: 8px; margin-top: 16px;">
      ${text}
    </a>`;
}

/**
 * Genera una lista de ítems para correos.
 */
export function emailList(items: Array<{ label: string; value: string }>): string {
  return `
    <ul style="list-style-type: none; padding: 0; margin: 0 0 1em 0;">
      ${items.map(({ label, value }) => `<li style="${TYPOGRAPHY.listItem}"><strong>${label}:</strong> ${value}</li>`).join("")}
    </ul>`;
}
