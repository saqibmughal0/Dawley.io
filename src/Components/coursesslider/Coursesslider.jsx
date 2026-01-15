"use client"

import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function Coursesslider({ title, subtitle, description, courses, bgColor = "bg-white", }) {
    return (
        <>
            <section className={`w-full py-20 max-sm:py-10 flex flex-col items-center space-y-8 ${bgColor}`}>

                {/* Heading */}
                <div className="text-center space-y-2">
                    <h5>{subtitle}</h5>
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <p>{description}</p>
                </div>

                {/* Slider */}
                <Carousel
                    opts={{
                        loop: true,
                        align: "start",
                    }}
                    className="w-full max-w-6xl"
                >
                    <CarouselContent className="ml-2 md:-ml-4">

                        {courses.map((course, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden">

                                    {/* Image */}
                                    <div className="relative w-full h-56">
                                        <Image
                                            src={course.image}
                                            alt={course.title}
                                            fill
                                            className="object-contain"
                                        />

                                        <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-md shadow text-sm font-semibold">
                                            {course.institute}
                                        </div>

                                        <div className="absolute top-3 right-3 flex gap-2">
                                            {course.tools.map((tool, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-[#e7000b] text-white text-xs px-2 py-1 rounded"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 text-center">
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {course.title}
                                        </h3>
                                    </div>

                                    {/* Button */}
                                    <div className="bg-indigo-900">
                                        <button className="w-full text-white font-semibold py-3 hover:bg-indigo-800 transition">
                                            Enroll Now →
                                        </button>
                                    </div>

                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
        </>
    )
}

export default Coursesslider