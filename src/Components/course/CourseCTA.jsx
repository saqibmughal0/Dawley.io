import React from 'react'
import { Phone, Mail, MessageCircle } from "lucide-react"

function CourseCTA() {
  return (
    <>
    <section className="w-full px-4 py-12">
      <div className="max-w-6xl mx-auto rounded-xl border shadow-sm bg-white px-6 py-10">
        
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-blue-900 mb-10">
          Get In Touch With Us To Start Immediately Or Learn More
        </h2>

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          {/* Call */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-blue-900 text-blue-900">
              <Phone />
            </div>
            <h4 className="font-semibold text-blue-900">Make A Call</h4>
            <a
              href="tel:03011161555"
              className="text-gray-700 hover:text-blue-900"
            >
              030 111 61 555
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-blue-900 text-blue-900">
              <MessageCircle />
            </div>
            <h4 className="font-semibold text-blue-900">WhatsApp Now</h4>
            <a
              href="https://wa.me/923011161555"
              target="_blank"
              className="text-gray-700 hover:text-blue-900"
            >
              030 111 61 555
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-blue-900 text-blue-900">
              <Mail />
            </div>
            <h4 className="font-semibold text-blue-900">Drop A Mail</h4>
            <a
              href="mailto:info@dawley.io"
              className="text-gray-700 hover:text-blue-900"
            >
              info@dawley.io
            </a>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default CourseCTA