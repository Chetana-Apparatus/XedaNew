"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import { ContactModalProvider } from "@/contexts/ContactModalContext";
import FloatingActions from "../common/floating-actions/FloatingActions";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";

import "react-toastify/dist/ReactToastify.css";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ContactModalProvider>
        <Header />
        {children}
        <Footer />
        <FloatingActions />
        <ToastContainer
          position="top-right"
          autoClose={4500}
          style={{ zIndex: 999999 }}
          pauseOnHover
          theme="light"
        />
      </ContactModalProvider>
    </QueryClientProvider>
  );
}
