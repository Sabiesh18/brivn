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
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] p-6 md:p-8 rounded-xl border border-[#c9a227]/20 hover:border-[#c9a227] transition"
              >
                <Icon className="text-gold mb-5 md:mb-6" size={28} />

                <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}