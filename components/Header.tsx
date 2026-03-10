"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full h-20 fixed top-0 left-0 z-[100] transition-all duration-300
        ${scrolled
            ? "backdrop-blur-md bg-white/70 shadow-md"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/assets/png/Brivin_logo_new_transparent.png"
              alt="BRIVN Logo"
              width={55}
              height={55}
              className="object-contain"
              priority
            />

            <span className="text-lg md:text-xl font-bold tracking-widest text-gray-900">
              BRIVN
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <Link href="/" className="hover:text-gold transition">Home</Link>
            <Link href="/product" className="hover:text-gold transition">Products</Link>
            <Link href="/services" className="hover:text-gold transition">Services</Link>
            <Link href="/about" className="hover:text-gold transition">About Us</Link>
          </nav>

          {/* Desktop Button */}
          <Link href="/contact">
            <button className="hidden md:block bg-gold hover:bg-gold-dark text-white px-5 py-2 rounded-full font-medium transition">
              Contact Us
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 w-full bg-white shadow-lg z-[90] md:hidden"
          >
            <nav className="flex flex-col items-center gap-6 py-8 text-gray-700 font-medium">

              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/products" onClick={() => setMenuOpen(false)}>Products</Link>
              <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>

              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                <button className="bg-gold text-white px-6 py-2 rounded-full">
                  Contact Us
                </button>
              </Link>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}