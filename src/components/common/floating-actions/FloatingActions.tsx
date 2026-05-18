"use client";

import { ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_HREF = "https://wa.me/919172266069";
const SCROLL_TOP_THRESHOLD_PX = 50;

export default function FloatingActions() {
  const pathname = usePathname();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const onScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: reset scroll-top visibility on route change
  useEffect(() => {
    const update = () => {
      setShowScrollTop(window.scrollY >= SCROLL_TOP_THRESHOLD_PX);
    };

    update();
    const raf = requestAnimationFrame(update);

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 max-[480px]:bottom-4 max-[480px]:right-4">
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl ring-1 ring-black/10 transition-all duration-300 hover:scale-110 active:scale-100"
      >
        <FaWhatsapp size={32} aria-hidden />
      </a>

      {showScrollTop ? (
        <button
          type="button"
          onClick={onScrollTop}
          aria-label="Scroll to top"
          className="pointer-events-auto flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-secondary text-background border border-background shadow-2xl ring-1 ring-black/10 transition-all duration-300 hover:scale-110 active:scale-100"
        >
          <ChevronUp className="h-8 w-8" strokeWidth={2.25} aria-hidden />
        </button>
      ) : null}
    </div>
  );
}
