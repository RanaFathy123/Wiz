import React from 'react'
// import imgs
import heroImg from "../../assets/image/hero.png";
import serviceImg from '../../assets/GIf/2.gif'
import HeroSection from '../SharedModule/HeroSection/components/HeroSection';
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import './css/home.css'
import ServicesCard from '../SharedModule/ServicesCard/ServicesCard';
import Features from '../SharedModule/Features/Features';
const Home = () => {
  return (
    <div>
      <HeroSection
        title={"حقق نموك مع نظامنا المتكامل للتسويق "}
        btnText={"اشتري الان"}
        image={heroImg}
        descrption={
          "أكثر من مجرد اعلانات تشمل خدماتنا كل شي لضمان نجاح مشروعك من الصفر"
        }
      />
      {/* features */}
      <Features 
      headTitle={'اهم ما يميزنا ؟ '}
      headDesc={'نُوفر فريق جودة، إدارة، ومتابعة لكل مشروع مع العميل، مع إضافة نظام متكامل للمشروع لتسليمه بعد الانتهاء'}
      />
      {/* services */}
      <div className="bg">
        <div class="services container">
          <div class="head">
            <h1>جميع حدماتك في مكان واحد </h1>
            <p>حول افكارك الي تقينات متطورة</p>
          </div>
          <div class="servs">
            <ServicesCard
              image={serviceImg}
              title={'إدارة الحملات الإعلانية'}
              desc={'إدارة الحملات الإعلانية على جميع المنصات، بعد دراسة المتجر والمنتجات والمنافسين،وإدارتها لتحقيق الهدف البيعي.'}
            />
            <ServicesCard
              image={serviceImg}
              title={'إدارة الحملات الإعلانية'}
              desc={'إدارة الحملات الإعلانية على جميع المنصات، بعد دراسة المتجر والمنتجات والمنافسين،وإدارتها لتحقيق الهدف البيعي.'}
            />
            <ServicesCard
              image={serviceImg}
              title={'إدارة الحملات الإعلانية'}
              desc={'إدارة الحملات الإعلانية على جميع المنصات، بعد دراسة المتجر والمنتجات والمنافسين،وإدارتها لتحقيق الهدف البيعي.'}
            />
            <ServicesCard
              image={serviceImg}
              title={'إدارة الحملات الإعلانية'}
              desc={'إدارة الحملات الإعلانية على جميع المنصات، بعد دراسة المتجر والمنتجات والمنافسين،وإدارتها لتحقيق الهدف البيعي.'}
            />
            <ServicesCard
              image={serviceImg}
              title={'إدارة الحملات الإعلانية'}
              desc={'إدارة الحملات الإعلانية على جميع المنصات، بعد دراسة المتجر والمنتجات والمنافسين،وإدارتها لتحقيق الهدف البيعي.'}
            />
            <ServicesCard
              image={serviceImg}
              title={'إدارة الحملات الإعلانية'}
              desc={'إدارة الحملات الإعلانية على جميع المنصات، بعد دراسة المتجر والمنتجات والمنافسين،وإدارتها لتحقيق الهدف البيعي.'}
            />
            <ServicesCard
              image={serviceImg}
              title={'إدارة الحملات الإعلانية'}
              desc={'إدارة الحملات الإعلانية على جميع المنصات، بعد دراسة المتجر والمنتجات والمنافسين،وإدارتها لتحقيق الهدف البيعي.'}
            />
            <ServicesCard
              image={serviceImg}
              title={'إدارة الحملات الإعلانية'}
              desc={'إدارة الحملات الإعلانية على جميع المنصات، بعد دراسة المتجر والمنتجات والمنافسين،وإدارتها لتحقيق الهدف البيعي.'}
            />
            <ServicesCard
              image={serviceImg}
              title={'إدارة الحملات الإعلانية'}
              desc={'إدارة الحملات الإعلانية على جميع المنصات، بعد دراسة المتجر والمنتجات والمنافسين،وإدارتها لتحقيق الهدف البيعي.'}
            />
            <ServicesCard
              image={serviceImg}
              title={'إدارة الحملات الإعلانية'}
              desc={'إدارة الحملات الإعلانية على جميع المنصات، بعد دراسة المتجر والمنتجات والمنافسين،وإدارتها لتحقيق الهدف البيعي.'}
            />
            <ServicesCard
              image={serviceImg}
              title={'إدارة الحملات الإعلانية'}
              desc={'إدارة الحملات الإعلانية على جميع المنصات، بعد دراسة المتجر والمنتجات والمنافسين،وإدارتها لتحقيق الهدف البيعي.'}
            />
            <ServicesCard
              image={serviceImg}
              title={'إدارة الحملات الإعلانية'}
              desc={'إدارة الحملات الإعلانية على جميع المنصات، بعد دراسة المتجر والمنتجات والمنافسين،وإدارتها لتحقيق الهدف البيعي.'}
            />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home
