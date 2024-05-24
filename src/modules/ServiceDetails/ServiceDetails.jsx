import HeroSection from "../SharedModule/components/HeroSection/components/HeroSection";
import wiz from "../../assets/GIf/hero_1.gif";
import AOS from "aos";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import "aos/dist/aos.css";
import Success from "../Success/Success";
import secc from "../../assets/image/seccess.png";
import saudi from "../../assets/image/twemoji_flag-saudi-arabia.png";
import salla from "../../assets/image/salla.png";
import Learning from "../../assets/image/Learning.png";
import TodoList from "../../assets/image/Todo List.png";
import Transfer from "../../assets/image/Transfer.png";
import multipleDevices from "../../assets/image/Multiple Devices.png";
import cms from "../../assets/image/CMS.png";
import inProgress from "../../assets/image/In Progress.png";

import ServiceCard from "./components/ServiceCard/ServiceCard";
const ServiceDetails = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container">
      <HeroSection
        animationText={"fade-up"}
        animationDesc={"fade-left"}
        image={wiz}
        title={"إدارة الحملات الإعلانية"}
        descrption={
          "حقق نمو مبيعات متجرك من خلال إدارة شاملة لإعلاناتك  انضم إلى قائمة عملائنا الذين حققوا عوائد تفوق 9 أضعاف المصروفات."
        }
        btnText={"اطلب استشارتك الان"}
      />

      {/* success */}
      <div className="swiper-body container ">
        <div className="head">
          <h1>قصص النجاح</h1>
        </div>
        <Swiper
          navigation={1 == 2 ? false : true}
          spaceBetween={30}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Success
              animation={"fade-up"}
              CampName={"Company Name"}
              CampDesc={
                "Diamond Motors has received the highest ratings and various awards in the sales and service categories available."
              }
              CampImg={secc}
              type={"حملة اعلانيه"}
              country={"السعودية"}
              countryImg={saudi}
              platformImg={salla}
              platform={"salla"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Success
              animation={"fade-up"}
              CampName={"ميتسوبيشي"}
              CampDesc={
                "حققت شركة دايموند موتورز أعلى التصنيفات والجوائز المختلفة في مجالات المبيعات والخدمات والتسويق ."
              }
              CampImg={secc}
              type={"حملة اعلانيه"}
              country={"السعودية"}
              countryImg={saudi}
              platformImg={salla}
              platform={"salla"}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="container mx-auto flex flex-col  min-w-full">
        <ServiceCard
          title={"دراسة متجرك لتحديد العروض الرابحة"}
          description={
            "  لتحقيق نمو تجاري مستدام، من خلال زيادة المبيعات شهريًا وتحقيق نمو متواصل للأعمال."
          }
          img={Learning}
        />
        <ServiceCard
          title={"خطة محتوى تبرز مزايا المتجر والمنتجات"}
          description={
            "  لتحقيق نمو تجاري مستدام، من خلال زيادة المبيعات شهريًا وتحقيق نمو متواصل للأعمال."
          }
          img={TodoList}
        />
        <ServiceCard
          title={"استخدام منصات إعلانية ملائمة وذات ربحية عالية"}
          description={
            "  لتحقيق نمو تجاري مستدام، من خلال زيادة المبيعات شهريًا وتحقيق نمو متواصل للأعمال."
          }
          img={multipleDevices}
        />
        <ServiceCard
          title={"صناعة محتوى عالي الجودة"}
          description={
            "  لتحقيق نمو تجاري مستدام، من خلال زيادة المبيعات شهريًا وتحقيق نمو متواصل للأعمال."
          }
          img={inProgress}
        />
        <ServiceCard
          title={"رفع معدل التحويلات"}
          description={
            "الإعلانات أكثر من مجرد (إرفع الشاشة)  يتطلب الأمر استراتيجية متكاملة، تركز على أهدافك وجمهورك، وتحفزهم نحو تحقيق النجاح. يعمل فريق الإعلانات على وضع استراتيجية تعتمد على البيانات والمعلومات، مع تتبع أحدث التطورات في مجال الإعلانات"
          }
          img={cms}
        />
      {/*   <ServiceCard
          title={"استراتيجية الإعلانات"}
          description={
            "الاعلانات أكثر من مجرد ارفع الشاشة, يتطلب الأمر استراتيجية متكاملة، تركز على أهدافك وجمهورك، وتحفزهم نحو تحقيق النجاح. يعمل فريق الإعلانات على وضع استراتيجية تعتمد على البيانات والمعلومات، مع تتبع أحدث التطورات في مجال الإعلانات"
          }
          img={cms}
        />
        <ServiceCard
          title={"إنتاج شامل"}
          description={
            "نقدم جميع أنواع الإعلانات، بما في ذلك التصوير الداخلي والخارجي وتصوير UGC. هدفنا واضح: زيادة مبيعات المنتج. نظرًا لاختلاف تفضيلات الناس، نقدم خيارات إعلانية متنوعة تناسب جميع الفئات المستهدفة "
          }
          img={cms}
        />
        <ServiceCard
          title={"وفرة الإنتاج الإعلاني"}
          description={
            "تحقيق النجاح في مجال التجارة الإلكترونية، تحتاج إلى اختبار إعلانات جديدة بانتظام، وهنا يأتي دور فعالية إنتاجنا الإعلاني الوفير. نقدم لك فرصة الحصول على أكثر من 25 إعلانًا شهريًا، لضمان تحقيق النمو المطلوب في عملك"
          }
          img={cms}
        /> */}
      </div>
    </div>
  );
};

export default ServiceDetails;
