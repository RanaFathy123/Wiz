import React from 'react'
import './css/servicesCard.css'
export default function ServicesCard({image,title,desc}) {
  return (
    <div class="serv">
      <div class="top">
        <img src={image} alt={image}/>
      </div>
      <div class="bottom">
        <h1>{title}</h1>
        <p>{desc}</p>
        <a href="#">المزيد</a>
      </div>
    </div>
  )
}
