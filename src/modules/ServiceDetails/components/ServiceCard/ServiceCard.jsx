import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./css/ServiceCard.css";
const ServiceCard = ({ title, description, img , icon }) => {
  const [isMinWidth, setIsMinWidth] = useState(window.innerWidth >= 768);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMinWidth(window.innerWidth >= 768);
    });
  }, []);

  return (
    <div className="card-box mt-5 p-[3em]">
      <div className="service-box">
        <div className="m-5">
          {isMinWidth ? (
            <img id="serviceIcon" src={img} alt="learning_photo" />
          ) : (
            <FontAwesomeIcon icon={icon} />
          )}
        </div>
        <div className="flex flex-col gap-5 ">
          <h2 className="font-cairo font-bold md:text-[40px] text-[18px] leading-12 mb-2">
            {title}
          </h2>
          <p className="font-cairo font-normal text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
