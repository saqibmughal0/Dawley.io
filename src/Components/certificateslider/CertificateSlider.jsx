"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CertificateSlider({ title, subtitle, description, certificates, bgColor = "bg-white" }) {
  return (
    <section className={`w-full py-16 px-7 max-sm:py-10 space-y-8 ${bgColor}`}>
      {/* Heading */}
      <div className="text-center space-y-2 ">
        <h5>{subtitle}</h5>
        <h1 className="text-4xl max-sm:text-[25px] font-bold">{title}</h1>
        <p className="max-sm:text-[15px] max-sm:p-4">{description}</p>
      </div>
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full max-w-7xl mx-auto px-7"
      >
        <CarouselContent>

          {certificates.map((img, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="bg-[#1f2d3d] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={img}
                  alt={`Certificate ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </CarouselItem>
          ))}

        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
