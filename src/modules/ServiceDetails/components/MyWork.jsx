import React from 'react'

export default function myWork({ title, works }) {
    return (
        <div className='bg-[#F9F9F9F9]'>
        
        <div className='container'>
            <h1 data-aos='fade-up' className='text-[#0065D2] workTitle'>{title}</h1>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-10  overflow-y-hidden">
                {works.map((work) => (
                    <a data-aos='fade-up' href={work.link}>
                        <img src={work.img} alt={work.img} />
                    </a>
                ))}

        </div>
        </div >
            </div>
    )
}
