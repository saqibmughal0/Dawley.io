"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "@/store/cartSlice";
import CartSidebar from "@/components/cart/CartSidebar";


import {
    Bars3Icon,
    XMarkIcon,
    ShoppingCartIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/outline";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaTiktok,
    FaEnvelope,
    FaPhoneAlt,
} from "react-icons/fa";

import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [coursesOpen, setCoursesOpen] = useState(false);
    const pathname = usePathname();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);


    const isActive = (path) =>
        pathname === path
            ? "text-red-600 border-b-2 border-red-600"
            : "text-gray-700 hover:text-red-600";

    return (
        <>
            {/* ================= TOP BAR ================= */}
            <div className="bg-[#0b0b1f] text-white text-sm max-sm:hidden">
                <div className="max-w-[95%] mx-auto flex justify-between items-center px-4 py-2">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2">
                            <FaEnvelope /> info@dawley.io
                        </span>
                        <span className="flex items-center gap-2">
                            <FaPhoneAlt /> 030 111 61 555
                        </span>
                        <span className="flex items-center gap-2">
                            <FaPhoneAlt /> 0334 11 61 555
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <span>Follow Us:</span>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaLinkedinIn />
                        <FaYoutube />
                        <FaTiktok />
                        <div id="google_translate_element" className="ml-4"></div>
                    </div>
                </div>
            </div>

            {/* ================= MAIN NAVBAR ================= */}
            <nav className="bg-white shadow">
                <div className="max-w-[95%] mx-auto px-4">
                    <div className="flex justify-between items-center h-20">
                        {/* LOGO */}
                        <Link href="/">
                            <Image
                                src="/images/logo/Dawley institute logo.png"
                                alt="logo"
                                width={200}
                                height={200}
                                className="cursor-pointer"
                            />
                        </Link>

                        {/* ================= DESKTOP MENU ================= */}
                        <div className="hidden lg:flex items-center gap-4 font-medium">
                            <Link href="/" className={isActive("/")}>Home</Link>
                            <Link href="/insidedawley" className={isActive("/insidedawley")}>
                                Inside Dawley
                            </Link>
                            <Link href="/itcourses" className={isActive("/itcourses")}>IT Courses</Link>
                            <Link href="/navttccourses" className={isActive("/navttccourses")}>NAVTTC Courses</Link>
                            <Link href="#" className={isActive("")}>
                               Dawley School
                            </Link>
                            <a
                                href="https://ielts.dawley.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-red-600"
                            >
                                IELTS
                            </a>
                            <a
                                href="https://dawleybiz.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-red-600"
                            >
                                Test Center
                            </a>

                            <Link href="/faculty" className={isActive("/faculty")}>Faculty</Link>
                            <Link href="" className={isActive("")}>Tech Services</Link>
                            {/* <Link href="/vlogs" className={isActive("/vlogs")}>Vlogs</Link> */}
                            <Link href="/contact" className={isActive("/contact")}>Contact Us</Link>
                        </div>

                        {/* ================= RIGHT ACTIONS ================= */}
                        <div className="flex items-center gap-4">
                            {/* CART */}
                            <div
                                className="relative hidden lg:block cursor-pointer"
                                onClick={() => dispatch(toggleCart())}
                            >
                                <ShoppingCartIcon className="h-6 w-6" />

                                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-2 rounded-full">
                                    {cartItems.length}
                                </span>
                            </div>

                            {/* Clerk Auth Buttons */}
                            <SignedIn>
                                <UserButton /> {/* Profile dropdown */}
                            </SignedIn>

                            <SignedOut>
                                <SignInButton>
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded">Sign In</button>
                                </SignInButton>
                                <SignUpButton>
                                    <button className="px-4 py-2 bg-green-500 text-white rounded">Sign Up</button>
                                </SignUpButton>
                            </SignedOut>

                            {/* Enroll Now Button */}
                            <button className="hidden lg:block bg-red-600 text-white px-6 py-2 rounded-md">
                                <Link href="/enrollnow">Enroll Now</Link>
                            </button>

                            {/* HAMBURGER */}
                            <button className="lg:hidden" onClick={() => setOpen(true)}>
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
                    <Link href="/" onClick={() => setOpen(false)} className={isActive("/")}>Home</Link>
                    <Link href="/insidedawley" onClick={() => setOpen(false)} className={isActive("/insidedawley")}>
                        Inside Dawley
                    </Link>

                    {/* MOBILE IT COURSES */}
                    <div>
                        <button
                            onClick={() => setCoursesOpen(!coursesOpen)}
                            className="flex justify-between items-center w-full"
                        >
                            <span>IT Courses</span>
                            <ChevronDownIcon
                                className={`h-4 w-4 transition-transform ${coursesOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {coursesOpen && (
                            <div className="mt-3 ml-4 flex flex-col gap-3 text-sm">
                                <Link href="/courses/web-development" onClick={() => setOpen(false)}>
                                    Web Development
                                </Link>
                                <Link href="/courses/ui-ux" onClick={() => setOpen(false)}>
                                    UI / UX Design
                                </Link>
                                <Link href="/courses/seo" onClick={() => setOpen(false)}>
                                    SEO & Marketing
                                </Link>
                                <Link href="/courses/graphic-design" onClick={() => setOpen(false)}>
                                    Graphic Design
                                </Link>
                            </div>
                        )}
                    </div>

                    <a
                        href="https://ielts.dawley.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="text-gray-700 hover:text-red-600"
                    >
                        IELTS
                    </a>
                    <Link href="/faculty" onClick={() => setOpen(false)} className={isActive("/faculty")}>Faculty</Link>
                    {/* <Link href="/vlogs" onClick={() => setOpen(false)} className={isActive("/vlogs")}>Vlogs</Link> */}
                    <Link href="/contact" onClick={() => setOpen(false)} className={isActive("/contact")}>Contact Us</Link>

                    {/* ================= MOBILE CLERK BUTTONS ================= */}
                    <SignedIn>
                        <UserButton />
                    </SignedIn>

                    <SignedOut>
                        <SignInButton>
                            <button className="w-full py-3 bg-white text-black rounded">Sign In</button>
                        </SignInButton>
                        <SignUpButton>
                            <button className="w-full py-3 bg-white text-black rounded mt-2">Sign Up</button>
                        </SignUpButton>
                    </SignedOut>

                    <button className="mt-4 bg-red-600 text-white py-3 rounded-md">
                        <Link href="/enrollnow">Enroll Now</Link>
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
            <CartSidebar />
        </>
    );
}

export default Navbar;
