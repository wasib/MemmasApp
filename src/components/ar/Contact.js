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
          <h2>Contact</h2>
        </div>

        <div className="middle-contact">
          <div className="left-contact-info">
            <h2>Contact Info:</h2>
            <p>
              Domestic dogs inherited complex behaviors, such as bite
              inhibition, from their wolf ancestors, which would have been pack
              hunters with complex body language.
            </p>
            <ul>
              <li>
                <b>Address:</b> 10111 Santa Monica Boulevard, LA
              </li>
              <li>
                <b>Phone:</b> +44 987 065 908
              </li>
              <li>
                <b>Email:</b> info@example.com
              </li>
              <li>
                <b>Fax:</b> +44 987 065 909
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
                className='maps-responsive'
                title='map'
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
