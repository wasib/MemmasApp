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
            <h2>عنوان المصنع:</h2>
            <p>
              مصنع الشرق الأوسط المتقدم للصناعة  2308 شارع الملك فيصل، حي
              الضاحية (الخمرة)، جدة 22529، المملكة العربية السعودية
            </p>
            <ul>
              <li>اوقات الدوام من السبت الى الخميس 8ص - 5م</li>
              <li>
                <b>الرقم الموحد:</b> 00966920012804
              </li>
              <li>
                00966122881787
                <b>تليفاكس:</b>
              </li>
              <li>
                <b>جوال مبيعات:</b> 00966550954055
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
                src="https://maps.google.com/maps?q=2308%20King%20Faisal%20Rd%2C%20Ad%20Dahiah%20district%D8%8C%20Jeddah%2022529%2C%20Saudi%20Arabia&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
