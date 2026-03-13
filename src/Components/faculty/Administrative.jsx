import React from 'react'
import FacultyCard from './FacultyCard';
import { FaUsers } from 'react-icons/fa';


function Administrative() {

    const facultyData = [
        {
            name: "Misbah Latif",
            role: "Campus Manager",
            description:
                "Skilled in campus operations, team supervision, student management, reporting, and maintaining academic and administrative standards.",
            image: "/images/Faculty/Miss-Misbah-.jpeg",
            skills: [
                "Oprations",
                "Student Services",
            ],
        },
        {
            name: "Momna Munir",
            role: "Admission Officer",
            description:
                "Leads admissions from the initial inquiry to the first class, providing counselling, documentation, and timely follow-ups to ensure students start with confidence.",
            image: "/images/Faculty/Miss-Momna-.jpeg",
            skills: [
                "Admission",
                "Student Support",
            ],
        },
        {
            name: "Saliha Sarwer",
            role: "Test Administrator",
            description:
                "Skilled in exam supervision, candidate authentication, system checks, incident reporting, and strict adherence to Pearson VUE testing protocols.",
            image: "/images/Faculty/Saliha Sarwer.jpeg",
            skills: [
                "Exam Security",
                "Candidate Verification",
            ],
        },
        {
            name: "Mishal Khalid",
            role: "Receptionist",
            description:
                "Greets every visitor with a warm welcome. Handles calls, messages, and front‑desk coordination. Keeps reception organised so that students and guests can get help quickly.",
            image: "/images/Faculty/Mahak.webp",
            skills: [
                "Front Desk",
                "Coordination",
            ],
        },
        {
            name: "Quratulain Fatima",
            role: "Marketing Assistant",
            description:
                "Plans and schedules social media campaigns and ads. Drives student outreach on WhatsApp, email, and campus events. Tracks results and shares insights to improve every campaign.",
            image: "/images/Faculty/Miss-Minahil.jpg-scaled.jpeg",
            skills: [
                "Marketing",
                "Out Reach",
            ],
        },
    ];
    return (
        <>
            <section className="w-full py-16">
                <div className="max-w-7xl mx-auto px-4">

                    {/* HEADER */}
                    <div className="mb-10">

                        <div className="text-3xl md:text-4xl lg:text-[25px] font-bold text-black leading-tight flex items-center gap-2"><FaUsers /> Faculty Directory</div>
                        <p className="text-gray-600">
                            Learn from the Best, Industry Experts & Certified Instructors
                        </p>
                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {facultyData.map((member, index) => (
                            <FacultyCard key={index} {...member} />
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Administrative