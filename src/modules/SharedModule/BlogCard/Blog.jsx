import React from 'react'
import './css/Blog.css';
import BlogImg from '../../../assets/image/blog.png'
export default function Blog() {
    return (
        <div className="blog">
            <img src={BlogImg} alt="" />
            <a href="#">هندسة البرمجيات</a>
            <h1>بناء حزمة API الخاصة بك</h1>
            <p>يساعد الخطي على تبسيط مشاريع البرامج والسباقات السريعة والمهام وتتبع الأخطاء. وإليك كيفية البدء...
            </p>
        </div>
    )
}
