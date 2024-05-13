import React from 'react'
import BannarImg from '../../../assets/image/baner 1.png'
import './css/bannar.css'
import { Link } from 'react-router-dom'
export default function Bannar() {
  return (
    <div className='container bannar'>
       <Link>
       <img src={BannarImg} alt="" />
       </Link>
    </div>
  )
}
