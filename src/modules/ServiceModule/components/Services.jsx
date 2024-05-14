// import React from 'react'
import HeroSection from '../../SharedModule/components/HeroSection/components/HeroSection'
import ImgHero from '../../../assets/image/hero.png'
import ServicesCard from '../../SharedModule/ServicesCard/ServicesCard'
import serviceImg from '../../../assets/GIf/2.gif'
import Bannar from '../../SharedModule/Bannar/Bannar'
const Services = () => {
  return (
    <>
      <HeroSection
        image={ImgHero}
        title={' إدارة الحملات الإعلانية'}
        descrption={'حقق نمو مبيعات متجرك من خلال إدارة شاملة لإعلاناتك  انضم إلى قائمة عملائنا الذين حققوا عوائد تفوق 9 أضعاف المصروفات.'}
        btnText={'اطلب استشارتك الان'}
      />


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
        </div>
      </div>

      <Bannar />
    </>
  )
}

export default Services