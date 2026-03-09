"use client";

import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="w-full bg-white">

            {/* Header Section */}
            <section id='about'
                className="relative py-28 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/jpg/about-us.jpg')" }}
            >

                {/* Overlay */}
                <div className="absolute inset-0 bg-white/20"></div>

                {/* Content */}
                <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                        <Image
                            src="/assets/png/Brivin_logo_new_transparent.png"
                            alt="Company Logo"
                            width={120}
                            height={120}
                            className="object-contain"
                        />
                    </div>

                    {/* Company Name */}
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                        Brivn Private Limited
                    </h1>
                </div>
            </section>

            {/* About Content */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Image */}
                        <div className="relative h-[350px] w-full rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/assets/jpg/about.jpg"
                                alt="About Company"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Text */}
                        <div>
                            <h2 className="text-2xl font-bold text-gold mb-4">
                                About Our Company
                            </h2>

                            <p className="text-gray-600 mb-4 leading-relaxed">
                                BRIVN Engineering Solutions specializes in providing reliable
                                hydraulic systems, engineering fabrication, and industrial
                                equipment solutions. Our team is committed to delivering
                                high-quality products and services that meet modern industrial
                                requirements.
                            </p>

                            <p className="text-gray-600 mb-4 leading-relaxed">
                                With expertise in hydraulic motors, pumps, power packs,
                                cylinders, and fabrication of engineering equipment, we focus
                                on precision, durability, and performance. Our goal is to
                                support industries with dependable solutions that improve
                                productivity and operational efficiency.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                We believe in building strong relationships with our clients by
                                providing reliable service, technical expertise, and customized
                                engineering solutions tailored to their needs.
                            </p>

                        </div>

                    </div>

                </div>
            </section>

            {/* Highlights Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <h3 className="text-3xl font-bold text-gold mb-2">50+</h3>
                        <p className="text-gray-600">Projects Completed</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <h3 className="text-3xl font-bold text-gold mb-2">30+</h3>
                        <p className="text-gray-600">Happy Clients</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <h3 className="text-3xl font-bold text-gold mb-2">100%</h3>
                        <p className="text-gray-600">Quality Commitment</p>
                    </div>

                </div>
            </section>

        </div>
    );
}