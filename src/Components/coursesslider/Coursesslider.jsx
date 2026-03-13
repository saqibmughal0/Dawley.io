"use client"

import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function Coursesslider({ title, subtitle, description, courses }) {
    return (
        <section className="w-full py-20 max-sm:py-10 bg-gray-50">

            {/* Heading */}
            <div className="text-center space-y-2 mb-10">
                <h5 className="text-indigo-600 font-semibold">{subtitle}</h5>
                <h2 className="text-4xl font-bold">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>

            {/* Slider */}
            <Carousel opts={{ align: "start", loop: true }} className="max-w-7xl mx-auto px-7">
                <CarouselContent>

                    {courses.map((course, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-full md:basis-1/2 lg:basis-1/3"
                        >
                            <div className="bg-white rounded-2xl overflow-hidden">

                                {/* Image */}
                                <div className="relative h-52 bg-gray-100">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-5 space-y-3">

                                    {/* Title */}
                                    <h3 className="font-bold text-lg leading-snug">
                                        {course.title}
                                    </h3>

                                    {/* Subtitle */}
                                    <p className="text-sm text-gray-600">
                                        {course.subtitle}
                                    </p>

                                    {/* Meta */}
                                    <div className="flex items-center gap-3 flex-wrap text-sm">
                                        <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded font-semibold">
                                            Bestseller
                                        </span>

                                        <span className="flex items-center gap-1">
                                            ⭐ <strong>4.6</strong>
                                        </span>

                                        <span className="text-gray-500">
                                            (13,834 ratings)
                                        </span>
                                    </div>

                                    {/* Duration */}
                                    <div className="inline-flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm">
                                        ⏱ Duration: 6 weeks
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="px-5 pb-5 flex justify-between items-center">
                                    <span className="text-indigo-700 font-semibold cursor-pointer">
                                        Read More →
                                    </span>

                                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                                        Enroll Now
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
    )
}

export default Coursesslider
