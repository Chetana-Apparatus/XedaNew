import { NextResponse } from "next/server";

import { getSmtpConfigStatus, sendContactEnquiryEmail } from "@/lib/mail";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  product?: string;
  quantity?: string;
  city?: string;
  pincode?: string;
};

function validate(body: ContactPayload): string | null {
  const firstName = String(body.firstName ?? "").trim();
  const email = String(body.email ?? "").trim();
  const product = String(body.product ?? "").trim();
  const quantity = String(body.quantity ?? "").trim();
  const city = String(body.city ?? "").trim();
  const pincode = String(body.pincode ?? "").trim();

  if (!firstName) return "First name is required.";
  if (!email) return "Email is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Please enter a valid email address.";
  }
  if (!product) return "Please select a product.";
  if (!quantity) return "Please select a quantity.";
  if (!city) return "City is required.";
  if (!/^[0-9]{6}$/.test(pincode)) {
    return "Pincode must be exactly 6 digits.";
  }

  return null;
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const message = validate(body);
  if (message) {
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const payload = {
    firstName: String(body.firstName ?? "").trim(),
    lastName: String(body.lastName ?? "").trim(),
    email: String(body.email ?? "").trim(),
    phone: String(body.phone ?? "").trim(),
    product: String(body.product ?? "").trim(),
    quantity: String(body.quantity ?? "").trim(),
    city: String(body.city ?? "").trim(),
    pincode: String(body.pincode ?? "").trim(),
  };

  const smtpReady = getSmtpConfigStatus();
  if (!smtpReady.ok) {
    console.error(
      "[api/contact] SMTP env incomplete. Missing:",
      smtpReady.missing.join(", "),
    );
    const devDetail =
      process.env.NODE_ENV === "development"
        ? ` ${smtpReady.hint} Missing: ${smtpReady.missing.join("; ")}.`
        : "";
    return NextResponse.json(
      {
        error: `Mail is not configured on the server.${devDetail}`.trim(),
      },
      { status: 503 },
    );
  }

  try {
    await sendContactEnquiryEmail(payload);
  } catch (err) {
    console.error("[api/contact] send mail failed:", err);
    return NextResponse.json(
      {
        error:
          "We could not send your enquiry right now. Please try again later or email us directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message:
      "Your enquiry was submitted successfully. We will get back to you soon.",
  });
}
