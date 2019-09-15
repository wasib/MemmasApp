import React from "react";
import "../../styles/Services.css";
import ServicesForm from "./ServicesForm";
import img1 from "../../images/services/services img 1.png";
import img2 from "../../images/services/services img 2.png";
import img3 from "../../images/services/services img 3.png";

export class ServicesAr extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleClick = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  render() {
    return (
      <div className="services-page">
        <div className="services-gradient">
          <h2>الخدمات</h2>
        </div>
        <div className="services-container">
          <div className="services-top-text">
            مستوى أمن المعلومات في القطاعات الحكومية والخاصة بحد سواء داخل
            المملكة العربية السعودية بشك مستوى أمن المعلومات في القطاعات
            الحكومية والخاصة بحد سواء داخل المملكة العربية السعودية بشك
          </div>
          <div className="services-icons">
            <div className="services-icon-single" onClick={this.handleClick}>
              <div className="services-icon-image">
                <img src={img1} alt="services-img" className="services-img" />
              </div>
              <div className="services-icon-text">طلب رفع مساحة موقع</div>
            </div>
            <div className="services-icon-single" onClick={this.handleClick}>
              <div className="services-icon-image">
                <img src={img2} alt="services-img" className="services-img" />
              </div>
              <div className="services-icon-text">طلب عرض سعر</div>
            </div>
            <div className="services-icon-single" onClick={this.handleClick}>
              <div className="services-icon-image">
                <img src={img3} alt="services-img" className="services-img" />
              </div>
              <div className="services-icon-text">طلب استشارات </div>
            </div>
          </div>
          <div className="services-contact-form">
            <ServicesForm />
          </div>
        </div>
      </div>
    );
  }
}
