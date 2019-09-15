import React from "react";
import "../styles/Services.css";
import ServicesForm from "./ServicesForm";
import img1 from "../images/services/services img 1.png";
import img2 from "../images/services/services img 2.png";
import img3 from "../images/services/services img 3.png";

export class Services extends React.Component {
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
          <h2>Services</h2>
        </div>
        <div className="services-container">
          <div className="services-top-text">
            Providing professional consultations in automatic car wash machines
            field and our services include providing designs, case studies, site
            preparation, equipment installation, and maintenance.
            <br />
            <br /> Providing professional consultations in the automation filed
            and that includes designing, fabricating, programming and
            maintaining the projects.
          </div>
          <div className="services-icons">
            <div className="services-icon-single" onClick={this.handleClick}>
              <div className="services-icon-image">
                <img src={img1} alt="services-img" className="services-img" />
              </div>
              <div className="services-icon-text">Site drawing services</div>
            </div>
            <div className="services-icon-single" onClick={this.handleClick}>
              <div className="services-icon-image">
                <img src={img2} alt="services-img" className="services-img" />
              </div>
              <div className="services-icon-text">Request a quote</div>
            </div>
            <div className="services-icon-single" onClick={this.handleClick}>
              <div className="services-icon-image">
                <img src={img3} alt="services-img" className="services-img" />
              </div>
              <div className="services-icon-text">Consultation services</div>
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
