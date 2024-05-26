// import React from 'react'
import BannarImg from '../../../assets/GIf/banner.gif'
import './css/bannar.css'
export default function Bannar() {
  return (
    <div className="bg-[#0C3C8B]">
      <div className='container bannar'>
        <div className="contact">
          <h1 data-aos="fade-left">جاهز تتواصل معنا؟</h1>
          <p data-aos="fade-up">تواصل معانا عبر الواتساب لتوضيح تفاصيل مشروعك و تسليمة الي فريق العمل </p>
          <a data-aos="fade-down" href="https://wa.me/201029138503">تواصل معانا</a>
        </div>
        <img data-aos="fade-right" src={BannarImg} alt="" />
      </div>
    </div>
  )
}
