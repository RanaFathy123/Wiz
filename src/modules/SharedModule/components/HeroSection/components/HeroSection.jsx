import React from 'react'
import './style.css'

const HeroSection = ({ title, descrption, image, btnText }) => {
  return (
    <div className="px-[4em] heroSection mt-5 pt-5">
    <div className="text">
      <div className="title">{title}</div>
      <p className="desc">{descrption}</p>
      <a href="" className="btn-heroSection">
        {btnText}
      </a>
    </div>
    <img src={image} alt={image} />
  </div>
  )
}

export default HeroSection