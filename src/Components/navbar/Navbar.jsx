"use client";
import { useState } from "react";
import {
    Bars3Icon,
    XMarkIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/outline";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaEnvelope,
  FaPhoneAlt 
} from "react-icons/fa";

import Image from "next/image";


function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <>
            {/* ================= TOP BAR ================= */}
            <div className="bg-[#0b0b1f] text-white text-sm max-sm:hidden">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
                    <div className="flex gap-6">
                        <span className="flex justify-center items-center gap-2"><FaEnvelope /> info@dawley.io</span>
                        <span className="flex justify-center items-center gap-2"><FaPhoneAlt /> 030 111 61 555</span>
                        <span className="flex justify-center items-center gap-2"><FaPhoneAlt /> 0334 11 61 555</span>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <span>Follow Us:</span>
                        <span><FaFacebookF /></span>
                        <span><FaInstagram /></span>
                        <span><FaLinkedinIn /></span>
                        <span><FaYoutube /></span>
                        <span><FaTiktok /></span>
                    </div>
                </div>
            </div>

            {/* ================= MAIN NAVBAR ================= */}
            <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-20">

                        {/* LOGO */}
                        <div className="flex items-center">
                            <Image
                                src="/images/logo/Dawley institute logo.png"
                                alt="logo"
                                width={200}
                                height={200}
                            />
                        </div>

                        {/* DESKTOP MENU */}
                        <div className="hidden lg:flex items-center gap-8 font-medium">
                            <a href="/" className="text-red-600">Home</a>
                            <a href="/insidedawley">Inside Dawley</a>
                            <a href="#">IT Courses</a>
                            <a href="#">IELTS</a>
                            <a href="#">Faculty</a>
                            <a href="#">Vlogs</a>
                            <a href="#">Contact Us</a>
                        </div>

                        {/* RIGHT ACTIONS */}
                        <div className="flex items-center gap-4">
                            <div className="relative hidden lg:block">
                                <ShoppingCartIcon className="h-6 w-6" />
                                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-1 rounded-full">
                                    0
                                </span>
                            </div>

                            <button className="hidden lg:block bg-red-600 text-white px-6 py-2 rounded-md">
                                Enroll Now
                            </button>

                            {/* HAMBURGER */}
                            <button
                                className="lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <Bars3Icon className="h-8 w-8" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ================= MOBILE SLIDE MENU ================= */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 z-50 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <span className="text-xl font-bold">Menu</span>
                    <button onClick={() => setOpen(false)}>
                        <XMarkIcon className="h-7 w-7" />
                    </button>
                </div>

                <div className="flex flex-col p-6 gap-5 font-medium">
                    <a href="#" onClick={() => setOpen(false)}>Home</a>
                    <a href="#">Inside Dawley</a>
                    <a href="#">IT Courses</a>
                    <a href="#">IELTS</a>
                    <a href="#">Faculty</a>
                    <a href="#">Vlogs</a>
                    <a href="#">Contact Us</a>

                    <button className="mt-4 bg-red-600 text-white py-3 rounded-md">
                        Enroll Now
                    </button>
                </div>
            </div>

            {/* OVERLAY */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setOpen(false)}
                />
            )}
        </>
    );
}

export default Navbar