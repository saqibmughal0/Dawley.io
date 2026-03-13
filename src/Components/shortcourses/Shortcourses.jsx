import React from "react"
import Image from "next/image"
import Link from "next/link"

function Shortcourses() {
   const courses = [
    {
        title: "Best Ai Graphic Designing Lab",
        subtitle: "Complete Graphic Designing Bootcamp",
        image: "/images/short courses images/Graphics.webp",
        slug: "graphic-design"  // ✅ add slug
    },
    {
        title: "Web Development With AI & Freelancing",
        subtitle: "Complete Web Development Bootcamp",
        image: "/images/short courses images/Wordpress.webp",
        slug: "web-development"  // ✅ add slug
    },
    {
        title: "AI Digital Marketing (Ads & Analytics)",
        subtitle: "Complete Digital Marketing Bootcamp",
        image: "/images/short courses images/Digital.png",
        slug: "digital-marketing"  // ✅ add slug
    },
    {
        title: "Best Ai Graphic Designing Lab",
        subtitle: "Complete Graphic Designing Bootcamp",
        image: "/images/short courses images/Graphics.webp",
        slug: "graphic-design"  // ✅ add slug
    },
    {
        title: "Web Development With AI & Freelancing",
        subtitle: "Complete Web Development Bootcamp",
        image: "/images/short courses images/Wordpress.webp",
        slug: "web-development"  // ✅ add slug
    },
    {
        title: "AI Digital Marketing (Ads & Analytics)",
        subtitle: "Complete Digital Marketing Bootcamp",
        image: "/images/short courses images/Digital.png",
        slug: "digital-marketing"  // ✅ add slug
    },
];


    return (
        <section className="w-full py-20 bg-gray-100">
            <div className="text-center space-y-2 mb-12">
                <h5 className="text-indigo-600 font-semibold">Short Courses</h5>
                <h2 className="text-4xl font-bold">Your Skills, Your Future</h2>
                <p className="text-gray-600">
                    Fast-Track Your Career With Certified Short Courses
                </p>
            </div>
            <div className="max-w-7xl mx-auto px-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl overflow-hidden"
                    >
                        {/* Image */}
                        <div className="relative h-52 bg-gray-100">
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5 space-y-2">

                            <h3 className="font-bold text-lg leading-snug">
                                {course.title}
                            </h3>

                            <p className="text-gray-600 text-sm">
                                {course.subtitle}
                            </p>

                            {/* Meta */}
                            <div className="flex items-center gap-3 flex-wrap text-sm pt-2">
                                <span className="bg-indigo-600 text-white px-2 py-1 rounded text-xs font-semibold">
                                    Bestseller
                                </span>

                                <span className="flex items-center gap-1">
                                    ⭐ <strong>4.6</strong>
                                </span>

                                <span className="text-gray-500 text-xs">
                                    (13,834 ratings)
                                </span>
                            </div>

                            {/* Duration */}
                            <div className="inline-flex items-center gap-1 text-xs bg-gray-100 px-3 py-1 rounded-full mt-2">
                                ⏱ Duration: 6 weeks
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-5 pb-5 flex justify-between items-center">
                            <span className="text-indigo-700 font-semibold cursor-pointer">
                            <Link href={`/courses/${course.slug}`} className="btn">Read More →</Link>
                            </span>

                            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                                <Link href="/enrollnow">Enroll Now</Link>
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Shortcourses
