import React from 'react'

export default function Benefits({ title, BTitle, Bdesc, icon }) {
    return (
        <div className='container benefits'>
            <h1>{title}</h1>
            <div data-aos='fade-up' className="boxs grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div className="box flex  items-center  gap-4 md:gap-8 md:rounded-3xl bg-[#F9F9F9F9] 
                md:py-6 md:px-8 py-2 px-4 rounded-xl
                ">
                    <img  src={icon} alt={icon} className='md:w-20 w-14'/>
                    <div className="desc">
                        <h2>{BTitle}</h2>
                        <p>{Bdesc}</p>
                    </div>
                </div>
                <div data-aos='fade-up' className="box flex  items-center gap-4 md:gap-8 md:rounded-3xl bg-[#F9F9F9F9]  
                md:py-6 md:px-8 py-2 px-4 rounded-xl">
                    <img  src={icon} alt={icon} className='md:w-20 w-14'/>
                    <div className="desc">
                        <h2>{BTitle}</h2>
                        <p>{Bdesc}</p>
                    </div>
                </div>
                <div data-aos='fade-up' className="box flex  items-center gap-4 md:gap-8 md:rounded-3xl bg-[#F9F9F9F9]  
                md:py-6 md:px-8 py-2 px-4 rounded-xl">
                    <img  src={icon} alt={icon} className='md:w-20 w-14'/>
                    <div className="desc">
                        <h2>{BTitle}</h2>
                        <p>{Bdesc}</p>
                    </div>
                </div>
                <div data-aos='fade-up' className="box flex  items-center  gap-4 md:gap-8 md:rounded-3xl bg-[#F9F9F9F9]  
                md:py-6 md:px-8 py-2 px-4 rounded-xl">
                    <img  src={icon} alt={icon} className='md:w-20 w-14'/>
                    <div className="desc">
                        <h2>{BTitle}</h2>
                        <p>{Bdesc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
