"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export default function Location() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">

      {/* Background gradient blobs */}
       <div className="absolute top-0 left-0 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Find Us in the Heart of Lahore
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Visit our institute easily with nearby landmarks and live map location.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >

            <Image
              src="/images/location/location.png"
              alt="Institute Location"
              width={600}
              height={500}
              className="object-cover w-full h-[400px]"
            />

            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-lg">
              <h4 className="font-semibold text-gray-800 mb-3">
                Nearby Landmarks:
              </h4>

              <ul className="space-y-2 text-gray-600">

                <li className="flex items-center gap-2">
                  <MapPin size={16} className="text-red-500" />
                  Punjab Assembly
                </li>

                <li className="flex items-center gap-2">
                  <MapPin size={16} className="text-red-500" />
                  Wapda House
                </li>

                <li className="flex items-center gap-2">
                  <MapPin size={16} className="text-red-500" />
                  PSO Petrol Pump
                </li>

              </ul>
            </div>

          </motion.div>

          {/* Right Map */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >

            <iframe
              src="https://www.google.com/maps?q=Dawley+Institute+of+Technology+Lahore&output=embed"
              className="w-full h-[400px] border-0"
              loading="lazy"
            />

            {/* Floating info card */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-lg max-w-xs">

              <h4 className="font-bold text-gray-800">
                Dawley Institute of Technology
              </h4>

              <p className="text-gray-500 text-sm mt-1">
                7 Queens Road, Lahore, Pakistan
              </p>

              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                Get Directions →
              </button>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}