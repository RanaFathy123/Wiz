import HeroSection from "../SharedModule/components/HeroSection/components/HeroSection"
import aboutUs from '../../assets/GIf/aboutUs.gif'
import Accordion from "./components/Acordion/Accordion"
import Bannar from "../SharedModule/Bannar/Bannar"

import Features from "../SharedModule/Features/Features"
// aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import './css/about.css';
const About = () => {

  useEffect(() => {
    AOS.init();
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














      <Accordion
        animation={['fade-left']}
      />
      <Bannar />


    </>
  )
}

export default About