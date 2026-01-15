import React from 'react'

import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <>
     <footer className="bg-[#f5f5f5] flex flex-col justify-center items-center">

      {/* ================= TOP FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid gap-10 lg:grid-cols-4 md:grid-cols-2">

        {/* ABOUT */}
        <div>
          <Image
            src="/images/logo/Dawley institute logo.png"
            alt="Dawley"
            width={180}
            height={60}
          />
          <p className="mt-4 text-gray-600 leading-relaxed">
            Dawley is a tech institute focused on practical digital skills.
            We empower students to grow in IT with hands-on learning in web,
            design, and marketing.
          </p>

          <div className="flex gap-3 mt-5">
            <SocialIcon><FaFacebookF /></SocialIcon>
            <SocialIcon><FaInstagram /></SocialIcon>
            <SocialIcon><FaLinkedinIn /></SocialIcon>
            <SocialIcon><FaYoutube /></SocialIcon>
            <SocialIcon><FaTiktok /></SocialIcon>
          </div>
        </div>

        {/* IT COURSES */}
        <FooterList
          title="IT Courses"
          items={["Become a Software Engineering"]}
        />

        {/* SHORT COURSES */}
        <FooterList
          title="Short Courses"
          items={[
            "AI Website Development",
            "AI Graphic Designing Lab",
            "AI Digital Marketing (Ads & Analytics)",
          ]}
        />

        {/* NAVTTC */}
        <FooterList
          title="NAVTTC Courses"
          items={[
            "Advance Web Application Development",
            "Cyber Security (CEH, CHFI)",
            "Cloud Computing (AWS)",
          ]}
        />
      </div>

      {/* ================= OFFICES ================= */}
      <div className="bg-gradient-to-r from-[#14145c] to-[#1c1c7a] text-white w-[65%] rounded-[5px] max-sm:h-auto mb-8 h-52 flex justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">

          <OfficeCard
            country="Pakistan Office"
            address="Nizam Chamber 7-Shahra-E-Fatima Jinnah, Lahore Pakistan"
            phone="+92 30 111 61 555"
          />

          <OfficeCard
            country="UAE Office"
            address="E311 Sheikh Mohammad Bin Zayed Road, Al Zahia, Sharjah, UAE"
            phone="+971 588 859810"
          />

          <OfficeCard
            country="UK Office"
            address="269, Foleshill Road, Coventry, United Kingdom, CV1 4JZ"
            phone="+44 24 76222560"
          />
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="bg-[#0b0b1f] text-gray-300 text-sm w-full">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p>Copyright © 2026 Dawley.io | Powered by Dawley.io</p>
          <div className="flex gap-4">
            <a href="#">Terms & Condition</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

function FooterList({ title, items }) {
  return (
    <div>
      <h3 className="font-semibold text-lg text-[#14145c] border-b pb-2">
        {title}
      </h3>
      <ul className="mt-4 space-y-3 text-gray-700">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-[#14145c] mt-1">›</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function OfficeCard({ country, address, phone }) {
  return (
    <div className="space-y-4">
      <h4 className="text-xl font-semibold border-b border-white/30 pb-2">
        {country}
      </h4>

      <div className="flex gap-3">
        <FaMapMarkerAlt className="text-red-400 mt-1" />
        <p>{address}</p>
      </div>

      <div className="flex gap-3">
        <FaPhoneAlt className="text-red-400" />
        <p>{phone}</p>
      </div>
    </div>
  );
}

function SocialIcon({ children }) {
  return (
    <div className="w-9 h-9 flex items-center justify-center bg-gray-900 text-white rounded">
      {children}
    </div>
  );
}


export default Footer