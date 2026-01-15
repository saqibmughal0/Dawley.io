"use client";
import { useEffect, useState } from "react";

const slides = [
    {
        title: "Become a Software Engineer",
        desc: "Build your career with Pakistan’s most advanced Software Engineering course. Learn 25+ modern technologies, work on 200+ Industrial projects, and secure your future in tech with 100% Job Placement",
        image: "/images/headerslider/banner-1.jpg",
    },
    {
        title: "Become a Cyber Security Expert",
        desc: "Learn how to protect systems, data, and networks from cyber threats. Dawley Institute’s Cyber Security Program equips you with real-world skills in ethical hacking, network defense, and cyber forensics preparing you for global career opportunities.",
        image: "images/headerslider/banner-2.jpg",
    },
    {
        title: "Master Artificial Intelligence with Python Programming",
        desc: "Turn Code into Intelligence Learn how to design smart systems and intelligent applications using Python. Dawley Institute’s AI with Python Program combines data science, machine learning, and real-world projects to prepare you for global tech careers and freelance opportunities.",
        image: "images/headerslider/banner-3.jpg",
    },
    {
        title: "Build your Skills with Pakistan’s most Practical Based Training Institute",
        desc: "Through hands-on projects, expert mentorship & industry driven training. At Dawley Institute, we turn your potential into professional success preparing you for a high-paying career in the global tech industry.",
        image: "images/headerslider/banner-4.jpg",
    }
];

function Header() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };
    return (
        <>
            <section className="relative w-full h-[70vh] md:h-[50vh] overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    >
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="w-full h-full bg-black/50 flex items-center">
                                <div className="max-w-6xl min-lg:w-[100%] mx-auto px-6 text-white">
                                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                                        {slide.title}
                                    </h1>
                                    <p className="text-base md:text-xl max-w-xl mb-6">
                                        {slide.desc}
                                    </p>
                                    <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-md font-semibold">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Arrows (Hidden on Mobile) */}
                <button
                    onClick={prevSlide}
                    className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 z-20"
                >
                    &#10094; {/* Left Arrow */}
                </button>
                <button
                    onClick={nextSlide}
                    className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 z-20"
                >
                    &#10095; {/* Right Arrow */}
                </button>

                {/* Dots */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`w-3 h-3 rounded-full ${i === current ? "bg-red-600" : "bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Header