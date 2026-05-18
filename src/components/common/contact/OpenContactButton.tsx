"use client";

import type { ReactNode } from "react";

import { useContactModal } from "@/contexts/ContactModalContext";

type OpenContactButtonProps = {
  className: string;
  children: ReactNode;
};

export default function OpenContactButton({
  className,
  children,
}: OpenContactButtonProps) {
  const { openContactModal } = useContactModal();

  return (
    <button type="button" onClick={openContactModal} className={className}>
      {children}
    </button>
  );
}
