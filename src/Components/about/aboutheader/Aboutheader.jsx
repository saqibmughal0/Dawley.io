import Image from 'next/image'
import React from 'react'

function Aboutheader() {

    return (
        <>
            <section className="relative w-full h-[500px] md:h-[520px] overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/images/insidedawley/insidedawleyheader.jpg"   // image public folder me rakho
                    alt="Empowering Youth of Pakistan"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Blue Overlay */}
                <div className="absolute inset-0 bg-[#0b2c6f]/80"></div>

                {/* Content */}
                <div className="relative z-10 flex items-center h-full">
                    <div className="max-w-6xl mx-auto px-4">
                        <h1 className="text-white text-3xl md:text-5xl font-bold leading-snug">
                            Empowering The Youth Of Pakistan
                            <br />
                            <span className="text-white">
                                With UK & UEA Certified Skills
                            </span>
                        </h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutheader