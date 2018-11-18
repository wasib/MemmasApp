import React from "react";
import "../styles/Services.css";
import ContactForm from "./ContactForm";
import img1 from "../images/services icon 1.svg";
import img2 from "../images/services icon 2.svg";
import img3 from "../images/services icon 3.svg";
import img4 from "../images/services icon 4.svg";
import img5 from "../images/services icon 5.svg";

export class Services extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="services-page">
        <div className="services-gradient">
          <h2>Services</h2>
        </div>
        <div className="services-container">
          <div className="services-top-text">
            To give beginning divide, cattle. Give morning won't be there, the
            abundantly she'd brought upon sample text here, To give beginning
            divide, cattle. Give morning won't be there, the abundantly she'd
            brought upon sample text here
          </div>
          <div className="services-icons">
            <div className="services-icon-single">
              <div className="services-icon-image">
                <img src={img1} alt="services-img" className="services-img" />
              </div>
              <div className="services-icon-text">image1</div>
            </div>
            <div className="services-icon-single">
              <div className="services-icon-image">
                <img src={img2} alt="services-img" className="services-img" />
              </div>
              <div className="services-icon-text">image2</div>
            </div>
            <div className="services-icon-single">
              <div className="services-icon-image">
                <img src={img3} alt="services-img" className="services-img" />
              </div>
              <div className="services-icon-text">image3</div>
            </div>
            <div className="services-icon-single">
              <div className="services-icon-image">
                <img src={img4} alt="services-img" className="services-img" />
              </div>
              <div className="services-icon-text">image4</div>
            </div>
            <div className="services-icon-single">
              <div className="services-icon-image">
                <img src={img5} alt="services-img" className="services-img" />
              </div>
              <div className="services-icon-text">image5</div>
            </div>
          </div>
          <div className="services-contact-form">
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}
