"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    show && (
      <button
        onClick={scrollTop}
        className="fixed bottom-8 right-8 z-[999] w-12 h-12 flex items-center justify-center rounded-full bg-gold text-white shadow-lg hover:scale-110 transition"
      >
        <FaArrowUp />
      </button>
    )
  );
}