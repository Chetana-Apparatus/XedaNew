"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { TbBrandX } from "react-icons/tb";

import Button from "@/components/ui/button/Button";
import { useContactModal } from "@/contexts/ContactModalContext";

const socialLinks = [
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com/xedafarm/",
    label: "Instagram",
  },
  {
    Icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=61582945834500",
    label: "Facebook",
  },
  {
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/109757301",
    label: "LinkedIn",
  },
  { Icon: TbBrandX, href: "https://x.com/XedaFarm", label: "X" },
  {
    Icon: FaYoutube,
    href: "https://www.youtube.com/@XedaFarm",
    label: "YouTube",
  },
] as const;

const contactLinks = [
  {
    Icon: MdEmail,
    href: "mailto:info@xedafarm.com",
    label: "Email Xeda Farm",
    text: "info@xedafarm.com",
  },
  {
    Icon: FaPhoneAlt,
    href: "tel:+919172266069",
    label: "Call Xeda Farm",
    text: "+91 91722 66069",
  },
  {
    Icon: MdLocationOn,
    href: "https://www.google.com/maps/search/?api=1&query=Cityvista+Kharadi,+Pune+411048",
    label: "Xeda Farm location on Google Maps",
    text: "City Vista Kharadi, Pune - 411048",
    external: true,
  },
] as const;

export default function Footer() {
  const { openContactModal } = useContactModal();

  return (
    <footer className="bg-background">
      <section className="relative isolate flex min-h-[420px] items-center overflow-hidden border-b border-white/10 py-20 md:min-h-[480px] md:py-28 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/footer.webp"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55" aria-hidden />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Get in Touch With Us
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/88 md:text-xl">
              We&apos;d love to hear from you — connect with us for any
              enquiries or collaborations.
            </p>
            <Button
              onClick={openContactModal}
              theme="foreground"
              className="mx-auto mt-12 !min-h-[52px] !px-10 !py-4 text-base font-semibold shadow-xl ring-1 ring-white/20 sm:!min-h-[56px]"
            >
              Enquiry Now
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-background py-14 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="flex w-full flex-col ">
            <div className="flex w-full flex-col items-start justify-between gap-8 sm:flex-row sm:gap-12 lg:gap-16">
              <Link href="/" className="inline-block shrink-0">
                <Image
                  src="/images/xedab.webp"
                  alt="Xeda Farm"
                  width={280}
                  height={90}
                  className="h-auto w-[180px] object-contain md:w-[220px]"
                />
              </Link>

              <div className="flex w-full flex-col gap-5 sm:ml-auto sm:max-w-[385px] sm:gap-6 mt-4">
                {contactLinks.map(({ Icon, href, label, text, ...rest }) => (
                  <a
                    key={label}
                    href={href}
                    {...("external" in rest && rest.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={label}
                    className="group grid w-full grid-cols-[1.5rem_1fr] items-center gap-4"
                  >
                    <span className="flex size-6 items-center justify-center">
                      <Icon
                        className="size-[1.125rem] text-secondary transition-colors duration-300 group-hover:text-foreground"
                        aria-hidden
                      />
                    </span>
                    <span className="text-left text-[15px] leading-relaxed text-secondary/90 transition-colors duration-300 group-hover:text-secondary md:text-base">
                      {text}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <nav
              className="flex items-center justify-center gap-6 sm:justify-start"
              aria-label="Social media"
            >
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-secondary transition-all duration-300 hover:scale-110 hover:text-foreground"
                >
                  <Icon className="h-6 w-6 md:h-7 md:w-7" aria-hidden />
                </a>
              ))}
            </nav>
          </div>

          <p className="mt-14 text-center text-xs leading-relaxed text-secondary/75 md:mt-16 lg:mt-20">
            © 2026{" "}
            <span className="font-semibold text-foreground">XedaFarm</span> All
            rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
