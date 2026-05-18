import type { Metadata } from "next";
import Script from "next/script";
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
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZCHNVMV957"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZCHNVMV957');
          `}
        </Script>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
