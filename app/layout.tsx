"use client";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GearLoader from "@/components/GearLoader";
import ScrollToTop from "@/components/ScrollToTop";

import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 600); // loader duration

    return () => clearTimeout(timer);
  }, [pathname]); // runs on every route change

  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${roboto.className} flex flex-col min-h-screen overflow-x-hidden w-full`}>

        {/* Main Site */}
        <Header />
        
        <main className="relative flex-grow flex flex-col overflow-x-hidden w-full">
            {/* Loader overlay constrained to main content area */}
            {loading && <GearLoader />}
            {children}
        </main>

        <Footer />
        <ScrollToTop />

      </body>
    </html>
  );
}