"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Layers,
  Wrench,
  Shield,
  Box,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    title: "Production and Assembly",
    desc: "Details on production processes, assembly capacity, and product types.",
    icon: Sparkles,
  },
  {
    title: "Custom Manufacturing",
    desc: "Custom product creation with design and customization options.",
    icon: Layers,
  },
  {
    title: "Quality Control",
    desc: "Procedures and systems in place to ensure high product quality.",
    icon: Wrench,
  },
  {
    title: "Technology and Innovation",
    desc: "Details on the latest manufacturing technologies and innovations.",
    icon: Shield,
  },
  {
    title: "Packaging and Logistics",
    desc: "Packaging and logistics for shipping to customers and distributors.",
    icon: Box,
  },
  {
    title: "Consulting Market Research",
    desc: "Services to help companies understand market needs.",
    icon: TrendingUp,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-black">
            Efficient and Integrated <br />
            <span className="text-gold">Manufacturing Services</span>
          </h2>

          <p className="text-gray-400 mt-3 md:mt-4 text-sm sm:text-base">
            Simplify operations with our efficient, quality-focused services.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="group relative bg-[#0a0a0a] p-8 md:p-10 rounded-2xl border border-[#c9a227]/30 hover:border-[#c9a227] shadow-lg hover:shadow-[0_8px_30px_rgba(201,162,39,0.25)] transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full"
              >
                {/* Subtle gold glow inside the card on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Top border highlight */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c9a227] via-[#f3e5ab] to-[#c9a227] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <div className="relative z-10 flex-grow flex flex-col">
                  <div className="w-16 h-16 bg-[#1a1a1a] border border-[#c9a227]/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#c9a227] transition-colors duration-300 shadow-inner">
                    <Icon className="text-[#c9a227] group-hover:text-black transition-colors duration-300" size={32} />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#c9a227] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm md:text-base leading-relaxed flex-grow">
                    {service.desc}
                  </p>

                  <div className="mt-8 flex items-center text-[#c9a227] text-sm font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Explore Details
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}