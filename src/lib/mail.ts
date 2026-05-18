import nodemailer from "nodemailer";

export type ContactEnquiryPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  city: string;
  pincode: string;
};

/** First non-empty trimmed value among env keys (supports common naming mistakes). */
function envFirst(...keys: string[]): string {
  for (const key of keys) {
    const raw = process.env[key];
    if (typeof raw === "string") {
      const t = raw.trim();
      if (t.length > 0) {
        return t;
      }
    }
  }
  return "";
}

function productLabel(value: string): string {
  const map: Record<string, string> = {
    "30ml-wheatgrass": "30 ml wheatgrass juice",
    "50ml-wheatgrass": "50 ml",
  };
  return map[value] ?? value;
}

/** Site palette (inline only — email clients ignore external CSS). */
const C = {
  pageBg: "#f3f4f6",
  cardBg: "#ffffff",
  border: "#e5e7eb",
  text: "#111827",
  label: "#1d3d3e",
  accent: "#7bd957",
  link: "#1a73e8",
} as const;

function escapeAttr(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function buildPlainText(data: ContactEnquiryPayload): string {
  const lines = [
    "New purchase enquiry — Xeda Farm",
    "",
    `Name: ${data.firstName} ${data.lastName}`.trim(),
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    `Product: ${productLabel(data.product)}`,
    `Quantity: ${data.quantity}`,
    `City: ${data.city}`,
    `Pincode: ${data.pincode}`,
    "",
    "—",
    "Sent from xedafarm.com contact form",
  ];
  return lines.join("\n");
}

function buildHtml(data: ContactEnquiryPayload): string {
  const fullName = escapeHtml(`${data.firstName} ${data.lastName}`.trim());
  const emailSafe = escapeHtml(data.email);
  const emailHref = `mailto:${escapeAttr(data.email)}`;
  const phone = escapeHtml(data.phone || "—");
  const product = escapeHtml(productLabel(data.product));
  const quantity = escapeHtml(data.quantity);
  const city = escapeHtml(data.city);
  const pincode = escapeHtml(data.pincode);

  const row = (label: string, valueCellInner: string) =>
    `<tr>
  <td style="padding:14px 16px;border:1px solid ${C.border};font-size:15px;line-height:1.45;font-weight:700;color:${C.label};font-family:Arial,Helvetica,sans-serif;vertical-align:top;width:38%;">${label}</td>
  <td style="padding:14px 16px;border:1px solid ${C.border};font-size:15px;line-height:1.45;color:${C.text};font-family:Arial,Helvetica,sans-serif;vertical-align:top;">${valueCellInner}</td>
</tr>`;

  const rows =
    row("Name", fullName) +
    row(
      "Email",
      `<a href="${emailHref}" style="color:${C.link};text-decoration:underline;">${emailSafe}</a>`,
    ) +
    row("Phone", phone) +
    row("Product", product) +
    row("Quantity", quantity) +
    row("City", city) +
    row("Pincode", pincode);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="x-ua-compatible" content="ie=edge" />
<title>New purchase enquiry</title>
</head>
<body style="margin:0;padding:0;background-color:${C.pageBg};-webkit-text-size-adjust:100%;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:${C.pageBg};">
  <tr>
    <td align="center" style="padding:28px 16px 40px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:560px;">
        <tr>
          <td style="background:${C.cardBg};border-radius:14px;overflow:hidden;border:1px solid ${C.border};box-shadow:0 10px 40px rgba(0,0,0,0.06);">
            <div style="height:4px;line-height:4px;background:${C.accent};font-size:0;">&nbsp;</div>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td style="padding:22px 22px 8px;font-family:Arial,Helvetica,sans-serif;">
                  <p style="margin:0;font-size:20px;line-height:1.3;font-weight:700;color:${C.label};letter-spacing:-0.02em;">New purchase enquiry</p>
                  <p style="margin:10px 0 0;font-size:13px;line-height:1.5;color:#6b7280;">You received a new purchase enquiry from the Xeda Farm website.</p>
                </td>
              </tr>
              <tr>
                <td style="padding:8px 22px 22px;">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">${rows}</table>
                </td>
              </tr>
              <tr>
                <td style="padding:0 22px 20px;font-family:Arial,Helvetica,sans-serif;">
                  <p style="margin:0;padding-top:14px;border-top:1px solid ${C.border};font-size:12px;line-height:1.5;color:#9ca3af;">Reply directly to this email to contact the customer (Reply-To is set to their address).</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding:20px 12px 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#9ca3af;">
            <span style="color:${C.label};font-weight:600;">Xeda Farm</span> · City Vista Kharadi, Pune
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

function escapeHtml(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function getSmtpConfigStatus(): {
  ok: boolean;
  missing: string[];
  hint: string;
} {
  const host = envFirst("SMTP_HOST", "EMAIL_HOST", "MAIL_HOST");
  const user = envFirst(
    "SMTP_USER",
    "SMTP_USERNAME",
    "EMAIL_USER",
    "MAIL_USERNAME",
  );
  const pass = envFirst(
    "SMTP_PASS",
    "SMTP_PASSWORD",
    "EMAIL_PASSWORD",
    "MAIL_PASSWORD",
  );
  const to = envFirst(
    "CONTACT_TO_EMAIL",
    "MAIL_TO",
    "TO_EMAIL",
    "INQUIRY_EMAIL",
  );
  const fromExplicit = envFirst(
    "MAIL_FROM",
    "SMTP_FROM",
    "FROM_EMAIL",
    "EMAIL_FROM",
  );
  const from = fromExplicit || user;

  const missing: string[] = [];
  if (!host) {
    missing.push("SMTP_HOST (or EMAIL_HOST / MAIL_HOST)");
  }
  if (!user) {
    missing.push("SMTP_USER (or SMTP_USERNAME / EMAIL_USER / MAIL_USERNAME)");
  }
  if (!pass) {
    missing.push("SMTP_PASS (or SMTP_PASSWORD / EMAIL_PASSWORD)");
  }
  if (!to) {
    missing.push("CONTACT_TO_EMAIL (or MAIL_TO / TO_EMAIL)");
  }
  if (!from) {
    missing.push(
      "MAIL_FROM or a valid SMTP_USER (used as From if MAIL_FROM empty)",
    );
  }

  const hint =
    "Use a project-root .env or .env.local, then restart `npm run dev`. " +
    "If you use Vercel/hosting, set the same keys in the dashboard Environment Variables.";

  return {
    ok: missing.length === 0,
    missing,
    hint,
  };
}

export async function sendContactEnquiryEmail(
  data: ContactEnquiryPayload,
): Promise<void> {
  const host = envFirst("SMTP_HOST", "EMAIL_HOST", "MAIL_HOST");
  const portRaw = envFirst("SMTP_PORT", "EMAIL_PORT") || "587";
  const port = Number.parseInt(portRaw, 10);
  const user = envFirst(
    "SMTP_USER",
    "SMTP_USERNAME",
    "EMAIL_USER",
    "MAIL_USERNAME",
  );
  const pass = envFirst(
    "SMTP_PASS",
    "SMTP_PASSWORD",
    "EMAIL_PASSWORD",
    "MAIL_PASSWORD",
  );
  const to = envFirst(
    "CONTACT_TO_EMAIL",
    "MAIL_TO",
    "TO_EMAIL",
    "INQUIRY_EMAIL",
  );
  const fromExplicit = envFirst(
    "MAIL_FROM",
    "SMTP_FROM",
    "FROM_EMAIL",
    "EMAIL_FROM",
  );
  const from = fromExplicit || user;

  if (!host || !user || !pass || !to || !from) {
    const { missing, hint } = getSmtpConfigStatus();
    throw new Error(
      `Missing mail configuration (${missing.join("; ")}). ${hint}`,
    );
  }

  if (Number.isNaN(port) || port < 1) {
    throw new Error("Invalid SMTP_PORT (use e.g. 587 or 465).");
  }

  const secure =
    process.env.SMTP_SECURE === "true" ||
    process.env.SMTP_SECURE === "1" ||
    port === 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const subject =
    `[Xeda Farm] Enquiry — ${data.firstName} ${data.lastName}`.trim();

  await transporter.sendMail({
    from,
    to,
    replyTo: data.email,
    subject,
    text: buildPlainText(data),
    html: buildHtml(data),
  });
}
