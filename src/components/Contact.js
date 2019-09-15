import React from "react";
import "../styles/Contact.css";
import ContactForm from "./ContactForm";

export class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="contact-gradient">
          <h2>Contact</h2>
        </div>

        <div className="middle-contact">
          <div className="left-contact-info">
            <h2>Factory address:</h2>
            <p>
              Middle East Advanced Factory 2308 King Faisal Rd, Ad Dahiah (Al
              Khomrah) district، Jeddah 22529, Saudi Arabia.
            </p>
            <ul>
              <li>
                <b>Working Hours:</b> SAT-THU (8AM-5PM)
              </li>
              <li>
                <b>Universal Free Number:</b> +966 9200 12804
              </li>
              <li>
                <b>Telefax:</b> +966 12 2881787
              </li>
              <li>
                <b>Sales Direct H/P:</b> +966 550954055
              </li>
            </ul>
          </div>
          <div className="right-contact-form">
            <ContactForm />
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
