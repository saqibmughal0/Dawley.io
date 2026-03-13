import React from 'react'

function Missionvision() {
    return (
        <>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Mission */}
                    <div className="rounded-2xl p-10 text-white shadow-2xl transition hover:-translate-y-2 duration-300
                bg-gradient-to-br from-slate-900 via-slate-800 to-pink-300">
                        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-base leading-relaxed text-slate-100">
                            At <span className="font-semibold">Dawley Institute of Technology</span>, our mission is to
                            <span className="font-semibold"> empower the youth of Pakistan</span> with globally recognized,
                            skill-based education. We bridge the gap between traditional academics and industry needs
                            through <span className="font-semibold">hands-on, mentor-led training</span> in technology,
                            design, digital commerce, and communication.
                            <br /><br />
                            Through our <span className="font-semibold">UK & UAE certified programs</span>, we equip learners
                            with real-world projects, freelancing readiness, and career pathways to succeed locally and
                            compete globally.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="rounded-2xl p-10 text-white shadow-2xl transition hover:-translate-y-2 duration-300
                bg-gradient-to-br from-blue-950 via-indigo-900 to-pink-300">
                        <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                        <p className="text-base leading-relaxed text-slate-100">
                            Our vision is to build <span className="font-semibold">Pakistan’s most trusted skills hub</span>,
                            where education is accessible, practical, and future-focused.
                            <br /><br />
                            By 2030, Dawley Institute aims to be recognized as a
                            <span className="font-semibold"> regional leader in AI, Cybersecurity, Digital Skills, and Creative
                                Education</span>, with alumni contributing to Google, Microsoft, Amazon, and leading startups
                            worldwide.
                        </p>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Missionvision