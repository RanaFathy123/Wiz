
import './css/blogs.css'
import Blog from '../SharedModule/BlogCard/Blog'
import HeroSection from '../SharedModule/components/HeroSection/components/HeroSection'
import wiz from '../../assets/GIf/hero_1.gif'

// aos
import AOS from 'aos';
// import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Blogs() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <HeroSection
                animationText={'fade-up'}
                animationDesc={'fade-left'}
                image={wiz}
                title={' إدارة الحملات الإعلانية'}
                descrption={'حقق نمو مبيعات متجرك من خلال إدارة شاملة لإعلاناتك  انضم إلى قائمة عملائنا الذين حققوا عوائد تفوق 9 أضعاف المصروفات.'}
                btnText={'اطلب استشارتك الان'}
            />


            <div class="Parent-blogs container overflow-y-hidden">
                <div class="head">
                    <h1>أحداث المقالات </h1>
                    <p>استمتع بقراءة افضل و احدث المقالات حول التحول الرقمي و تاثيره في سوق العمل و زيادة الارباح و قصص و نجلح
                        الشركات </p>
                </div>
                <div class="blogs">
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                </div>
            </div>








        </>
    )
}
