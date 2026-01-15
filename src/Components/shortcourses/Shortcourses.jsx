import React from 'react'
import Coursesslider from '../coursesslider/Coursesslider'

function Shortcourses() {
    const shortCoursesData = [
        {
            title: "AI Graphic Designing Lab",
            image: "/images/short courses images/graphic-scaled-1.webp",
            institute: "Dawley",
            tools: ["Best Seller"],
        },
        {
            title: "Web Development",
            image: "/images/short courses images/Wordpress.webp",
            institute: "Dawley",
            tools: ["Best Seller"],
        },
        {
            title: "Digital Marketing",
            image: "/images/short courses images/social-media-marketing-scaled-1.webp",
            institute: "Dawley",
            tools: ["Best Seller"],
        },
        {
            title: "AI Graphic Designing Lab",
            image: "/images/short courses images/graphic-scaled-1.webp",
            institute: "Dawley",
            tools: ["Best Seller"],
        },
        {
            title: "Web Development",
            image: "/images/short courses images/Wordpress.webp",
            institute: "Dawley",
            tools: ["Best Seller"],
        },
        {
            title: "Digital Marketing",
            image: "/images/short courses images/social-media-marketing-scaled-1.webp",
            institute: "Dawley",
            tools: ["Best Seller"],
        },
        
    ]
    return (
        <>
            <Coursesslider
                subtitle="Short Courses"
                title="Your Skills, Your Future"
                description="Fast-Track Your Career With Certified Short Courses"
                courses={shortCoursesData}
                bgColor="bg-gray-100"
            />
        </>
    )
}

export default Shortcourses