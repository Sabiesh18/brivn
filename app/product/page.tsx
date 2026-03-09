"use client";

import Image from "next/image";

const services = [
    {
        title: "Hydraulic Motors",
        image: "/assets/jpg/hydraulic.jpg",
        description:
            "We supply and service high-performance hydraulic motors designed for industrial machinery and heavy-duty applications. Our motors deliver efficient power transmission, smooth operation, and long-lasting durability with reliable servicing and maintenance support.",
    },
    {
        title: "Hydraulic Pumps",
        image: "/assets/jpg/pumps1.jpg",
        description:
            "We provide high-quality hydraulic pumps suitable for various industrial systems. Our pumps ensure consistent pressure and smooth fluid flow, helping machinery operate efficiently with reduced downtime and improved reliability.",
    },
    {
        title: "Hydraulic Power Pack & Cylinders",
        image: "/assets/jpg/powerpack-and-cylinder.jpg",
        description:
            "We supply and service hydraulic power packs and cylinders used in industrial and engineering applications. Our solutions provide precise motion control, efficient force generation, and long-lasting system performance.",
    },
    {
        title: "Fabrication of Engineering Equipment",
        image: "/assets/jpg/equipment.jpg",
        description:
            "We offer professional fabrication services including cutting, welding, machining, and assembly of engineering equipment. Our fabricated structures are durable, precise, and designed to meet industrial standards.",
    },
];

export default function ServicesPage() {
    return (
        <div className="w-full bg-white">

            {/* Hero Section */}
            <section
                className="relative py-24 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/jpg/service-provide.jpg')" }}
            >
                {/* Gold Overlay */}
                <div className="absolute inset-0 bg-gold/50"></div>

                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">
                        Our Products
                    </h1>

                    <p className="max-w-2xl mx-auto text-white/90">
                        We provide reliable hydraulic solutions and engineering fabrication
                        services for industrial applications with a strong focus on
                        performance, quality, and customer satisfaction.
                    </p>
                </div>
            </section>

            {/* Services */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

                    {services.map((service, index) => (
                        <div key={index} className="relative group">

                            {/* Image */}
                            <div className="relative h-64 rounded-xl overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* Stacked Card */}
                            <div className="bg-white shadow-lg rounded-xl p-6 mx-6 -mt-16 relative z-10 border-t-4 border-[#C8A24A] group-hover:shadow-2xl transition">

                                <h2 className="text-xl font-semibold text-gold mb-3">
                                    {service.title}
                                </h2>

                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>
            </section>

        </div>
    );
}