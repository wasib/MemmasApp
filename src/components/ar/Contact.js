import React from "react";
import "../../styles/Contact.css";
import ContactForm from "./ContactForm";

export class ContactAr extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="contact-gradient">
          <h2>موقع المركز</h2>
        </div>

        <div className="middle-contact">
          <div className="right-contact-form-ar">
            <ContactForm />
          </div>
          <div className="left-contact-info-ar">
            <h2>:والمعلومات</h2>
            <p>
              دف لتطوير و تقديم الحلول الأمنية المبتكرة للارتقاء بمستوى أمن
              المعلومات في القطاعات الحكومية والخاصة بحد سواء داخل المملكة
              العربية السعودية بشكل خاص والمنطقة العربية بشكل عام وذلك بتقديم
              الخدمات الاستشارية لتأمين شبكات الحاسب الآلي و نظم المعلوما
            </p>
            <ul>
              <li>
                <b>الحاسب:</b> الرياض، جامعة الملك سعود، كلية الحاسب
              </li>
              <li>
                <b>كلية:</b> 00966-11-4696183
              </li>
              <li>
                info@example.com
                <b>:يمكنك</b>
              </li>
              <li>
                <b>بحد:</b> 00966-11-4696183
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                className="maps-responsive"
                title="map"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
