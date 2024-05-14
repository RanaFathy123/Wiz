import React from 'react'
import './css/blogs.css'
import Blog from '../SharedModule/BlogCard/Blog'
import HeroSection from '../SharedModule/components/HeroSection/components/HeroSection'
import heroImg from "../../assets/image/hero.png";
import { ScrollRestoration } from 'react-router-dom';
// import ImgHero from '../../assets/GIf/HomePage.gif'
export default function Blogs() {
    return (
        <>
            <HeroSection
                image={heroImg}
                title={' إدارة الحملات الإعلانية'}
                descrption={'حقق نمو مبيعات متجرك من خلال إدارة شاملة لإعلاناتك  انضم إلى قائمة عملائنا الذين حققوا عوائد تفوق 9 أضعاف المصروفات.'}
                btnText={'اطلب استشارتك الان'}
            />


<div class="Parent-blogs container">
        <div class="head">
            <h1>أحداث المقالات </h1>
            <p>استمتع بقراءة افضل و احدث المقالات حول التحول الرقمي و تاثيره في سوق العمل و زيادة الارباح و قصص و نجلح
                الشركات </p>
        </div>
        <div class="blogs">
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
        </div>
    </div>







    
        </>
    )
}
