import React from 'react'
import logo from '../../../../../assets/image/LogoW.png';
import '../../../Footer/css/footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className='right'>
          <img src={logo} alt="" />
          <p>استراتيجيتنا تعتمد على التطوير المستمر لتحقيق الأهداف دون تعقيدات أو إضاعة وقت في التخطيط الزائد</p>
          <div className="links">
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-solid fa-envelope"></i>
          </div>
        </div>
        <div className='service'>
          <h1 className="title">الخدمات</h1>
          <div className="services">
            <a href="#">انشاء المواقع و التطبيقات</a>
            <a href="">تسويق الالكتروني</a>
            <a href="">تصميم شعارات</a>
            <a href="#">انشاء المواقع و التطبيقات</a>
            <a href="">تسويق الالكتروني</a>
            <a href="">تصميم شعارات</a>
            <a href="#">انشاء المواقع و التطبيقات</a>
            <a href="">تسويق الالكتروني</a>
            <a href="">تصميم شعارات</a>
            <a href="">تصميم شعارات</a>
          </div>
        </div>
        <div className='contact'>
          <h1 className="title">النشرة البريدية</h1>
          <p>اشترك في نشرتنا البريدية واحصل على مقالات حصرية عن تسويق المتاجر الإلكترونية.</p>
          <form action="">
            <input type="email" placeholder='البريد الالكتروني' name="email" />
            <button type='submit'>
              <i class="fa-regular fa-paper-plane"></i>
            </button>
          </form>
          <div className="pages">
            <a href="#">سياسية الخصوصية</a>
            <a href="#">سياسية الخصوصية</a>
          </div>
        </div>
      </div>
      <div className="foot">
      </div>
      <p className='bg-[#fff] text-[#000] text-center py-2.5'>حقوق النشر محفوظة</p>
    </footer>
  )
}

export default Footer