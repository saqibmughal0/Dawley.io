"use client";

import FacultyCard from "./FacultyCard";
import { FaUsers } from "react-icons/fa";


const facultyData = [
  {
    name: "Shoaib Naizi",
    role: "Instructor Full Stack Development",
    description:
      "Specialist in modern web development and scalable apps. Builds job-ready portfolios with real projects.",
    image: "/images/Faculty/Mr.-Shoaib-Naizi-e1770551121255.jpeg",
    skills: [
      "HTML/CSS",
      "Bootstrap 5",
      "TailwindCSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "MongoDB",
      "Node.js",
    ],
  },
  {
    name: "Taimoor Munawar",
    role: "Instructor AWS Cloud Computing",
    description:
      "Hands-on cloud practitioner training students to deploy, scale and secure on AWS.",
    image: "/images/Faculty/Untitled-2.jpg",
    skills: [
      "AWS",
      "Cloud Computing",
      "DevOps",
      "Azure",
      "Linux",
      "Ubuntu",
    ],
  },
  {
    name: "Muhammad Umais",
    role: "Instructor – Cybersecurity & AI",
    description:
      "Ethical hacking, defense simulations, and AI-powered security workflows.",
    image: "/images/Faculty/umaiss.webp",
    skills: [
      "Metasploit Framework",
      "Nmap",
      "Wireshark",
      "Burp Suite",
      "EVE-NG",
      "Kali Linux",
      "CentOS",
      "Android ISO",
      "Windows",
      "Information Security",
      "Python",
      "C++",
      "JavaScript",
      "Bash Scripting",
    ],
  },
  {
    name: "Muhammad Umais",
    role: "Instructor – Cybersecurity & AI",
    description:
      "Ethical hacking, defense simulations, and AI-powered security workflows.",
    image: "/images/Faculty/fawadhaider.webp",
    skills: [
      "Metasploit Framework",
      "Nmap",
      "Wireshark",
      "Burp Suite",
      "EVE-NG",
      "Kali Linux",
      "CentOS",
      "Android ISO",
      "Windows",
      "Information Security",
      "Python",
      "C++",
      "JavaScript",
      "Bash Scripting",
    ],
  },
];

export default function Directory() {
  return (
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyData.map((member, index) => (
            <FacultyCard key={index} {...member} />
          ))}
        </div>

      </div>
    </section>
  );
}
