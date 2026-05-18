"use client";

import { Loader2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import FormField from "../../ui/form/FormField";
import SelectField from "../../ui/form/SelectField";

const quantityOptions = Array.from({ length: 40 }, (_, i) => i + 1);

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitting(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const fd = new FormData(form);
    const payload = {
      firstName: String(fd.get("firstName") ?? "").trim(),
      lastName: String(fd.get("lastName") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      product: String(fd.get("product") ?? "").trim(),
      quantity: String(fd.get("quantity") ?? "").trim(),
      city: String(fd.get("city") ?? "").trim(),
      pincode: String(fd.get("pincode") ?? "").trim(),
    };

    if (!payload.product || !payload.quantity) {
      toast.error("Please select product and quantity.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        message?: string;
      };

      if (!res.ok) {
        toast.error(
          typeof data.error === "string"
            ? data.error
            : "Something went wrong. Please try again.",
        );
        return;
      }

      toast.success(
        typeof data.message === "string"
          ? data.message
          : "Submitted successfully.",
      );
      form.reset();
      onClose();
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        className="relative z-10 max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-secondary/70 p-5 shadow-2xl md:max-w-lg md:p-6"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-white/70 transition hover:text-background"
          aria-label="Close"
        >
          <X size={22} />
        </button>

        <div className="mb-6 pr-8 text-center">
          <h2 className=" font-semibold text-background ">Purchase Enquiry</h2>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              label="First Name*"
              name="firstName"
              placeholder="Jane"
              required
              compact
            />
            <FormField
              label="Last Name"
              name="lastName"
              placeholder="Smith"
              compact
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              label="Your Email*"
              name="email"
              placeholder="jane@example.com"
              type="email"
              required
              compact
            />
            <FormField
              label="Your Phone"
              name="phone"
              placeholder="+91 98765 43210"
              type="tel"
              compact
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <SelectField label="Product*" name="product" required compact>
              <option value="">Select product</option>
              <option value="30ml-wheatgrass">30 ml wheatgrass juice</option>
              <option value="50ml-wheatgrass">50 ml</option>
            </SelectField>
            <SelectField label="Quantity*" name="quantity" required compact>
              <option value="">Qty</option>
              {quantityOptions.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </SelectField>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              label="City*"
              name="city"
              placeholder="Pune"
              required
              compact
            />
            <FormField
              label="Pincode*"
              name="pincode"
              placeholder="411048"
              type="text"
              required
              compact
              maxLength={6}
              inputMode="numeric"
              pattern="[0-9]{6}"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-foreground text-base font-semibold text-secondary transition-all duration-300 enabled:hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2
                  className="h-5 w-5 shrink-0 animate-spin"
                  aria-hidden
                />
                <span>Submitting…</span>
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
