"use client"

import Image from "next/image"

const testimonials = [
  {
    name: "Shah Zaman",
    role: "Software Engineering",
    text: "Dawley Institute transformed my career! From front-end to full-stack development, I built over 80+ projects.",
    image: "/images/student testimoinal/shahzaman.webp",
  },
  {
    name: "M Raayan",
    role: "Software Engineering",
    text: "The Software Engineering course gave me hands-on experience with modern stacks and real-world projects.",
    image: "/images/student testimoinal/rayan.webp",
  },
  {
    name: "Abu Bakar",
    role: "Software Engineering",
    text: "Learning at Dawley with AWS guidance helped me become an AWS Certified Developer.",
    image: "/images/student testimoinal/abubakar.webp",
  },
  {
    name: "Abdullah Azhar",
    role: "Software Engineering",
    text: "Dawley’s advanced training boosted my confidence as a developer.",
    image: "/images/student testimoinal/abdullah-azhar.webp",
  },
  {
    name: "Araiz Asif",
    role: "Software Engineering",
    text: "Amazing instructors and real-world projects helped me grow fast.",
    image: "/images/student testimoinal/araiz.webp",
  },
  {
    name: "Syed Qamar",
    role: "Software Engineering",
    text: "2-year program prepared me for any website or web app with confidence.",
    image: "/images/student testimoinal/qamarshah.webp",
  },
  {
    name: "Zainab Asghar",
    role: "Software Engineering",
    text: "Supportive environment helped me grow in development and design.",
    image: "/images/student testimoinal/zainab.webp",
  },
  {
    name: "Tasmiyah",
    role: "Software Engineering",
    text: "Started with HTML & CSS and now confidently freelancing.",
    image: "/images/student testimoinal/tasmihiya.webp",
  },
]

export default function StudentTestimonials() {
  return (
    <section className="w-full py-20 px-2 bg-white">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <p className="text-sm text-[#22305d] font-semibold">
          REAL STORIES. REAL SUCCESS.
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Student Testimonials
        </h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          At Dawley Institute, every student’s success is our pride. Hear from
          learners who turned their passion into rewarding careers.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 px-4">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="relative bg-white border-2 border-[#cc1236] rounded-2xl pt-16 pb-8 px-6 text-center shadow-sm hover:shadow-lg transition"
          >
            {/* Profile Image */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <div className="w-20 h-20 rounded-full border-4 border-[#22305d] overflow-hidden bg-white">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-[#22305d]">
              {item.name}
            </h3>
            <p className="text-sm text-gray-500">{item.role}</p>

            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              {item.text}
            </p>

            {/* Button */}
            <button className="mt-6 text-red-600 font-semibold flex items-center justify-center gap-2 mx-auto hover:underline">
              ▶ Watch Now
            </button>
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="flex justify-center mt-14">
        <button className="border-2 border-red-600 text-red-600 px-6 py-2 rounded hover:bg-red-600 hover:text-white transition">
          View More
        </button>
      </div>
    </section>
  )
}
