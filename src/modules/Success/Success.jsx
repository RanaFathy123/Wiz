import React from 'react' 
import insta from '../../assets/image/insta.png'
import tektok from '../../assets/image/tektok.png'
import './css/success.css'
export default function Success({CampName,CampDesc,CampImg,type,country,countryImg,platform,platformImg,social}) {
    return (
        <div className="">
            <div className='success'>
                <img src={CampImg} alt="" />
                <div className="content">
                    <div className="top">
                        <h1>{CampName}</h1>
                        <p>{CampDesc}</p>

                    </div>
                    <div className="bottom">
                        <div className="info">
                            <h2>نوع المشروع</h2>
                            <p>{type}</p>
                        </div>
                        <div className="info">
                            <h2> الدولة</h2>
                            <div>
                                <img src={countryImg} alt="" />
                                <p>{country}</p>
                            </div>
                        </div>
                        <div className="info">
                            <h2> المنصات </h2>
                            <div>
                                <img src={platformImg} alt="" />
                                <p>{platform}</p>
                            </div>
                        </div>
                        <div className="info">
                            <h2> السوشيال ميديا </h2>
                            <div className="imgs">
                                <a href="#">
                                    <img src={insta} alt="" />
                                </a>
                                <a href="#">
                                    <img src={tektok} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
