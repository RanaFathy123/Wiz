import React from 'react'
import image1 from "../../../../assets/image/woo-commerce.png";
import image2 from "../../../../assets/image/shopify.png";
import image3 from "../../../../assets/image/zid.png";
import image4 from "../../../../assets/image/salla.png";
import './css/lowCode.css'
export default function LowCode() {
    return (
        <div className="service-data container">
            <div data-aos-offset="300" data-aos="fade-left" className="parentLow">
                <img src={image4} alt="woo commerce" />
                <div className="text-header">Salla</div>
                <div className="text-footer">Partner</div>
            </div>
            <div data-aos-offset="300" data-aos="fade-up" className="parentLow  ">
                <img src={image3} alt="woo commerce" />
                <div className="mt-1 text-header">Zid</div>
                <div className="text-footer">Partner</div>
            </div>
            <div data-aos-offset="300" data-aos="fade-down" className="parentLow  ">
                <img src={image2} alt="woo commerce" />
                <div className="text-header">Shopify</div>
                <div className="text-footer">Expert</div>
            </div>
            <div data-aos-offset="300" data-aos="fade-right" className="parentLow ">
                <img src={image1} alt="woo commerce" />
                <div className="text-header">WooCommerce</div>
                <div className="text-footer">Expert</div>
            </div>
        </div>
    )
}
