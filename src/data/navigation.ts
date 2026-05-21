export type NavItem = {
  label: string;
  href: string;
  isActive: (pathname: string, hash: string) => boolean;
};

export const footerQuickLinksColumn1 = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Blog", href: "/blogs" },
] as const;

export const footerQuickLinksColumn2 = [
  { label: "Green Blood", href: "/green-blood" },
  { label: "Benefits", href: "/#benefits" },
  {
    label: "The Science Behind Wheatgrass",
    href: "/the-science-behind-fresh-wheatgrass",
  },
] as const;

/** @deprecated Use footerQuickLinksColumn1 and footerQuickLinksColumn2 */
export const quickNavLinks = [
  ...footerQuickLinksColumn1,
  ...footerQuickLinksColumn2,
] as const;

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/#home",
    isActive: (pathname, hash) =>
      pathname === "/" && (hash === "" || hash === "#home"),
  },
  {
    label: "Green Blood",
    href: "/green-blood",
    isActive: (pathname) => pathname === "/green-blood",
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
