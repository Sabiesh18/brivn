"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappCTA() {

    const openWhatsapp = () => {
        const phoneNumber = "917397265512"; // replace with your number
        const message = "Hello, I would like to know more about your services.";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    };

    return (
        <section className="relative w-full py-28 px-6 overflow-hidden bg-black">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.25),transparent_60%)]"></div>

            {/* Content */}
            <div className="relative max-w-5xl mx-auto text-center">

                <h1 className="text-white font-bold leading-tight
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl">

                    Stay{" "}
                    <span className="italic text-gold font-medium">
                        stress-free
                    </span>{" "}
                    with your task!
                </h1>

                <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg">
                    Take a deep breath and manage your tasks with ease!
                </p>

                <button
                    onClick={openWhatsapp}
                    className="mt-10 inline-flex items-center gap-3
          bg-gold text-black font-semibold
          px-8 py-4 rounded-full
          hover:bg-gold
          transition-all duration-300
          shadow-lg hover:scale-105"
                >
                    <FaWhatsapp size={20} />
                    Stay with tools
                </button>

            </div>
        </section>
    );
}