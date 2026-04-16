"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {children}
      <Footer />
    </QueryClientProvider>
  );
}
