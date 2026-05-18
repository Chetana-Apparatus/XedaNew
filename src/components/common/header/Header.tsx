"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button/Button";
import { useContactModal } from "@/contexts/ContactModalContext";

type NavItem = {
  label: string;
  href: string;
  isActive: (pathname: string, hash: string) => boolean;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/#home",
    isActive: (pathname, hash) =>
      pathname === "/" && (hash === "" || hash === "#home"),
  },
  {
    label: "Green Blood",
    href: "/#greenblood",
    isActive: (pathname, hash) =>
      (pathname === "/" && hash === "#greenblood") ||
      pathname === "/green-blood",
  },
  {
    label: "Benifits",
    href: "/#benefits",
    isActive: (pathname, hash) =>
      (pathname === "/" && hash === "#benefits") || pathname === "/benefits",
  },
  {
    label: "About",
    href: "/#about",
    isActive: (pathname, hash) => pathname === "/" && hash === "#about",
  },
  {
    label: "Testimonials",
    href: "/#testimonials",
    isActive: (pathname, hash) => pathname === "/" && hash === "#testimonials",
  },
  {
    label: "Blog",
    href: "/blogs",
    isActive: (pathname, hash) =>
      pathname === "/blogs" ||
      pathname.startsWith("/blogs/") ||
      (pathname === "/" && hash === "#blog"),
  },
];

export default function Header() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { openContactModal } = useContactModal();

  // biome-ignore lint/correctness/useExhaustiveDependencies: sync hash when pathname changes
  useEffect(() => {
    const syncHash = () => {
      setHash(window.location.hash);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    window.addEventListener("popstate", syncHash);
    return () => {
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("popstate", syncHash);
    };
  }, [pathname]);

  /** Next.js client navigations can change the hash without firing `hashchange`. */
  const bumpHashAfterNav = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setHash(window.location.hash);
      });
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** White page background — white header bar + dark nav text. */
  const lightTopPage =
    pathname.startsWith("/blogs") || pathname === "/green-blood";

  /** Secondary page background — match header to teal, light nav text. */
  const secondaryTopPage = pathname === "/benefits" || pathname === "/know";

  const showWhiteHeaderBar =
    mobileMenu || lightTopPage || (!secondaryTopPage && isScrolled);

  const headerBgClass = mobileMenu
    ? "bg-background"
    : pathname === "/benefits"
      ? "bg-secondary"
      : pathname === "/know"
        ? isScrolled
          ? "bg-secondary"
          : "bg-transparent"
        : showWhiteHeaderBar
          ? "bg-background"
          : "bg-transparent";

  const whiteHeaderBar =
    mobileMenu || lightTopPage || (pathname === "/" && isScrolled);

  /** Links: dark teal on white bar; light text on transparent or secondary bar. */
  const navOnLightBar =
    mobileMenu || lightTopPage || (pathname === "/" && isScrolled);

  const linkBase = (navActive: boolean) => {
    if (navOnLightBar) {
      return navActive
        ? "text-foreground font-semibold underline decoration-2 underline-offset-8"
        : "text-secondary hover:text-foreground";
    }
    return navActive
      ? "text-background font-semibold underline decoration-2 underline-offset-8 decoration-background/80"
      : "text-background hover:text-background/85";
  };

  return (
    <header
      className={`pointer-events-none fixed top-0 z-50 w-full transition-all duration-500 ${headerBgClass} ${
        whiteHeaderBar
          ? "shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)]"
          : "shadow-none"
      }`}
    >
      <div className="pointer-events-auto mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8 lg:px-12">
        <Link href="/" className="relative z-50">
          <Image
            src={navOnLightBar ? "/images/xedab.webp" : "/images/xeda.webp"}
            alt="Xeda Logo"
            width={300}
            height={100}
            priority
            className="h-auto w-[140px] object-contain md:w-[170px]"
          />
        </Link>
        <nav className="hidden items-center gap-8 xl:flex">
          {navItems.map((item) => {
            const navActive = item.isActive(pathname, hash);
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={bumpHashAfterNav}
                className={`text-base text-xxl font-medium transition-all duration-300 ${linkBase(
                  navActive,
                )}`}
                aria-current={navActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Contact Us only on xl+; .btn uses display:flex and can override `hidden` on the same node */}
        <div className="hidden shrink-0 xl:block">
          <Button
            onClick={openContactModal}
            theme={navOnLightBar ? "foreground" : "light"}
            className="!px-8 !py-4 text-sm font-semibold"
          >
            Contact Us
          </Button>
        </div>
        <button
          type="button"
          aria-label={mobileMenu ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenu}
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`relative z-50 xl:hidden ${
            navOnLightBar ? "text-secondary" : "text-background"
          }`}
        >
          {mobileMenu ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <div
        className={`pointer-events-none bg-background transition-all duration-500 xl:hidden ${
          mobileMenu
            ? "pointer-events-auto max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-8 px-6 py-8">
          {navItems.map((item) => {
            const navActive = item.isActive(pathname, hash);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-xl font-medium ${
                  navActive
                    ? "text-foreground underline decoration-2 underline-offset-8"
                    : "text-[var(--secondary)]"
                }`}
                aria-current={navActive ? "page" : undefined}
                onClick={() => {
                  bumpHashAfterNav();
                  setMobileMenu(false);
                }}
              >
                {item.label}
              </Link>
            );
          })}

          <Button
            onClick={() => {
              setMobileMenu(false);
              openContactModal();
            }}
            theme="foreground"
            className="mt-4 !px-7 !py-3 text-base font-semibold"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}
