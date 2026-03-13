import Image from "next/image";
import { FaUserFriends } from "react-icons/fa";


export default function Leadership() {
    const team = [
        {
            name: "Mr. Sulman Sarwer",
            role: "Founder & CEO",
            description:
                "Mr. Sulman Sarwer is the CEO & Founder of Dawley Institute of Technology, driven by a mission to transform youth through future-ready education. He is currently pursuing an MSc in Data Science & Artificial Intelligence from Wellbrook Institute and holds a BCS in Computer Science from Premier University. With a strong foundation in technology and innovation, he focuses on practical, industry-aligned learning. His vision is to empower youth with advanced skills in Cyber Security, Artificial Intelligence, Data Science, and emerging technologies to compete globally.",
            image: "/images/Faculty/Salman sarwar.jpg",
        },
        {
            name: "Yazmeen Khan",
            role: "Director & IELTS Trainer",
            description:
                "Mrs Yazmeen is a highly experienced English language and IELTS instructor with strong UK academic credentials. She holds an IELTS specialisation, a BTEC HND from the University of London, and a BTEC National Diploma from Leeds College. With extensive teaching experience, she delivers practical, results-oriented instruction. She is dedicated to helping students achieve confidence, fluency, and international-standard communication skills for global opportunities through modern methodologies, learner-centred approaches, and consistent performance assessment practices.",
            image: "/images/Faculty/Yazmeen khan img.jpeg",
        },
        {
            name: "Dr Brig (R) Obaid Ullah Ranjha",
            role: "Dean / Principal",
            description:
                "Dr Brigadier (R) Obaidullah Ranjha is a distinguished academic leader with a PhD from the Islamia University of Bahawalpur and two MSc degrees from Quaid-i-Azam University. He also holds a BSc (Hons) from the University of Jordan, reflecting a strong international academic foundation. After a prestigious career in the Pakistan Army, he served as Dean at Minhaj University Lahore, Director General of Preston University, and Registrar of NUML University. Currently appointed as Dean & Principal, and Executive Director of AAS Cadet College & Primary School Kahuta, he brings exceptional leadership, governance, and academic excellence to Dawley Institute.",
            image: "/images/Faculty/Dr.-Brig.-Obaidullah-Ranjha-2.jpeg",
        },
        {
            name: "Dr. Munir Ahmad",
            role: "Vice Principal",
            description:
                "Dr Munir is an accomplished academic and researcher with a PhD in Data Science from NCBA&E. He holds a Master of Science in Computer Science from Virtual University of Pakistan and a BSCS from Bahauddin Zakariya University. Currently, he serves as a Professor at University College, Korea University, South Korea, contributing to advanced teaching, supervision, and research activities. He is also an Associate Professor in the Faculty of Computer Science at NCBA&E, bringing global exposure, interdisciplinary insight, academic leadership, curriculum development expertise, and research-driven excellence to Dawley Institute through international collaboration and innovation.",
            image: "/images/Faculty/Dr-Munir-Ahmad-2.jpeg",
        },
        {
            name: "Mr. Muhammad Talha",
            role: "Head of Education",
            description:
                "Is a versatile IT professional with a BSCS degree from the University of Lahore. He specialises in Solution Architecture, Front-End Development, and UI/UX Design, combining creativity with technical precision. With expertise in Graphic Designing, Cloud Computing, and IT Consulting, he brings real-world industry insight to students. His teaching focuses on modern tools, practical projects, and preparing students for today’s tech-driven market.",
            image: "/images/Faculty/Mr-Muhammad-Talha-1-e1770550990968.jpeg",
        },
        {
            name: "Haroon Javaid",
            role: "Director Procurement",
            description:
                "Mr Haroon Javaid is a senior IT professional with a BCS in Computer Science and an MSc from the University of Birmingham (UK). As Director of Procurement, he leads strategic sourcing, vendor management, and operational efficiency in line with international standards. He brings a strong blend of academic expertise and industry experience to institutional planning and delivery. He is committed to excellence, transparency, and building future-ready systems at Dawley Institute of Technology. He plays a key role in strengthening governance, cost optimisation, and sustainable growth across the institute. His leadership supports Dawley’s mission to deliver high-quality, industry-aligned education with long-term impact.",
            image: "/images/Faculty/Haroon Javaid.jpeg",
        },
    ];

    return (
        <section className="py-10 px-5 max-w-7xl mx-auto md:px-20 bg-white">
            {/* SECTION HEADER */}
            <div className="mb-10">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-500 mb-2">
                    <div className="text-3xl md:text-4xl lg:text-[25px] font-bold text-black leading-tight flex items-center gap-2"><FaUserFriends /> Leadership Spotlight</div>
                </h3>
                <p className="text-gray-600 max-w-5xl">
                    Meet the brilliant minds behind Dawley Institute of Technology,
                    educators, innovators, and mentors from Pakistan and the UK,
                    shaping the next generation of tech leaders.
                </p>
            </div>
            {team.map((member, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center gap-10 mb-14 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                        }`}
                >

                    <div className="relative w-40 h-40 md:w-52 md:h-52 mt-10 rounded-full overflow-hidden shadow-lg">
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                        />
                    </div>


                    {/* Text Section */}
                    <div className="max-w-3xl text-center md:text-left">
                        <h2 className="text-2xl font-bold">{member.name}</h2>
                        <p className="text-gray-500 font-medium mb-3">{member.role}</p>
                        <p className="text-gray-600 leading-relaxed">
                            {member.description}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}
