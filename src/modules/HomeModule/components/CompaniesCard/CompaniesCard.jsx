import eden from "../../../../assets/image/companies_logos/eden.png"
import asu from "../../../../assets/image/companies_logos/asu.png"
import elgoof from "../../../../assets/image/companies_logos/elgoof.png"
import elshar2a from "../../../../assets/image/companies_logos/elshar2a.png"
import zayed_award from "../../../../assets/image/companies_logos/zayed_award.png"
import lambreez from "../../../../assets/image/companies_logos/lambreez.png"
import larooz from "../../../../assets/image/companies_logos/larooz.png"
import mitsubishi from "../../../../assets/image/companies_logos/mitsubishi.png"
import silko from "../../../../assets/image/companies_logos/silko.png"
import twagd from "../../../../assets/image/companies_logos/twagd.png"
import oomla2 from "../../../../assets/image/3omla2.png"
 
import { useEffect, useState } from "react";
import our_customers from "../../../../assets/image/our_customers.png"
import "./css/comapniesCard.css";

const CompaniesCard = () => {
  const [isMinWidth, setIsMinWidth] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMinWidth(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="companies-card-containner">

      
        {isMinWidth ? (
      
          <img src={our_customers} alt="Our Customers" />
       ): (

        <div className="slider container">
          
         <div style={{ marginLeft:'80%' ,marginBottom:'20px' , alignItems:'center'} }>
          <img src={oomla2}  alt="" />
         </div>
        <div className="slider-track">

          <div className="slid">
            <img src={eden} alt="" />
          </div>
          <div className="slid">
            <img src={asu} alt="" />
          </div>
          <div className="slid">
            <img src={elgoof} alt="" />
          </div>
          <div className="slid">
            <img src={elshar2a} alt="" />
          </div>
          <div className="slid">
            <img src={zayed_award} alt="" />
          </div>
          <div className="slid">
            <img src={lambreez} alt="" />
          </div>
          <div className="slid">
            <img src={larooz} alt="" />
          </div>
 
          <div className="slid">
            <img src={mitsubishi} alt="" />
          </div>
          <div className="slid">
            <img src={silko} alt="" />
          </div>
          <div className="slid">
            <img src={twagd} alt="" />
          </div>
        </div>
      </div>
      )}
      
      
    </div>
  );
};

export default CompaniesCard;
