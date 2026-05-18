import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/wrappers/ClientWrapper";

export const metadata: Metadata = {
  title: "Xeda Farm",
  description: "Xeda Farm is a company that produces wheatgrass shot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased font-suisse">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
