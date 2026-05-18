import Link from "next/link";
import type React from "react";

interface ButtonProps {
  text?: string;
  className?: string;
  theme?: "light" | "dark" | "foreground";
  scrolled?: boolean;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  children?: React.ReactNode;
}

const Button = ({
  text,
  children,
  className = "",
  theme,
  scrolled = false,
  onClick,
  href,
  target,
  rel,
}: ButtonProps) => {
  // Dynamic theme based on scroll state
  const dynamicTheme = theme || (scrolled ? "dark" : "light");

  const baseClass = `btn btn-${dynamicTheme} ${className}`.trim();

  if (href != null && onClick != null) {
    console.warn(
      "Button: both href and onClick provided; using href and ignoring onClick",
    );
  }

  const content = (
    <>
      <span className="span-bg"></span>
      <span className="span-text">{children || text}</span>
    </>
  );

  if (href != null) {
    return (
      <Link href={href} className={baseClass} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClass}>
      {content}
    </button>
  );
};

export default Button;
