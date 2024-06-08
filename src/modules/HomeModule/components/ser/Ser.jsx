import React from 'react'
import './css/ser.css'
import { Link } from 'react-router-dom'
export default function Ser({ img, title, animation,link }) {
    return (
        <Link to={link ? link : '/services'}>
            <div data-aos={animation ? animation : 'fade-up'} className="card">
                <img src={img} alt="salla" />
                <h3 className='hover:text-[#5e86b0]'>{title}</h3>
            </div>
        </Link>
    )
}
