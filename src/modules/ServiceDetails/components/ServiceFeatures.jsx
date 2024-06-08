import React from 'react'

export default function ServiceFeatures({ title, features }) {
    return (
        <div className='container servicesDetails'>
            <h1 data-aos='fade-up'>{title}</h1>
            <div className="desc overflow-y-hidden">
                {features.map((feature) => (

                    <p data-aos='fade-up' key={feature}><i class="fa-solid fa-check"></i>{feature}</p>
                ))}

            </div>
        </div>
    )
}
