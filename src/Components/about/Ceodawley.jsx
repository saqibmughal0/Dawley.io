import Image from 'next/image'
import React from 'react'

function Ceodawley() {
    return (
        <>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Image
                        src="/images/insidedawley/ceo.webp"
                        alt="CEO Sulman Sarwer"
                        width={700}
                        height={300}
                        className='rounded-2xl'
                    />

                    {/* Vision */}
                    <div className="rounded-2xl text-[#1f2b5b]">
                        <h2 className="text-3xl font-bold">Sulman Sarwer</h2>
                        <h4 className="text-1xl font-bold mb-2">CEO & Founder, Dawley Institute of Technology</h4>
                        <p className="text-base leading-relaxed">
                            “At Dawley Institute, our purpose has always been clear, to empower the youth of Pakistan with skills that are globally recognised, practical, and future driven.
                            I began this journey with the conviction that talent in our country is limitless, but opportunities are often scarce. Dawley Institute is my way of breaking those barriers, by providing UK & UAE certified programs, mentor-led learning, and a roadmap that connects every student to real projects, freelancing, and global careers.
                            Education today is no longer about degrees alone; it’s about skills, creativity, and adaptability. That is why every program at Dawley is designed to ensure that when our students graduate, they don’t just carry a certificate, they carry confidence, a portfolio, and the mindset of a professional.
                            To every student reading this: your journey is not defined by where you start, but by how determined you are to learn, grow, and keep moving forward. At Dawley, you are not just learning a course; you are joining a movement of change-makers who will shape the future of Pakistan and beyond.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ceodawley