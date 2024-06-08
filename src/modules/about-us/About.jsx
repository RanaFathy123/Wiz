import HeroSection from "../SharedModule/components/HeroSection/components/HeroSection"
import aboutUs from '../../assets/GIf/aboutUs.gif'
import Accordion from "./components/Acordion/Accordion"
import Bannar from "../SharedModule/Bannar/Bannar"
import lam from '../../assets/image/companies_logos/whoLambezz.png'
import Map from '../../assets/GIf/Map.gif'
import Features from "../SharedModule/Features/Features"
// aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import './css/about.css';
const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset:200,
    });
  }, [])

  return (
    <>
      <section className="about-hero container">
        <img src={aboutUs} alt="" />
        <div className="about">
          <h1>نحن هنا لنمكن رواد الأعمال علي تحقيق النجاح</h1>
          <p>نقدم حلول تسويقية شاملة تساعدك على النمو </p>
          <button className="showAll">اطلب استشارتك الأن</button>
        </div>
      </section>

      <Features
        animation={['fade-up', 'fade-left', 'fade-right']}
        headTitle={"اهم ما يميزنا ؟ "}
        headDesc={
          "نُوفر فريق جودة، إدارة، ومتابعة لكل مشروع مع العميل، مع إضافة نظام متكامل للمشروع لتسليمه بعد الانتهاء"
        }
      />

      {/* start edu */}

      <section className="education container overflow-y-hidden" id="education">
        <h2 className="heading">أدركنا حاجة رواد الأعمال إلى حلول تسويقية شاملة تُساعدهم على تحقيق النجاح، فأنشأنا ويزفريلانس لتلبية هذه الاحتياجات</h2>
        <div className="timeline-items">
          <div data-aos="fade-up" className="timeline-item">
            <div className="timeline-dot"> 1</div>
            {/* <div className="timeline-data">1</div> */}
            <div className="timeline-content">
              <h3>نتائج استثنائية </h3>
              <p>نُؤمن بأن النتائج الاستثنائية تتطل
                ب مواهب استثنائية، ولذلك نحرص على ضمّ نخبة من
                المواهب المُتميّزة وخصوصا في مجال التسويق.</p>

            </div>

          </div>
          <div data-aos="fade-up" className="timeline-item">
            <div className="timeline-dot"> 2</div>
            {/* <div className="timeline-data">2020</div> */}
            <div className="timeline-content">
              <h3>نتائج استثنائية </h3>
              <p>نُؤمن بأن النتائج الاستثنائية تتطل
                ب مواهب استثنائية، ولذلك نحرص على ضمّ نخبة من
                المواهب المُتميّزة وخصوصا في مجال التسويق.</p>

            </div>

          </div>
          <div data-aos="fade-up" className="timeline-item">
            <div className="timeline-dot"> 2</div>
            {/* <div className="timeline-data">2020</div> */}
            <div className="timeline-content">
              <h3>نتائج استثنائية </h3>
              <p>نُؤمن بأن النتائج الاستثنائية تتطل
                ب مواهب استثنائية، ولذلك نحرص على ضمّ نخبة من
                المواهب المُتميّزة وخصوصا في مجال التسويق.</p>

            </div>

          </div>
          <div data-aos="fade-up" className="timeline-item">
            <div className="timeline-dot">3 </div>
            {/* <div className="timeline-data">2020</div> */}
            <div className="timeline-content">
              <h3>نتائج استثنائية </h3>
              <p>نُؤمن بأن النتائج الاستثنائية تتطل
                ب مواهب استثنائية، ولذلك نحرص على ضمّ نخبة من
                المواهب المُتميّزة وخصوصا في مجال التسويق.</p>

            </div>

          </div>
          <div data-aos="fade-up" className="timeline-item">
            <div className="timeline-dot"> 4</div>
            {/* <div className="timeline-data">2020</div> */}
            <div className="timeline-content">
              <h3>نتائج استثنائية </h3>
              <p>نُؤمن بأن النتائج الاستثنائية تتطل
                ب مواهب استثنائية، ولذلك نحرص على ضمّ نخبة من
                المواهب المُتميّزة وخصوصا في مجال التسويق.</p>

            </div>

          </div>
        </div>
      </section>
      {/* end edu */}
      <div className="bg-[#F5F5F5F5] overflow-y-hidden">

        <div className="trust container overflow-y-hidden">
          <h1 data-aos='fade-up' className="md:text-[45px] text-[32px] max-w-[600px] text-[#0065d2] font-bold">موثوق بنا من قبل أفضل الشركات</h1>
          <div className="comp grid md:grid-cols-6  grid-cols-3">
            <img data-aos='fade-up' src={lam} alt="" />
            <img data-aos='fade-up' src={lam} alt="" />
            <img data-aos='fade-up' src={lam} alt="" />
            <img data-aos='fade-up' src={lam} alt="" />
            <img data-aos='fade-up' src={lam} alt="" />
            <img data-aos='fade-up' src={lam} alt="" />
          </div>
        </div>

      </div>
      {/* --map-- */}
      <HeroSection
        animationText={'fade-left'}
        animationDesc={'fade-up'}
        title={'متواجدين  في كل مكان'}
        titleClass={'text-[#0065D2]'}
        btnText={'اطلب استشارتك الان'}
        image={Map}
        descrption={'نقدم خدماتنا في أكثر من دولة حول العالم اكشتف الأن'}
      />
      {/* end trust */}
      <div className="container">
        <h2 className="heading text-right mr-0"> نضمن لك نمو تجاري مُستدام من خلال منظومة شاملة وفريق مختص لدعمك في كل خطوة.</h2>
        <div className="futures mt-5">
          <div data-aos={'fade-up'} className="fut">
            <i className="fa-regular fa-credit-card"></i>
            <h1>وسائل الدفع</h1>
            <p>نُوفر لك جميع وسائل الدفع المتاحة في العالم، لضمان تجربة دفع سهلة ومريحة</p>
          </div>
          <div data-aos={'fade-up'} className="fut">
            <i className="fa-solid fa-handshake"></i>
            <h1>فريق عمل محترف</h1>
            <p>لدينا أكثر من 1000 موظف في جميع المجالات المختصة لضمان نجاح مشروعك بالكامل </p>
          </div>
          <div data-aos={'fade-up'} className="fut">
            <i className="fa-solid fa-money-bill-transfer"></i>
            <h1>ضمان المعاملات المالية</h1>
            <p>يحق لعميلنا دفع فقط 20 % من ميزانية المشروع والباقي على دفعات بعد استلام كل جزء من العمل، مما يجعلنا الأفضل من الناحية المالية.</p>
          </div>
        </div>
      </div>









      <Accordion
        animation={['fade-left']}
      />
      <Bannar />


    </>
  )
}

export default About