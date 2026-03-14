"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();

        if (data.success) {
            alert("Message sent successfully!");
            setForm({
                firstName: "",
                lastName: "",
                email: "",
                message: ""
            });
        } else {
            alert("Failed to send message.");
        }
    };
    return (
        <section id='contact' className="w-full bg-white py-30 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

                {/* LEFT CONTENT */}
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                        Get in <span className="text-gold">—</span>
                        <br />
                        touch with us
                    </h2>

                    <p className="text-gray-600 max-w-md">
                        We're here to help! Whether you have a question about our services,
                        need assistance with your account, or want to provide feedback,
                        our team is ready to assist you.
                    </p>

                    <div className="space-y-4 pt-2">
                        <div>
                            <p className="text-gray-500 text-sm">Email:</p>
                            <p className="text-lg font-medium text-gray-900">
                                sales.brivn@gmail.com
                            </p>
                            <p className="text-lg font-medium text-gray-900">
                                techcare.brivn@gmail.com
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-500 text-sm">Phone:</p>
                            <p className="text-lg font-medium text-gray-900">
                                +91 7397265512
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="bg-gray-50 p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                    <form onSubmit={handleSubmit} className="space-y-6 text-black">

                        {/* NAME */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter your first name..."
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-600 placeholder-gray-400"
                            />

                            <input
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter your last name..."
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-600 placeholder-gray-400"
                            />
                        </div>

                        {/* EMAIL */}
                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Enter your email address..."
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-600 placeholder-gray-400"
                        />

                        {/* MESSAGE */}
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Enter your message..."
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-600 placeholder-gray-400"
                        />

                        {/* BUTTON */}
                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                className="flex items-center gap-3 bg-black text-white px-7 py-3 rounded-full hover:bg-gold transition-all duration-300"
                            >
                                Send Message
                                <ArrowRight size={18} />
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
}