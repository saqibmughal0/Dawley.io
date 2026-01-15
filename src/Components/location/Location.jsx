import Image from 'next/image'
import React from 'react'

function Location() {
    return (
        <>
            <section className='w-full p-7 flex justify-center flex-wrap space-x-10 items-center'>
                <div>
                    <Image
                        src="/images/location/location.png" // apni image yahan rakhein
                        alt="Location"
                        width={600}
                        height={400}
                    />
                </div>
                <div className='flex justify-center items-center'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6799.641689242375!2d74.322232!3d31.556531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190554447ee737%3A0xec6ca6aa98c73bc!2sDawley%20Institute%20of%20Technology%20(DIT)!5e0!3m2!1sen!2sus!4v1768396641950!5m2!1sen!2sus"
                        width="600"
                        height="375"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>
        </>
    )
}

export default Location