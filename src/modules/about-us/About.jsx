import HeroSection from "../SharedModule/components/HeroSection/components/HeroSection"
import wiz from '../../assets/GIf/hero_1.gif'
import Accordion from "./components/Acordion/Accordion"
import Bannar from "../SharedModule/Bannar/Bannar"

import Features from "../SharedModule/Features/Features"



const About = () => {
  return (
    <>
      <HeroSection
        animationText={['fade-up']}
        animationDesc={['fade-left']}
        title={'تعرف علي اهم خصائصنا'}
        descrption={'استراتيجيتنا تعتمد على التطوير المستمر لتحقيق الأهداف دون تعقيدات أو إضاعة وقت في التخطيط الزائد'}
        image={wiz}
        btnText={'أستشارة مجانية'}
      />

      <Features
        animation={['fade-up', 'fade-left', 'fade-right']}
        headTitle={"اهم ما يميزنا ؟ "}
        headDesc={
          "نُوفر فريق جودة، إدارة، ومتابعة لكل مشروع مع العميل، مع إضافة نظام متكامل للمشروع لتسليمه بعد الانتهاء"
        }
      />
      <Accordion 
      animation={['fade-up']}
      />
      <Bannar />


    </>
  )
}

export default About