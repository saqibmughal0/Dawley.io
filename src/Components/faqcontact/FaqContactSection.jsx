"use client";
import { useState } from "react";

export default function FaqContactSection({
  title,
  subtitle,
  formTag,
  formTitle,
  faqs,
  courses,
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-16 px-4 md:px-10 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* FAQ */}
        <div>
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-6">{subtitle}</p>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg bg-gray-50">
                <button
                  className="w-full flex justify-between items-center p-4 font-medium"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  {faq.question}
                  <span className="text-xl">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="p-4 pt-0 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FORM */}
        <div className="bg-gray-50 p-6 md:p-8 rounded-xl rounded-xl shadow-sm">
          <span className="text-red-600 font-semibold uppercase">
            {formTag}
          </span>
          <h3 className="text-2xl font-bold mb-6">
            {formTitle}
          </h3>

        <form className="space-y-6">
  {/* Name */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        👤
      </span>
      <input
        type="text"
        placeholder="First Name"
        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition"
      />
    </div>

    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        👤
      </span>
      <input
        type="text"
        placeholder="Last Name"
        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition"
      />
    </div>
  </div>

  {/* Email & Phone */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        ✉️
      </span>
      <input
        type="email"
        placeholder="Email Address"
        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition"
      />
    </div>

    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        📞
      </span>
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition"
      />
    </div>
  </div>

  {/* Course Select */}
  <div className="relative">
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
      🎓
    </span>
    <select
      className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition bg-white"
    >
      <option>Select Course</option>
      {courses.map((course, i) => (
        <option key={i}>{course}</option>
      ))}
    </select>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition shadow-md hover:shadow-lg"
  >
    Register Now
  </button>

  {/* Small Note */}
  <p className="text-xs text-gray-500 text-center">
    We respect your privacy. Your information is safe with us.
  </p>
</form>

        </div>
      </div>
    </section>
  );
}
