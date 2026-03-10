"use client";

import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

                    {/* Logo + Description */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/assets/png/Brivin_logo_new_transparent.png"
                                alt="BRIVN Logo"
                                width={55}
                                height={55}
                                className="object-contain"
                                priority
                            />

                            <span className="text-lg md:text-xl font-bold tracking-widest text-white">
                                BRIVN
                            </span>
                        </div>

                        <p className="text-sm text-gray-400 leading-relaxed">
                            Our solutions make production faster and cheaper.
                            Contact us for more information.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="hover:text-[#C9A14A] transition">About Us</Link></li>
                            <li><Link href="#" className="hover:text-[#C9A14A] transition">Services</Link></li>
                            <li><Link href="#" className="hover:text-[#C9A14A] transition">Products</Link></li>
                            <li><Link href="#" className="hover:text-[#C9A14A] transition">Vlogs</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Services</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="hover:text-[#C9A14A] transition">Hydraulic Motors</Link></li>
                            <li><Link href="#" className="hover:text-[#C9A14A] transition">Pumps</Link></li>
                            <li><Link href="#" className="hover:text-[#C9A14A] transition">Powerpack & Cylinder Supply</Link></li>
                            <li><Link href="#" className="hover:text-[#C9A14A] transition">Engineering Equipment Fabrication</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Products</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="hover:text-[#C9A14A] transition">Manufacturing Execution System</Link></li>
                            <li><Link href="#" className="hover:text-[#C9A14A] transition">Enterprise Resource Planning</Link></li>
                            <li><Link href="#" className="hover:text-[#C9A14A] transition">Quality Management System</Link></li>
                            <li><Link href="#" className="hover:text-[#C9A14A] transition">Supply Chain Planning</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Get In Touch</h4>

                        <p className="text-sm mb-5">
                            <a
                                href="mailto:sales.brivn@gmail.com"
                                className="hover:text-[#C9A14A] transition"
                            >
                                sales.brivn@gmail.com
                            </a>
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            <div className="border border-gray-700 hover:bg-[#C9A14A] hover:text-black p-3 rounded-md cursor-pointer transition">
                                <FaLinkedinIn size={14} />
                            </div>

                            <div className="border border-gray-700 hover:bg-[#C9A14A] hover:text-black p-3 rounded-md cursor-pointer transition">
                                <FaInstagram size={14} />
                            </div>

                            <div className="border border-gray-700 hover:bg-[#C9A14A] hover:text-black p-3 rounded-md cursor-pointer transition">
                                <FaFacebookF size={14} />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">

                    <p>© 2026 BRIVN, All rights reserved</p>

                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-[#C9A14A] transition">
                            Terms & Conditions
                        </Link>

                        <Link href="#" className="hover:text-[#C9A14A] transition">
                            Privacy Policy
                        </Link>
                    </div>

                </div>

            </div>
        </footer>
    );
}