// import React from "react";
// import imgs
import heroImg from "../../assets/image/hero.png";
import serviceImg from "../../assets/GIf/2.gif";
import HeroSection from "./../SharedModule/components/HeroSection/components/HeroSection";
import vedioImage from "../../assets/image/Group 427320995.png";
import "./css/home.css";
import CompaniesCard from "../SharedModule/CompaniesCard/CompaniesCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import useM
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper/modules";
// import maquee
import ServicesCard from "../SharedModule/ServicesCard/ServicesCard";
import Features from "../SharedModule/Features/Features";
import Blog from "../SharedModule/BlogCard/Blog";
import { Link } from "react-router-dom";
import Bannar from "../SharedModule/Bannar/Bannar";

const Home = () => {
  return (
    <div className="">
      <HeroSection
        title={"حقق نموك مع نظامنا المتكامل للتسويق الالكترونى"}
        btnText={"اشتري الان"}
        image={heroImg}
        descrption={
          "أكثر من مجرد اعلانات تشمل خدماتنا كل شي لضمان نجاح مشروعك من الصفر"
        }
      />
      {/* main Section */}
      <div
        className="bg-image p-5 shadow-1-strong rounded mb-5 text-white "
        style={{
          backgroundImage:
            'url("https://mdbcdn.b-cdn.net/img/new/slides/003.webp")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-column items-center justify-center gap-5">
          <div>
            <h1 className="text-2xl font-bold ">
              منظومة متكاملة تضمن نمو مشروعك بكل احترافية
            </h1>
            <h4 className="text-[#EEC86B] text-lg font-bold mt-4">
              تضمن لمشروعك نجاح 100%
            </h4>
            <h5 className="mb-5">
              سعداء بالشراكة مع ايدن فليم للانتاج الاعلامي
            </h5>
            <img src={vedioImage} alt="vedio img" className="mt-3 w-[35em] " />
          </div>
        </div>
      </div>
      {/* features */}
      <Features
        headTitle={"اهم ما يميزنا ؟ "}
        headDesc={
          "نُوفر فريق جودة، إدارة، ومتابعة لكل مشروع مع العميل، مع إضافة نظام متكامل للمشروع لتسليمه بعد الانتهاء"
        }
      />
      {/* services */}
      <div className="bg">
        <div className="services container">
          <div className="head">
            <h1>جميع حدماتك في مكان واحد </h1>
            <p>حول افكارك الي تقينات متطورة</p>
          </div>
          <div className="servs">
            <ServicesCard
              image={serviceImg}
              title={"إدارة الحملات الإعلانية"}
              desc={
                "إدارة الحملات الإعلانية على جميع المنصات، بعد دراسة المتجر والمنتجات والمنافسين،وإدارتها لتحقيق الهدف البيعي."
              }
            />
            <ServicesCard
              image={serviceImg}
              title={"إدارة الحملات الإعلانية"}
              desc={
                "إدارة الحملات الإعلانية على جميع المنصات، بعد دراسة المتجر والمنتجات والمنافسين،وإدارتها لتحقيق الهدف البيعي."
              }
            />
            <ServicesCard
              image={serviceImg}
              title={"إدارة الحملات الإعلانية"}
              desc={
                "إدارة الحملات الإعلانية على جميع المنصات، بعد دراسة المتجر والمنتجات والمنافسين،وإدارتها لتحقيق الهدف البيعي."
              }
            />
            <ServicesCard
              image={serviceImg}
              title={"إدارة الحملات الإعلانية"}
              desc={
                "إدارة الحملات الإعلانية على جميع المنصات، بعد دراسة المتجر والمنتجات والمنافسين،وإدارتها لتحقيق الهدف البيعي."
              }
            />
            <ServicesCard
              image={serviceImg}
              title={"إدارة الحملات الإعلانية"}
              desc={
                "إدارة الحملات الإعلانية على جميع المنصات، بعد دراسة المتجر والمنتجات والمنافسين،وإدارتها لتحقيق الهدف البيعي."
              }
            />
            <ServicesCard
              image={serviceImg}
              title={"إدارة الحملات الإعلانية"}
              desc={
                "إدارة الحملات الإعلانية على جميع المنصات، بعد دراسة المتجر والمنتجات والمنافسين،وإدارتها لتحقيق الهدف البيعي."
              }
            />
          </div>
          <Link to="/services" className="showAll">
            عرض المزيد
          </Link>
        </div>
      </div>
      <div className="swiper-body container">
        <div className="head">
          <h1>أحدث المقالات </h1>
          <p>
            استمتع بقراءة افضل و احدث المقالات حول التحول الرقمي و تاثيره في سوق
            العمل و زيادة الارباح و قصص و نجلح الشركات{" "}
          </p>
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
          <SwiperSlide>
            {" "}
            <Blog />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Blog />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Blog />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Blog />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Blog />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Blog />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Blog />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Blog />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Blog />{" "}
          </SwiperSlide>
        </Swiper>
      </div>
      
          {/* companies logos section*/}
          <CompaniesCard/> 
          {/* End Companies logos section */}
      <Bannar />

      {/* test  */}

      
    </div>
  );
};

export default Home;
