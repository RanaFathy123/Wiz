import React from 'react'
import './style.css'

const HeroSection = ({ title, descrption, image, btnText ,animationText,animationDesc}) => {
  return (
    <div className=" heroSection container mt-10">
    <div className="text">
      <h1  data-aos={animationText} className="title">{title}</h1>
      <p data-aos={animationDesc} className="desc">{descrption}</p>
      <a href="" className="btn-heroSection">
        {btnText}
      </a>
    </div>
    <img src={image} alt={image} />
  </div>
  )
}

export default HeroSection