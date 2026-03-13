"use client";
import React from "react";
import Image from "next/image";

const newsImages = [
  "/images/news/pic1.webp",
  "/images/news/pic3.webp",
  "/images/news/pic4.webp",
  "/images/news/pic5.webp",
  "/images/news/pic6.webp",
  "/images/news/pic7.webp",
  "/images/news/pic8.webp",
];

export default function News() {
  return (
    <section className="w-full px-4 md:px-10 py-12">
      
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-4">Latest News</h2>
      <hr className="mb-8" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT: Video */}
        <div className="lg:col-span-2">
          <div className="w-full max-h-[500px] rounded-lg overflow-hidden shadow">
            <video
              src="/images/news/eventvideo.mp4"
              controls
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT: News Images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {newsImages.map((img, index) => (
            <div
              key={index}
              className="relative w-full aspect-video rounded overflow-hidden shadow"
            >
              <Image
                src={img}
                alt="News"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
