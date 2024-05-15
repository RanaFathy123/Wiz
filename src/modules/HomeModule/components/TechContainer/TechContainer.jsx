import "./TechContainer.css";
import design from "../../../../assets/image/design.png"
import frontEnd from "../../../../assets/image/frontEnd.png"
import backend from "../../../../assets/image/backend.png"
import Tech_1 from "../../../../assets/GIf/Tech_1.gif"

const TechContainer = () => {
  return (
    // id="techParagraph"
    <div className="container">
      <div className="head">
        <h1>الادوات و التقنيات</h1>
        <p >
          افضل الادوات و التقينات التي يستخدمها فريق العمل الخاص بنا
        </p>
      </div>
      <div 
      className=" grid-cols-1 items-start md:grid-cols-2 gap-4 grid md:mt-14">
          <div className="m-auto techItem w-full">
            <h4 id="techTitle">التصميم</h4>
            <img className="md:max-w-[450px] max-w-[250px]" src={Tech_1} alt="" />
          </div>
          <div className="m-auto techItem w-full">
            <h4 id="techTitle">التصميم</h4>
            <img  className="md:max-w-[450px] max-w-[250px]" src={Tech_1} alt="" />
          </div>
          <div className="m-auto techItem w-full">
            <h4 id="techTitle">التصميم</h4>
            <img className="md:max-w-[450px] max-w-[250px]" src={Tech_1} alt="" />
          </div>
          <div className="m-auto techItem w-full">
            <h4 id="techTitle">التصميم</h4>
            <img className="md:max-w-[450px] max-w-[250px]" src={Tech_1} alt="" />
          </div>
      </div>
    </div>
  );
};

export default TechContainer;
