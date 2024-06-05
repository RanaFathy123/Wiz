// import React from "react";
// import imgs
import serviceImg from "../../assets/GIf/2.gif";
import HeroSection from "./../SharedModule/components/HeroSection/components/HeroSection";
// import vedioImage from "../../assets/image/Group 427320995.png";
import serImg_1 from "../../assets/image/ser_2.png";
import serImg_2 from "../../assets/image/ser_1.png";
import serImg_3 from "../../assets/image/ser_3.png";
import serImg_4 from "../../assets/image/ser_4.png";
import vedioImage from "../../assets/videos/wiz.mp4";

import "./css/home.css";
import CompaniesCard from "./components/CompaniesCard/CompaniesCard";

// Import Swiper React components
// import useM
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
// import aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navigation, Pagination } from "swiper/modules";


// import required modules
// import maquee
import ServicesCard from "../SharedModule/ServicesCard/ServicesCard";
import Features from "../SharedModule/Features/Features";
import Blog from "../SharedModule/BlogCard/Blog";
import { Link } from "react-router-dom";
import Bannar from "../SharedModule/Bannar/Bannar";
import TechContainer from "./components/TechContainer/TechContainer";

import Success from "../Success/Success";
// import image success
import saudi from '../../assets/image/twemoji_flag-saudi-arabia.png'
import salla from '../../assets/image/salla.png'
import secc from '../../assets/image/seccess.png'
import wiz from '../../assets/GIf/hero_1.gif'
import { useEffect, useState } from "react";
// counter import
import { useInView } from 'react-intersection-observer';
import LowCode from "./components/LowCode/LowCode";
import Ser from "./components/ser/Ser";
// taps
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
const Home = () => {
  // data for section my works
  const data = [
    {
      label: "الكل",
      value: "all",
      desc: [
        serImg_1,
        serImg_2,
        serImg_3,
        serImg_4,

      ],
    },
    {
      label: "المواقع الالكترونية",
      value: "web",
      desc: [
        serImg_1,
        serImg_4,

      ],
    },
    {
      label: "الحملات الاعلانية",
      value: "ads",
      desc: [
        serImg_1,
        serImg_3,
        serImg_2,
      ],
    },
    {
      label: "ادارة المشاريع",
      value: "mngProject",
      desc: [
        serImg_4,
        serImg_2,
        serImg_1,
      ],
    },
    {
      label: "أجارة المتاجر",
      value: "mngStores",
      desc: [
        serImg_4,
        serImg_1,
      ],
    },
  ];
  // counter section two
  const counters = [
    { label: 'مشاريع تم تنفيذها', initialValue: 820 },
    { label: 'عميل قمنا باسعادة', initialValue: 62 },
    { label: 'مشاريع تم تنفيذها', initialValue: 1000 },
    { label: 'عميل قمنا باسعادة', initialValue: 220 }
  ];

  const Counter = ({ label, initialValue }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
      triggerOnce: false, // Trigger only once when it comes into view
      threshold: 0.1 // Adjust this based on your requirement
    });

    useEffect(() => {
      if (inView) {
        let start = 0;
        const end = initialValue;
        const duration = 2000; // Duration in milliseconds
        const incrementTime = (duration / end) * 2; // Increment time in milliseconds

        const incrementCount = () => {
          if (start < end) {
            start += 2;
            setCount(Math.min(start, end));
          } else {npm 
            clearInterval(timer);
          }
        };

        const timer = setInterval(incrementCount, incrementTime);

        return () => clearInterval(timer); // Cleanup on unmount
      }
    }, [inView, initialValue]);

    return (
      <div className="count" ref={ref}>
        <h1>+{count}</h1>
        <p>{label}</p>
      </div>
    );
  };

  // -----------animation libarary----------------
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        animationText={'fade-left'}
        animationDesc={'fade-up'}
        title={"حقق نموك مع نظامنا المتكامل للتسويق الالكترونى"}
        btnText={"اطلب استشارتك الآن"}
        image={wiz}
        descrption={
          "أكثر من مجرد اعلانات تشمل خدماتنا كل شي لضمان نجاح مشروعك من الصفر"
        }
      />
      {/* main Section */}
      <div className="bg-[#F9F9F9F9]">
        <div className="container vid">
          <video src={vedioImage} autoPlay controls autoFocus></video>
          <div className="info">
            <h1>منظومة متكاملة تضمن نمو مشروعك بكل احترافية  نجاح  100%</h1>
            <p>سعداء بالشراكة مع ايدن فليم للانتاج  الاعلامي</p>
            <div className="counts">
              {/* <div> */}
                {counters.map((counter, index) => (
                  <Counter key={index} label={counter.label} initialValue={counter.initialValue} />
                ))}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* features */}
      <Features
        animation={['fade-up', 'fade-left', 'fade-right']}
        headTitle={"اهم ما يميزنا ؟ "}
        headDesc={
          "نُوفر فريق جودة، إدارة، ومتابعة لكل مشروع مع العميل، مع إضافة نظام متكامل للمشروع لتسليمه بعد الانتهاء"
        }
      />


      <div className="bg serv">
        <div className='container ser'>
          <div className="head">
            <h1>أكتشف خدماتك</h1>
            <p>حول افكارك الي تقينات متطورة</p>
          </div>
          <div className="cards">
            <Ser
              animation={'fade-up'}
              img={serImg_1}
              title={'ادارة الحملات الاعلانية'}
            />
            <Ser
              animation={'fade-up'}
              img={serImg_2}
              title={'أدارة المتاجر الالكترونية'}
            />
            <Ser
              animation={'fade-up'}
              img={serImg_3}
              title={'ادارة الحملات الاعلانية'}
            />
            <Ser
              animation={'fade-up'}
              img={serImg_4}
              title={'أدارة المتاجر الالكترونية'}
            />
            <Ser
              animation={'fade-up'}
              img={serImg_3}
              title={'أدارة المتاجر الالكترونية'}
            />
            <Ser
              animation={'fade-up'}
              img={serImg_4}
              title={'ادارة الحملات الاعلانية'}
            />
            <Ser
              animation={'fade-up'}
              img={serImg_2}
              title={'ادارة الحملات الاعلانية'}
            />
            <Ser
              animation={'fade-up'}
              img={serImg_3}
              title={'ادارة الحملات الاعلانية'}
            />
          </div>
          <Link to="/services" className="showAll servbtn">
            جميع الخدمات
          </Link>
        </div>

      </div>

      {/* success */}
      <div className="swiper-body container ">
        <div className="head">
          <h1>قصص النجاح</h1>
        </div>
        <Swiper


          navigation={1 == 2 ? false : true}

          spaceBetween={30}
          effect={'fade'}

          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Success
              animation={'fade-up'}
              CampName={'Company Name'}
              CampDesc={'Diamond Motors has received the highest ratings and various awards in the sales and service categories available.'}
              CampImg={secc}
              type={'حملة اعلانيه'}
              country={'السعودية'}
              countryImg={saudi}
              platformImg={salla}
              platform={'salla'}

            />
          </SwiperSlide>
          <SwiperSlide>
            <Success
              animation={'fade-up'}
              CampName={'ميتسوبيشي'}
              CampDesc={'حققت شركة دايموند موتورز أعلى التصنيفات والجوائز المختلفة في مجالات المبيعات والخدمات والتسويق .'}
              CampImg={secc}
              type={'حملة اعلانيه'}
              country={'السعودية'}
              countryImg={saudi}
              platformImg={salla}
              platform={'salla'}
            />
          </SwiperSlide>
        </Swiper>

      </div>
      {/* Start  Technologies section */}
      <TechContainer
        animation={['fade-up', 'fade-left', 'fade-right']}
      />
      {/* End  Technologies section */}

      {/* start my work */}
      <div className="container">
        <div className="head">
          <h1>بعض مشاريعنا</h1>
        </div>
        <Tabs value="all">
          <TabsHeader className="mb-8">
            <div className="grid md:grid-cols-5 gap-y-3 grid-cols-3 w-full">

              {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  <p className="md:text-[21px] text-[16px]">
                    {label}
                  </p>
                </Tab>
              ))}
            </div>
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                <div className="grid md:grid-cols-3 grid-cols-2 gap-5">

                  {desc.map((des) => (
                    <img src={des} alt="" />
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
      {/* end my work */}
      {/* blogs */}
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
      <CompaniesCard />
      {/* End Companies logos section */}
      {/* start bannar */}
      <Bannar />
      {/* end bannar */}
      {/* Low Code */}
      <div className="lowCode bg-[#F9F9F9]">

        <LowCode />
      </div>



    </div >
  );
};

export default Home;