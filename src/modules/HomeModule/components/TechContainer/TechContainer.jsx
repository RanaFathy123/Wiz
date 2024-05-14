import "./TechContainer.css";
import design from "../../../../assets/image/design.png"
import frontEnd from "../../../../assets/image/frontEnd.png"
import backend from "../../../../assets/image/backend.png"
import mobile from "../../../../assets/image/mobile.png"

const TechContainer = () => {
  return (
    <div>
      <h2>الادوات و التقنيات</h2>
      <p id="techParagraph">
        افضل الادوات و التقينات التي يستخدمها فريق العمل الخاص بنا
      </p>
      <div className="grid grid-col-12  gap-y-2 sm:grid-flow-col ">
        <div className="grid grid-cols-1 gap-y-14">
          <div>
            <h4 id="techTitle">التصميم</h4>
            <img id="techImage" src={design} alt="" />
          </div>
          <div >
          <h4 id="techTitle">باك اند</h4>
            <img id="techImage" src={backend} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-14 mt-12">
          <div>
          <h4 id="techTitle">فرونت اند</h4>
            <img id="techImage" src={frontEnd} alt="" />
          </div>
          <div>
          <h4 id="techTitle">برمجة التطبيقات</h4>
            <img id="techImage" src={mobile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechContainer;
