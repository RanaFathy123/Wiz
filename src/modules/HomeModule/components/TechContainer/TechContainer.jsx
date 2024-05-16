import "./TechContainer.css";
import design from "../../../../assets/image/design.png"
import frontEnd from "../../../../assets/image/frontEnd.png"
import backend from "../../../../assets/image/backend.png"
import Tech_1 from "../../../../assets/GIf/Tech_1.gif"

const TechContainer = ({animation}) => {
  return (
    // id="techParagraph"
    <div className="container">
      <div className="head">
        <h1 data-aos={animation[2]}>الادوات و التقنيات</h1>
        <p data-aos={animation[1]}>
          افضل الادوات و التقينات التي يستخدمها فريق العمل الخاص بنا
        </p>
      </div>
      <div 
      className=" grid-cols-1 items-start md:grid-cols-2 gap-4 grid md:mt-14">
          <div data-aos={animation[0]} className="m-auto techItem w-full">
            <h4 id="techTitle">التصميم</h4>
            <img className="md:max-w-[450px] max-w-[280px]" src={Tech_1} alt="" />
          </div>
          <div data-aos={animation[1]} className="m-auto techItem w-full">
            <h4 id="techTitle">التصميم</h4>
            <img  className="md:max-w-[450px] max-w-[280px]" src={Tech_1} alt="" />
          </div>
          <div data-aos={animation[2]}  className="m-auto techItem w-full">
            <h4 id="techTitle">التصميم</h4>
            <img className="md:max-w-[450px] max-w-[280px]" src={Tech_1} alt="" />
          </div>
          <div data-aos={animation[0]} className="m-auto techItem w-full">
            <h4 id="techTitle">التصميم</h4>
            <img className="md:max-w-[450px] max-w-[280px]" src={Tech_1} alt="" />
          </div>
      </div>
    </div>
  );
};

export default TechContainer;
