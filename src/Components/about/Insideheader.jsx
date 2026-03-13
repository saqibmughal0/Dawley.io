import Image from 'next/image'
import React from 'react'

function Insideheader() {
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

export default Insideheader