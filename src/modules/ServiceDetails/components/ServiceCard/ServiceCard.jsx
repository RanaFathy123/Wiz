
import "./css/ServiceCard.css";
const ServiceCard = ({title , description , img}) => {
  return (
    <div className="card-box mt-5">
      <div className="service-box">
        <div>
          <img id="serviceIcon" src={img} alt="learning_photo" />
        </div>

        <div>
          <h2 className="font-cairo font-bold text-4xl leading-12 mb-2">
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
