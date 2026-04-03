// "use client"

// import Image from "next/image"
// import { motion } from "framer-motion"
// import Link from "next/link"

// export default function Longcourse() {
//     return (
//         <section className="relative w-full py-10 overflow-hidden">
//             <div className="relative max-w-7xl mx-auto px-6">

//                 {/* Section Heading */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                     className="text-center mb-20"
//                 >
//                     <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
//                         Build Your Future With Confidence
//                     </h2>
//                     <p className="text-gray-500 mt-4 text-lg">
//                         Premium training programs designed for real-world success.
//                     </p>
//                 </motion.div>

//                 <div className="space-y-24">

//                     {/* IELTS */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -80 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                         viewport={{ once: true }}
//                         className="grid md:grid-cols-2 gap-12 items-center"
//                     >
//                         <div>
//                             <h3 className="text-3xl md:text-4xl font-bold mt-4 text-gray-800">
//                                 Your English. Your <br /> Confidence. Your Success.
//                             </h3>

//                             <p className="text-gray-600 mt-6 leading-relaxed">
//                                 Build Real Skills That Shape Your Future.
//                                 Learn English, Improve Communication, Ace Your IELTS.
//                                 Join Pakistan’s Fastest-Growing Training Institute.
//                             </p>

//                             <motion.button
//                                 whileHover={{ scale: 1.1 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg"
//                             >
//                                 <a href="https://ielts.dawley.io/">Explore Program →</a>
//                             </motion.button>
//                         </div>

//                         <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
//                             <Image
//                                 src="/images/ieltscourse.png"
//                                 alt="IELTS Course"
//                                 fill
//                                 className="object-cover hover:scale-110 transition duration-700"
//                             />
//                         </div>
//                     </motion.div>

//                     {/* Software Engineering */}
//                     <motion.div
//                         initial={{ opacity: 0, x: 80 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                         viewport={{ once: true }}
//                         className="grid md:grid-cols-2 gap-12 items-center"
//                     >
//                         <div className="order-2 md:order-1 relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
//                             <Image
//                                 src="/images/bg-se-banner-01-1-scaled.jpg"
//                                 alt="Software Engineering"
//                                 fill
//                                 className="object-cover hover:scale-110 transition duration-700"
//                             />
//                         </div>

//                         <div className="order-1 md:order-2">

//                             <h3 className="text-3xl md:text-4xl font-bold mt-4 text-gray-800">
//                                 Become a Software Engineer
//                             </h3>

//                             <h3 className="text-3xl sm:text-4xl lg:text-[20px] font-extrabold leading-tight">
//                                 (2-Year Professional Career Program)
//                             </h3>

//                             <p className="text-gray-600 mt-6 leading-relaxed">
//                                 This comprehensive two-year program is designed to build strong technical and practical skills required for a successful career in the tech industry. Through hands-on training, real-world projects, and expert mentorship, students are prepared for professional roles with confidence. Our proven track record shows that graduates of this program are well-positioned to secure jobs starting from PKR 100,000 in the technology sector.
//                             </p>

//                             <motion.button
//                                 whileHover={{ scale: 1.1 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className="mt-8 bg-[#23305d] hover:bg-[#23305de9] text-white px-8 py-4 rounded-full font-semibold shadow-lg"
//                             >
//                                 <Link href="#">Explore Program →</Link>
//                             </motion.button>
//                         </div>
//                     </motion.div>

//                 </div>
//             </div>
//         </section>
//     )
// }