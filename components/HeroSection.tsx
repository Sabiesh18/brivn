"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from 'next/dynamic';

// Dynamically import the custom 3D Canvas to disable SSR 
const AnimatedBackground = dynamic(() => import('./AnimatedBackground'), {
  ssr: false,
  loading: () => false
});

type CardAnimation = {
  hidden: { opacity: number; y: number };
  visible: (i: number) => {
    opacity: number;
    y: number;
    transition: {
      delay: number;
      duration: number;
    };
  };
};

const cardAnimation: CardAnimation = {
  hidden: { opacity: 0, y: 80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 overflow-hidden min-h-[90vh] flex flex-col justify-center">

      {/* 3D WebGL Background */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-80 mix-blend-multiply flex justify-center items-center">
        <AnimatedBackground />
      </div>

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto p-8 md:p-12">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
            The Future of Manufacturing{" "}
            <span className="text-gold">with Latest Technology</span>
          </h1>

          <p className="text-gray-600 mt-4 md:mt-6 text-base md:text-lg font-medium">
            Expert tech to elevate your manufacturing. Let’s take your business further.
          </p>

        </div>

        {/* Animated Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mt-16 md:mt-20 items-end">

          {/* Image Card */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={cardAnimation}
            className="rounded-2xl overflow-hidden shadow-md"
          >
            <Image
              src="/assets/jpg/hydraulics.jpg"
              alt="factory"
              width={300}
              height={250}
              className="object-cover w-full h-[180px] md:h-[220px]"
            />
          </motion.div>

          {/* Card 1 */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={cardAnimation}
            className="bg-gold text-white p-5 md:p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl md:text-3xl font-bold">100+</h3>
            <p className="text-sm mt-2 opacity-90">
              Our Esteemed Clients and Partners
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={cardAnimation}
            className="bg-white/90 backdrop-blur p-5 md:p-6 rounded-2xl shadow"
          >
            <p className="text-sm text-gray-500">Total Projects</p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
              1951+
            </h3>
            <p className="text-xs text-green-600 mt-1">
              Increase of 126 this month
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={cardAnimation}
            className="bg-yellow-100 p-5 md:p-6 rounded-2xl shadow"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">6+</h3>
            <p className="text-sm text-gray-600 mt-2">
              Years of Dedicated Service
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={cardAnimation}
            className="rounded-2xl overflow-hidden shadow-md"
          >
            <Image
              src="/assets/jpg/gear-close-up.jpg"
              alt="factory"
              width={300}
              height={250}
              className="object-cover w-full h-[180px] md:h-[220px]"
            />
          </motion.div>

        </div>

      </div>

    </section>
  );
}