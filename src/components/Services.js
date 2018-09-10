import React from "react";
import "../styles/Services.css"
import ContactForm from "./ContactForm";

export class Services extends React.Component {
  componentDidMount(){
    window.scrollTo(0,0);
  }
  render() {
    return (
    <div>
      <div className="services-gradient">
          <h2>Services</h2>
        </div>
        <ContactForm/>
    </div>
  );
}
}
