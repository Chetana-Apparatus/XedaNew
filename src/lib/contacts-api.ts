export const CONTACTS_API_URL =
  process.env.NEXT_PUBLIC_CONTACTS_API_URL ??
  "https://www.xedafarm.com/api/contacts/";

export type ContactApiPayload = {
  name: string;
  email: string;
  phone: string;
  select_product: string;
  quality: string;
  city_pincode: string;
};

export function buildContactPayload(input: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  city: string;
  pincode: string;
}): ContactApiPayload {
  const name = [input.firstName, input.lastName]
    .map((s) => s.trim())
    .filter(Boolean)
    .join(" ");

  return {
    name,
    email: input.email.trim(),
    phone: input.phone.trim(),
    select_product: input.product.trim(),
    quality: input.quantity.trim(),
    city_pincode: `${input.city.trim()} ${input.pincode.trim()}`.trim(),
  };
}

function formatApiError(data: unknown): string {
  if (!data || typeof data !== "object") {
    return "Something went wrong. Please try again.";
  }

  if ("detail" in data) {
    const detail = data.detail;
    if (typeof detail === "string") return detail;
    if (Array.isArray(detail)) {
      return detail.map(String).join(" ");
    }
  }

  const fieldMessages = Object.entries(data)
    .filter(([key]) => key !== "detail")
    .flatMap(([, value]) => {
      if (Array.isArray(value)) return value.map(String);
      if (typeof value === "string") return [value];
      return [];
    });

  if (fieldMessages.length > 0) {
    return fieldMessages.join(" ");
  }

  return "Something went wrong. Please try again.";
}

export async function submitContactEnquiry(
  payload: ContactApiPayload,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const res = await fetch(CONTACTS_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data: unknown = await res.json().catch(() => null);

  if (!res.ok) {
    return { ok: false, error: formatApiError(data) };
  }

  return { ok: true };
}
