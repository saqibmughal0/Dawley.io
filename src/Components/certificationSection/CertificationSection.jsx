"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function CertificationSection() {
  const cards = [
    {
      title: "Education System",
      desc: "7th,8th Class, O-Levels, Matric/Intermediate Coaching with strong academic foundation",
      img: "/images/CertificationSection/education system.png",
    },
    {
      title: "Technical Skills",
      desc: "We offers in-demand technical training offers in-demand technical training",
      img: "/images/CertificationSection/education system.png",
    },
    {
      title: "Software House",
      desc: "Real-World Experience to understand industry standards for  job opportunities.",
      img: "/images/CertificationSection/education system.png",
    },
    {
      title: "Pearson VUE Test Center",
      desc: "Globally Recognized Certifications towards career opportunities.",
      img: "/images/CertificationSection/education system.png",
    },
  ];

  return (
    <div className="flex justify-center items-center p-6">
      <section className="bg-[#1e2235] text-white rounded-3xl p-6 max-w-7xl md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-4">
              Education, Skills & Career <br></br> – All Under One Roof
            </h2>

            <p className="text-gray-300 mb-6 max-w-md">
              To create a future-ready generation by combining academic education with practical technical skills, enabling students to become financially independent and career-ready from an early stage.
            </p>

            <button className="flex items-center gap-2 text-white font-medium hover:gap-3 transition-all">
              Explore Our Tech Education System →
            </button>
          </div>

          {/* RIGHT SLIDER */}
          <div>
            <Swiper
              spaceBetween={20}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 2.5 },
                1280: { slidesPerView: 3 },
              }}
            >
              {cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-[#2a2f45] rounded-2xl p-4 hover:scale-105 transition-all">

                    <div className="w-full h-32 relative mb-4 rounded-xl overflow-hidden">
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="text-gray-400 text-sm">{card.desc}</p>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>
    </div>
  );
}