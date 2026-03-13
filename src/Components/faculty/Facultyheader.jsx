import Image from 'next/image'
import React from 'react'

function Facultyheader() {
    return (
        <>
            <section className="relative h-[500px] md:h-[520px] overflow-hidden">
                <div className='max-w-7xl mx-auto px-4 flex items-center h-[500px]'>

                
                {/* Background Image */}
                <Image
                    src="/images/Faculty/banner faculty.png"
                    alt="Empowering Youth of Pakistan"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Content */}
                <div className="relative z-10 flex items-center h-full">
                      <div className="order-2 lg:order-1">
                         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                             Our Faculty & <br /> Leadership Team
                         </h2>

                         <p className="text-gray-600 max-w-xl mb-8 text-white font-medium leading-relaxed">
                             Meet our highly qualified and globally recognized faculty, mentors,
                             and administrative staff shaping the future of tech education at
                             Dawley Institute.
                         </p>

                         <div className="flex flex-wrap gap-4">
                             <button className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium cursor-pointer hover:bg-gray-800 transition">
                                 Join Our Courses
                             </button>

                             <button className="border border-gray-300 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 cursor-pointer hover:text-black transition">
                                 Become a Trainer
                             </button>
                         </div>
                     </div>
                     </div>
                </div>
            </section>
        </>
    )
}

export default Facultyheader