import React from 'react'
import './css/features.css'
export default function Features({headTitle,headDesc,animation}) {
    return (
        <div className="container">
            <div className="head">
                <h1 data-aos={animation[0]}>{headTitle}</h1>
                <p  data-aos={animation[1]}> {headDesc} </p>
            </div>
            <div className="futures mt-5">
                <div data-aos={animation[0]} className="fut">
                    <i className="fa-regular fa-credit-card"></i>
                    <h1>وسائل الدفع</h1>
                    <p>نُوفر لك جميع وسائل الدفع المتاحة في العالم، لضمان تجربة دفع سهلة ومريحة</p>
                </div>
                <div data-aos={animation[1]} className="fut">
                    <i className="fa-solid fa-handshake"></i>
                    <h1>فريق عمل محترف</h1>
                    <p>لدينا أكثر من 1000 موظف في جميع المجالات المختصة لضمان نجاح مشروعك بالكامل </p>
                </div>
                <div data-aos={animation[2]} className="fut">
                    <i className="fa-solid fa-money-bill-transfer"></i>
                    <h1>ضمان المعاملات المالية</h1>
                    <p>يحق لعميلنا دفع فقط 20 % من ميزانية المشروع والباقي على دفعات بعد استلام كل جزء من العمل، مما يجعلنا الأفضل من الناحية المالية.</p>
                </div>
            </div>
        </div>
    )
}
