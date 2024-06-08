import React, { useEffect, useState } from 'react'
import HeroSection from '../SharedModule/components/HeroSection/components/HeroSection'
import HeroImg from '../../assets/GIf/ads.gif'
import './css/servicedetails.css'
import ServiceFeatures from './components/ServiceFeatures'
import Aos from 'aos'
import MyWork from './components/MyWork';
import imagework from '../../assets/image/ser_2.png'
import todo from '../../assets/image/Todo List.png'
import Benefits from './components/Benefits'
export default function ServiceDetails() {
  const [features, setFeature] = useState([
    ' تحقيق نمو متواصل للأعمال و دراسة متجرك لتحديد العروض الرابحة',
    ' لضمان بروز علامتك التجارية في سوق شديد الأهمية خطة محتوى تبرز مزايا المتجر والمنتجات ',
    'استخدام منصات إعلانية ملائمة وذات ربحية عالية  حققت المتاجر مبيعات تتجاوز المليون من الحملات الإعلانية'
  ]);
  const [works, setWork] = useState([
    { img: imagework, link: 'this is link1' },
    { img: imagework, link: 'this is link2' },
    { img: imagework, link: 'this is link3' }
  ]);
  // -----------animation libarary----------------
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset:200,
    });
  }, [])
  return (

    <div className='details'>
      <HeroSection
        title={'إدارة الحملات الإعلانية'}
        titleClass={'text-[#0065D2]'}
        descrption={'حقق نمو مبيعات متجرك من خلال إدارة شاملة لإعلاناتك   انضم إلى قائمة عملائنا الذين حققوا عوائد تفوق 9 أضعاف المصروفات.'}
        btnText={'اطلب استشارتك الأن'}
        image={HeroImg}
        imgClass={'shad'}
      />
      {/* ServiceFeatures */}
      <ServiceFeatures
        title={'أكثر من مجرد حملات إعلانية خدماتنا تشمل'}
        features={features}
      />

      <MyWork
        title={'نبذة عن بعض أعمالنا'}
        works={works}
      />

      <Benefits
        title={'كيف حقق عملائنا عوائد وصلت 16X على الإعلانات'}
        BTitle={'أكثر من مجرد إعلانات'}
        Bdesc={'ندير المتجر بالكامل، بدراسة المنتجات وإنشاء عروض رابحة وتسليط الضوء على مميزاتها أمام الجمهور المستهدف.'}
        icon={todo}
      />

    </div>
  )
}
