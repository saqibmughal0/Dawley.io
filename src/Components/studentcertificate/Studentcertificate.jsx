import React from 'react'
import CertificateSlider from '../certificateslider/CertificateSlider'

function Studentcertificate() {
    const certificates = [
        "/images/studentawscertifate/abu-bakar-aws-certifited.webp",
        "/images/studentawscertifate/ahmad-rana-aws-certifited.webp",
        "/images/studentawscertifate/m-rayan-aws-certifited.webp",
        "/images/studentawscertifate/shah-zaman-aws-certifited.webp",
        "/images/studentawscertifate/abu-bakar-aws-certifited.webp",
        "/images/studentawscertifate/ahmad-rana-aws-certifited.webp",
        "/images/studentawscertifate/m-rayan-aws-certifited.webp",
        "/images/studentawscertifate/shah-zaman-aws-certifited.webp",
    ]
    return (
        <>
            <CertificateSlider
                subtitle="Global Recognition"
                title="Our AWS Certified Solution Architect Students"
                description={
                    <>
                    We take pride in our students who have earned international certifications from Amazon Web Services (AWS). Their dedication and hands-on <br></br> training at Dawley Institute have empowered them with real-world cloud computing expertise, ready to take on global tech challenges.
                    </>
                    }
                certificates={certificates}
                bgColor="bg-gray-100"
            />
        </>
    )
}

export default Studentcertificate