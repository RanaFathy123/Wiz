import React from 'react'
import './css/ser.css'
import { Link } from 'react-router-dom'
export default function Ser({ img, title, animation }) {
    return (
        <Link to={'/services'}>
            <div data-aos={animation} className="card">
                <img src={img} alt="salla" />
                <h3 className='hover:text-[#0065d2]'>{title}</h3>
            </div>
        </Link>
    )
}
