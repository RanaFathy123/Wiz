// import React from 'react'
import HeroSection from '../../SharedModule/components/HeroSection/components/HeroSection'
import ImgHero from '../../../assets/image/hero.png'
import ServicesCard from '../../SharedModule/ServicesCard/ServicesCard'
import serviceImg from '../../../assets/GIf/2.gif'
// import services image
import serImg_1 from "../../../assets/image/ser_2.png";
import serImg_2 from "../../../assets/image/ser_1.png";
import serImg_3 from "../../../assets/image/ser_3.png";
import serImg_4 from "../../../assets/image/ser_4.png";
import aboutUs from '../../../assets/GIf/aboutUs.gif'
import Bannar from '../../SharedModule/Bannar/Bannar'
import Ser from '../../HomeModule/components/ser/Ser';

// taps
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import LowCode from '../../HomeModule/components/LowCode/LowCode';
import { useEffect } from 'react';
import Aos from 'aos';
const Services = () => {
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
  useEffect(() => {
    Aos.init({
      duration: 1000, 
      delay:500
    });
  }, [])
  return (
    <>
      <section className="about-hero container">
        <img src={aboutUs} alt="" />
        <div className="about">
          <h1>خدمة شاملة </h1>
          <p> كل احتياجاتك التسويقية في مكان واحد، من خلال خطة متكاملة تحقق لك مبيعات ونمو المتجر </p>
          <button className="showAll">اطلب استشارتك الأن</button>
        </div>
      </section>


      <div className="bg overflow-y-hidden">
        <div className="services container overflow-y-hidden">
          <div className="head">
            <h1>أكتشف خدماتك</h1>
            <p>حول افكارك الي تقينات متطورة</p>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-x-5 gap-y-16">

            <Ser
              title={'ادارة الحملات الاعلانية'}
              img={serImg_1} />
            <Ser
              title={'ادارة الحملات الاعلانية'}
              img={serImg_2} />
            <Ser
              title={'ادارة الحملات الاعلانية'}
              img={serImg_3} />
            <Ser
              title={'ادارة الحملات الاعلانية'}
              img={serImg_4} />
            <Ser
              title={'ادارة الحملات الاعلانية'}
              img={serImg_1} />
            <Ser
              title={'ادارة الحملات الاعلانية'}
              img={serImg_2} />
            <Ser
              title={'ادارة الحملات الاعلانية'}
              img={serImg_3} />
            <Ser
              title={'ادارة الحملات الاعلانية'}
              img={serImg_4} />
            <Ser
              title={'ادارة الحملات الاعلانية'}
              img={serImg_1} />
            <Ser
              title={'ادارة الحملات الاعلانية'}
              img={serImg_2} />
            <Ser
              title={'ادارة الحملات الاعلانية'}
              img={serImg_3} />
            <Ser
              title={'ادارة الحملات الاعلانية'}
              img={serImg_4} />

          </div>
        </div>
      </div>
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
      <Bannar />
      {/* low code */}
      <LowCode/>
    </>
  )
}

export default Services