import Image from 'next/image'
import React from 'react'

function Companylogo() {
    return (
        <>
            <section className='w-full h-[300px] flex flex-wrap justify-evenly items-center'>
                <Image
                    src="/images/companys logo/images.webp" // apni image yahan rakhein
                    alt="NavTech Logo"
                    width={150}
                    height={150}
                />
                <Image
                    src="/images/companys logo/PM-youth-Programme.webp" // apni image yahan rakhein
                    alt="NavTech Logo"
                    width={150}
                    height={150}
                />
                <Image
                    src="/images/companys logo/logo-1.webp" // apni image yahan rakhein
                    alt="NavTech Logo"
                    width={150}
                    height={150}
                />
                <Image
                    src="/images/companys logo/usti-logo.webp" // apni image yahan rakhein
                    alt="NavTech Logo"
                    width={150}
                    height={150}
                />
            </section>
        </>
    )
}

export default Companylogo