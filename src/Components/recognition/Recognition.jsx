"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Grid, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

const images = [
  "/images/All Students Certifates pics/img1.jpeg",
  "/images/All Students Certifates pics/img2.jpeg",
  "/images/All Students Certifates pics/img3.jpeg",
  "/images/All Students Certifates pics/img4.jpeg",
  "/images/All Students Certifates pics/img5.jpeg",
  "/images/All Students Certifates pics/img6.jpeg",
  "/images/All Students Certifates pics/img7.jpeg",
  "/images/All Students Certifates pics/img8.jpeg",
  "/images/All Students Certifates pics/img9.jpeg",
  "/images/All Students Certifates pics/img10.jpeg",
  "/images/All Students Certifates pics/img11.jpeg",
  "/images/All Students Certifates pics/img13.jpeg",
  "/images/All Students Certifates pics/img14.jpeg",
  "/images/All Students Certifates pics/img15.jpeg",
  "/images/All Students Certifates pics/img16.jpeg",
  "/images/All Students Certifates pics/img17.jpeg",
  "/images/All Students Certifates pics/img18.jpeg",
  "/images/All Students Certifates pics/img19.jpeg",
  "/images/All Students Certifates pics/img20.jpeg",
  "/images/All Students Certifates pics/img21.jpeg",
  "/images/All Students Certifates pics/img22.jpeg",
  "/images/All Students Certifates pics/img23.jpeg",
  "/images/All Students Certifates pics/img24.jpeg",
  "/images/All Students Certifates pics/img25.jpeg",
  "/images/All Students Certifates pics/img26.jpeg",
  "/images/All Students Certifates pics/img27.jpeg",
];

function Recognition() {
  return (
    <>
      <section className="bg-[#2f3f73] py-10 px-4 text-white text-center">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <p className="text-sm tracking-widest mb-2 opacity-80">
            GLOBAL RECOGNITION
          </p>

          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            Dawley Institute Of Technology – Certified Digital Skills Professionals
          </h2>

          <p className="text-sm md:text-base max-w-3xl mx-auto mb-10 opacity-90 leading-relaxed">
            At Dawley Institute Of Technology, We Proudly Train Students Through
            Industry-Focused, Hands-On Learning Designed To Meet Modern Standards.
          </p>

          {/* Slider */}
          <Swiper
            modules={[Autoplay, Grid, Pagination]}
            spaceBetween={20}
            autoplay={{ delay: 2500 }}
            pagination={{ clickable: true }}
            slidesPerView={3}
            grid={{ rows: 2, fill: "row" }}
            className="pb-12"   // 👈 IMPORTANT (space for dots)
            breakpoints={{
              320: { slidesPerView: 1, grid: { rows: 1 } },
              640: { slidesPerView: 2, grid: { rows: 1 } },
              1024: { slidesPerView: 3, grid: { rows: 2, fill: "row" } },
            }}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-md overflow-hidden shadow">
                  <Image
                    src={src}
                    alt="student"
                    width={400}
                    height={250}
                    className="w-full h-[220px] object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>
    </>
  )
}

export default Recognition