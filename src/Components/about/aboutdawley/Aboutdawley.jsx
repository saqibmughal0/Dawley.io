import Image from 'next/image'
import React from 'react'

function Aboutdawley() {
    return (
        <>
            <section className="w-full py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1f2b5b] mb-4">
                            About Dawley Institute Inside
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            Founded with the spirit of innovation from Dawley (Shropshire, UK),
                            we deliver industry-aligned learning in Pakistan with UK & UAE
                            reference certifications. Our promise is simple:
                            <span className="font-semibold text-[#1f2b5b]">
                                {" "}Learn. Build. Belong
                            </span>
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-[#1f2b5b] text-lg">◎</span>
                                <span className="text-gray-700">
                                    Mentor-led classes with small cohorts
                                </span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="text-[#1f2b5b] text-lg">◎</span>
                                <span className="text-gray-700">
                                    Blended learning: on-campus labs + online
                                </span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="text-[#1f2b5b] text-lg">◎</span>
                                <span className="text-gray-700">
                                    Portfolio projects and interview prep
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT IMAGES */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative h-44 md:h-52">
                            <Image
                                src="/images/insidedawley/dawley-1.webp"
                                alt="Dawley UK"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover rounded-lg"
                            />
                        </div>

                        <div className="relative h-44 md:h-52">
                            <Image
                                src="/images/insidedawley/dawley-2.webp"
                                alt="Dawley UK"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover rounded-lg"
                            />
                        </div>

                        <div className="relative h-44 md:h-52">
                            <Image
                                src="/images/insidedawley/dawley-3.webp"
                                alt="Dawley UK"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover rounded-lg"
                            />
                        </div>

                        <div className="relative h-44 md:h-52">
                            <Image
                                src="/images/insidedawley/dawley-4.webp"
                                alt="Dawley UK"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Aboutdawley