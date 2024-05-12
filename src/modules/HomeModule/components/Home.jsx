import React from 'react'
import heroImg from "../../../assets/image/hero.png";
import HeroSection from '../../SharedModule/HeroSection/components/HeroSection';

const Home = () => {
  return (
    <div className='mt-[5em]'>
      <HeroSection
          title={"حقق نموك مع نظامنا المتكامل للتسويق "}
          btnText={"اشتري الان"}
          image={heroImg}
          descrption={
            "أكثر من مجرد اعلانات تشمل خدماتنا كل شي لضمان نجاح مشروعك من الصفر"
          }
        />
    </div>
  )
}

export default Home