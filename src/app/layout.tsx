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
    <html lang="en" className="h-full antialiased font-sans">
      <body>
        {/* Google Tag Manager — beforeInteractive hoists to head */}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5SNSWFCZ');`}
        </Script>
        {/* GTM (noscript): required for users with JS disabled */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5SNSWFCZ"
            title="Google Tag Manager"
            height={0}
            width={0}
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
