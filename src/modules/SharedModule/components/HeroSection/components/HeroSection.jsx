import React from 'react'
import './style.css'

const HeroSection = ({ title, descrption, image, btnText }) => {
  return (
    <div className=" heroSection container mt-10">
    <div className="text">
      <h1 className="title">{title}</h1>
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