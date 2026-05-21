"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button/Button";
import { useContactModal } from "@/contexts/ContactModalContext";
import { navItems } from "@/data/navigation";

export default function Header() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { openContactModal } = useContactModal();

  const handleOpenContact = () => {
    setMobileMenu(false);
    openContactModal();
  };

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

  /** White header bar + dark nav from page load (not scroll). */
  const lightTopPage =
    pathname.startsWith("/blogs") ||
    pathname === "/green-blood" ||
    pathname === "/benefits" ||
    pathname === "/the-science-behind-fresh-wheatgrass";

  const showWhiteHeaderBar = mobileMenu || lightTopPage || isScrolled;

  const headerBgClass = showWhiteHeaderBar ? "bg-background" : "bg-transparent";

  const whiteHeaderBar = showWhiteHeaderBar;

  const navOnLightBar = showWhiteHeaderBar;

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
      {/* All interactive header UI in one pointer-events-auto block (drawer was outside before) */}
      <div className="pointer-events-auto mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between py-4">
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
                  className={`text-base text-xxl font-bold transition-all duration-300 ${linkBase(
                    navActive,
                  )}`}
                  aria-current={navActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 xl:block">
            <Button
              onClick={openContactModal}
              theme={navOnLightBar ? "foreground" : "light"}
            >
              Contact Us
            </Button>
          </div>

          <button
            type="button"
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenu}
            onClick={() => setMobileMenu(!mobileMenu)}
            className={`shrink-0 xl:hidden ${
              navOnLightBar ? "text-secondary" : "text-background"
            }`}
          >
            {mobileMenu ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        <div
          className={`overflow-hidden bg-background transition-all duration-500 xl:hidden ${
            mobileMenu
              ? "max-h-[min(600px,calc(100dvh-5rem))] overflow-y-auto opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-8 px-2 pb-8 pt-2">
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
              onClick={handleOpenContact}
              theme="foreground"
              className="mt-4"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
