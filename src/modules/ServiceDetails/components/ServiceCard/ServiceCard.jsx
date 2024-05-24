import "./css/ServiceCard.css";
const ServiceCard = ({ title, description, img }) => {
  return (
    <div className="card-box mt-5 p-[3em]">
      <div className="service-box">
        <div className="m-5">
          <img id="serviceIcon" src={img} alt="learning_photo"  />
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
