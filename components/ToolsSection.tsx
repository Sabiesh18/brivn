"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
    {
        title: "Hydraulic Motors",
        image: "/assets/jpg/hydraulic.jpg",
        description:
            "We supply and service high-quality hydraulic motors used in a wide range of industrial and mobile machinery. Our motors are designed to deliver reliable performance, high torque, and efficient power transmission in demanding environments. We also provide maintenance, repair, and replacement services to ensure smooth and continuous operation of hydraulic systems.",
    },
    {
        title: "Pumps",
        image: "/assets/jpg/pumps1.jpg",
        description:
            "We provide durable and efficient hydraulic pumps suitable for various industrial applications. Our pumps are designed to deliver consistent pressure and smooth fluid flow, ensuring optimal performance of hydraulic systems. We also offer installation, troubleshooting, and regular maintenance services.",
    },
    {
        title: "Powerpack and Cylinder",
        image: "/assets/jpg/powerpack-and-cylinder.jpg",
        description:
            "We specialize in the supply and servicing of hydraulic power packs and cylinders widely used in industrial machinery and engineering systems. Our solutions ensure efficient power delivery, precise motion control, durability, and safety.",
    },
    {
        title: "Fabrication of Engineering Equipment",
        image: "/assets/jpg/equipment.jpg",
        description:
            "We offer professional fabrication services including precision cutting, welding, machining, and assembly to build reliable engineering equipment. Our team works closely with clients to deliver customized, high-quality fabrication solutions.",
    },
];

export default function ToolsSections() {
    return (
        <section id="services" className="py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Our Services
                    </h2>

                    <div className="w-20 h-1 bg-[#C9A14A] mx-auto mt-4"></div>
                </div>

                {/* Services */}
                <div className="space-y-24">

                    {services.map((service, index) => {
                        const reverse = index % 2 === 1;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:flex-row-reverse" : ""
                                    }`}
                            >

                                {/* Image */}
                                <div className={`${reverse ? "lg:order-2" : ""}`}>
                                    <div className="relative group overflow-hidden rounded-xl shadow-lg">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-[320px] object-cover transform group-hover:scale-105 transition duration-500"
                                        />

                                        <div className="absolute inset-0 bg-[#C9A14A]/10 opacity-0 group-hover:opacity-100 transition"></div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`${reverse ? "lg:order-1" : ""}`}>
                                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                                        {service.title}
                                    </h3>

                                    <div className="w-12 h-1 bg-[#C9A14A] mb-6"></div>

                                    <p className="text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}