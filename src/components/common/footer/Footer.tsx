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
import {
  footerQuickLinksColumn1,
  footerQuickLinksColumn2,
} from "@/data/navigation";

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
            src="/images/f.webp"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55" aria-hidden />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className=" font-bold tracking-tight text-background ">
              Get in Touch With Us
            </h1>
            <p className="mx-auto mt-6 max-w-3xl  leading-relaxed text-background/88 md:text-xl">
              We&apos;d love to hear from you — connect with us for any
              enquiries or collaborations.
            </p>
            <Button
              onClick={openContactModal}
              theme="foreground"
              className="mx-auto mt-12 shadow-xl ring-1 ring-white/20"
            >
              Enquiry Now
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-background py-14 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <div className="flex flex-col items-start">
              <Link href="/" className="inline-block shrink-0">
                <Image
                  src="/images/xedab.webp"
                  alt="Xeda Farm"
                  width={280}
                  height={90}
                  className="h-auto w-[180px] object-contain md:w-[220px]"
                />
              </Link>

              <nav
                className="mt-8 flex items-center gap-6"
                aria-label="Social media"
              >
                {socialLinks.map(({ Icon, href, label }) => {
                  const hoverColors = {
                    Instagram: "hover:text-pink-500",
                    Facebook: "hover:text-blue-600",
                    LinkedIn: "hover:text-sky-700",
                    X: "hover:text-black",
                    YouTube: "hover:text-red-600",
                  };

                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`text-secondary transition-all duration-300 hover:scale-110 ${
                        hoverColors[label as keyof typeof hoverColors]
                      }`}
                    >
                      <Icon className="h-6 w-6 md:h-7 md:w-7" aria-hidden />
                    </a>
                  );
                })}
              </nav>
            </div>

            <nav className="w-full sm:w-auto" aria-label="Quick links">
              <h3 className="mb-6 text-xl font-semibold uppercase tracking-wide text-secondary">
                Quick Links
              </h3>
              <div className="flex gap-12">
                <ul className="space-y-4 border-r border-secondary/25 pr-12 text-lg text-secondary">
                  {footerQuickLinksColumn1.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="cursor-pointer transition hover:text-green-600"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4 text-lg text-secondary">
                  {footerQuickLinksColumn2.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="cursor-pointer transition hover:text-green-600"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <div className="flex w-full flex-col gap-5 sm:max-w-[385px] sm:gap-6 lg:ml-auto">
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

          <p className="mt-14 text-center text-xs leading-relaxed text-secondary/75 md:mt-16 lg:mt-20">
            © 2026 <span>XEDAFARM</span> All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
