import './css/servicesCard.css'
// import aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function ServicesCard({image,title,desc,animation}) {
  
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div data-aos={animation} data-aos-delay="500"  className="serv">
      <div className="top">
        <img src={image} alt={image}/>
      </div>
      <div className="bottom">
        <h1>{title}</h1>
        <p>{desc}</p>
        <Link to="/service/details">المزيد</Link>
      </div>
    </div>
  )
}
