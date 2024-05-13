import React from 'react'
// import imgs
import heroImg from "../../assets/image/hero.png";
import serviceImg from '../../assets/GIf/2.gif'
import HeroSection from '../SharedModule/HeroSection/components/HeroSection';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import useM 
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import './css/home.css'
import ServicesCard from '../SharedModule/ServicesCard/ServicesCard';
import Features from '../SharedModule/Features/Features';
import Blog from '../SharedModule/BlogCard/Blog';
const Home = () => {
  return (
    <div className=''>
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


      <div className="swiper-body container">
       <div className="head">
        <h1>أحدث المقالات </h1> 
        <p>استمتع بقراءة افضل و احدث المقالات حول التحول الرقمي و تاثيره في سوق العمل و زيادة الارباح و قصص و نجلح الشركات </p>
       </div>
        <Swiper
      // slidesPerView={3}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          
          960: {
            slidesPerView: 3,
          },
        }}
          // slidesPerView={3}
          spaceBetween={50}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide> <Blog /> </SwiperSlide>
          <SwiperSlide> <Blog /> </SwiperSlide>
          <SwiperSlide> <Blog /> </SwiperSlide>
          <SwiperSlide> <Blog /> </SwiperSlide>
          <SwiperSlide> <Blog /> </SwiperSlide>
          <SwiperSlide> <Blog /> </SwiperSlide>
          <SwiperSlide> <Blog /> </SwiperSlide>
          <SwiperSlide> <Blog /> </SwiperSlide>
          <SwiperSlide> <Blog /> </SwiperSlide>
        </Swiper>
      </div>




    </div>
  )
}

export default Home
