import "./TechContainer.css";
import design from "../../../../assets/image/design.png"
import frontEnd from "../../../../assets/image/frontEnd.png"
// import backend from "../../../../assets/image/backend.png"
import adope from "../../../../assets/GIf/adope.gif"
import programming from "../../../../assets/GIf/app programming.gif"
import backend from "../../../../assets/GIf/backend.gif"
import front from "../../../../assets/GIf/front end.gif"
import social from "../../../../assets/GIf/social media.gif"

const TechContainer = ({ animation }) => {
  return (
    // id="techParagraph"
    <div className="container overflow-y-hidden">
      <div className="head">
        <h1 data-aos={animation[2]}>الادوات و التقنيات</h1>
        <p data-aos={animation[1]}>
          افضل الادوات و التقينات التي يستخدمها فريق العمل الخاص بنا
        </p>
      </div>
      <div
        className=" grid-cols-1 items-start md:grid-cols-2 gap-4 grid md:mt-14">
        <div data-aos-delay="500" data-aos={animation[0]} className="m-auto techItem w-full">
          <h4 id="techTitle">التصميم</h4>
          <img className="md:max-w-[500px] max-w-[310px]" src={adope} alt="" />
        </div>
        <div data-aos-delay="500" data-aos={animation[0]} className="m-auto techItem w-full">
          <h4 id="techTitle">فرونت اند</h4>
          <img className="md:max-w-[500px] max-w-[310px]" src={front} alt="" />
        </div>
        <div data-aos-delay="500" data-aos={animation[1]} className="m-auto techItem w-full">
          <h4 id="techTitle">باك اند</h4>
          <img className="md:max-w-[500px] max-w-[310px]" src={backend} alt="" />
        </div>
        <div data-aos-delay="500" data-aos={animation[0]} className="m-auto techItem w-full">
          <h4 id="techTitle">برمجة التطبيقات</h4>
          <img className="md:max-w-[500px] max-w-[310px]" src={programming} alt="" />
        </div>
        <div data-aos-delay="500" data-aos={animation[2]} className="m-auto techItem w-full">
          <h4 id="techTitle">السوشيال ميديا</h4>
          <img className="md:max-w-[500px] max-w-[310px]" src={social} alt="" />
        </div>


      </div>
    </div>
  );
};

export default TechContainer;
