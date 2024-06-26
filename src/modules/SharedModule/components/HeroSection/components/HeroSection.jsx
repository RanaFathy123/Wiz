import React from 'react'
import './style.css'
import star from '../../../../../assets/image/star.png';

const HeroSection = ({ title, descrption, image, btnText, animationText, animationDesc ,titleClass,imgClass}) => {
  return (
    <div className=" heroSection container mt-10">
      <img src={star} className='stars' />
      <img src={star} className='stars' />
      <img src={star} className='stars' />
      <img src={star} className='stars' />
      <div className="text">
        <h1 data-aos={animationText} className={`title ${titleClass}`}>{title}</h1>
        <p data-aos={animationDesc} className="desc">{descrption}</p>
        <a href="" className="showAll">
          {btnText}
        </a>
      </div>
      <img src={image} className={`${imgClass}`} alt={image} />
    </div>
  )
}

export default HeroSection