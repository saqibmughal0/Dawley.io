import React from 'react'
import Coursesslider from '../coursesslider/Coursesslider'

function Navtechcourses() {
    const navTechCoursesData = [
        {
            title: "Advance Web Development",
            image: "/images/navtechcourses/programming-background-collage_23-2149901770-1-1.webp",
            institute: "NavTech",
            tools: ["Starting Soon"],
        },
        {
            title: "Cyber Security (CEH, CHFi)",
            image: "/images/navtechcourses/hacker-cracking-binary-code-data-security_53876-97922-1.webp",
            institute: "NavTech",
            tools: ["Starting Soon"],
        },
        {
            title: "Cloud Computing (AWS)",
            image: "/images/navtechcourses/AWS-cloud-696x457-1.webp",
            institute: "NavTech",
            tools: ["Starting Soon"],
        },
        {
            title: "Advance Web Development",
            image: "/images/navtechcourses/programming-background-collage_23-2149901770-1-1.webp",
            institute: "NavTech",
            tools: ["Starting Soon"],
        },
        {
            title: "Cyber Security (CEH, CHFi)",
            image: "/images/navtechcourses/hacker-cracking-binary-code-data-security_53876-97922-1.webp",
            institute: "NavTech",
            tools: ["Starting Soon"],
        },
        {
            title: "Cloud Computing (AWS)",
            image: "/images/navtechcourses/AWS-cloud-696x457-1.webp",
            institute: "NavTech",
            tools: ["Starting Soon"],
        },
    ]
    return (
        <>
            <Coursesslider
                subtitle="High Tech Courses"
                title="NAVTTC Courses"
                description="From Skills to Jobs, Your Career Starts Here"
                courses={navTechCoursesData}
                bgColor="bg-white"
            />
        </>
    )
}

export default Navtechcourses