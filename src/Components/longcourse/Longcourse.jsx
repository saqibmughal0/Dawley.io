import React from 'react'
import Image from "next/image";
import Link from 'next/link';

function Longcourse() {
    return (
        <>
            <section className='w-full h-auto py-9 flex justify-center items-center flex-col gap-5'>
                <div className="w-[80%] text-white rounded-2xl max-sm:h-auto max-sm:p-3 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/images/IELTS-banner.jpg')" }}>
                    <div className="max-w-7xl mx-auto px-8 flex flex-col-reverse lg:flex-row items-center gap-8">
                        {/* Left Content */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h1 className="text-[25px] sm:text-4xl lg:text-4xl font-extrabold leading-tight">
                                Your English. Your <br /> Confidence. Your Success.
                            </h1>
                            <p className="mt-4 text-[15px] text-base sm:text-lg text-red-100">
                                Build Real Skills That Shape Your Future.
                                Learn English, Improve Communication, Ace Your IELTS. <br />
                                Join Pakistan’s Fastest-Growing Training Institute.
                            </p>
                            <div className="mt-6">
                                <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-md hover:bg-red-100 transition">
                                    <Link href="https://ielts.dawley.io">Learn More</Link> 
                                </button>
                            </div>
                        </div>


                        {/* Right Images */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <div className="relative w-full max-w-md sm:max-w-lg">
                                <Image
                                    src="/images/ieltscourse.png" // apni image yahan rakhein
                                    alt="Students with IELTS books"
                                    width={600}
                                    height={400}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                  <div className="w-[80%] text-white rounded-2xl bg-cover bg-no-repeat" style={{ backgroundImage: "url('/images/bg-se-banner-01-1-scaled.jpg')" }}>
                    <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col-reverse lg:flex-row items-center gap-8 justify-end">
                        {/* Left Content */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold leading-tight">
                                Become a Software Engineer
                            </h1>
                            <h3 className="text-3xl sm:text-4xl lg:text-[20px] font-extrabold leading-tight">
                                (2-Year Professional Career Program)
                            </h3>
                            <p className="mt-4 text-base sm:text-lg text-red-100">
                              This comprehensive two-year program is designed to build strong technical and practical skills required for a successful career in the tech industry. Through hands-on training, real-world projects, and expert mentorship, students are prepared for professional roles with confidence. Our proven track record shows that graduates of this program are well-positioned to secure jobs starting from PKR 100,000 in the technology sector.
                            </p>
                            <div className="mt-6">
                                <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-md hover:bg-red-100 transition">
                                    Learn More
                                </button>
                            </div>
                        </div>


                        {/* Right Images */}
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Longcourse