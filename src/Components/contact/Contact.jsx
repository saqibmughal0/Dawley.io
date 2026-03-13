"use client";
import React from "react";

export default function Contact() {
    return (
        <section className="w-full px-4 md:px-10 py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

                {/* LEFT: Contact Info */}
                <div className="bg-[#062b6f] text-white rounded-lg p-8 flex flex-col justify-between">

                    {/* Phone 1 */}
                    <div className="flex items-start gap-4 border-b border-white/30 pb-6">
                        <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                            📞
                        </div>
                        <div>
                            <p className="text-sm">Make a Call</p>
                            <p className="text-lg font-semibold">030 111 61 555</p>
                        </div>
                    </div>

                    {/* Phone 2 */}
                    <div className="flex items-start gap-4 border-b border-white/30 py-6">
                        <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                            📞
                        </div>
                        <div>
                            <p className="text-sm">Make a Call</p>
                            <p className="text-lg font-semibold">0334 11 61 555</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4 border-b border-white/30 py-6">
                        <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                            ✉️
                        </div>
                        <div>
                            <p className="text-sm">Drop A Mail</p>
                            <p className="text-lg font-semibold">info@dawley.io</p>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4 pt-6">
                        <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                            📍
                        </div>
                        <div>
                            <p className="text-sm">Reach Us</p>
                            <p className="text-lg font-semibold leading-snug">
                                Nizam Chamber 7-A Queens Road,
                                Jinnah Town, Lahore, Pakistan
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Contact Form */}
                <div className="bg-white rounded-lg p-8">
                    <h2 className="text-3xl font-bold mb-2">
                        <span className="text-red-600">We'd Love</span>{" "}
                        <span className="text-[#062b6f]">To Hear From You</span>
                    </h2>

                    <p className="text-gray-600 mb-6">
                        For additional information please do not hesitate to contact us
                    </p>

                    <form className="space-y-5">
                        {/* Name + Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium">Name*</label>
                                <input
                                    type="text"
                                    placeholder="Muhammad Ali"
                                    className="w-full mt-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Email*</label>
                                <input
                                    type="email"
                                    placeholder="abc@gmail.com"
                                    className="w-full mt-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="text-sm font-medium">Write Message*</label>
                            <textarea
                                rows="5"
                                placeholder="Write Message"
                                className="w-full mt-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                            ></textarea>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-red-700 transition"
                        >
                            Send Message →
                        </button>
                    </form>
                </div>
            </div>

            <div className='flex justify-center items-center mt-10'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6799.641689242375!2d74.322232!3d31.556531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190554447ee737%3A0xec6ca6aa98c73bc!2sDawley%20Institute%20of%20Technology%20(DIT)!5e0!3m2!1sen!2sus!4v1768396641950!5m2!1sen!2sus"
                    width="100%"
                    height="375"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </section>
    );
}
