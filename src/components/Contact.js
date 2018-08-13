import React from "react";
import "../styles/Contact.css";
import { Header, List, Container } from "semantic-ui-react";
import ContactForm from "./ContactForm";

export class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="contact-gradient">
          <h2>CONTACT</h2>
        </div>

        <div className="middle-contact">
          <div classname="left-contact-info">
            <Container textAlign="justified">
              <Header as="h2">Contact Info:</Header>
              <p style={{ padding: "0px 15px 0px 15px" }}>
                Domestic dogs inherited complex behaviors, such as bite
                inhibition, from their wolf ancestors, which would have been
                pack hunters with complex body language.
              </p>
              <List>
                <List.Item>
                  <b>Address:</b> 10111 Santa Monica Boulevard, LA
                </List.Item>
                <List.Item>
                  <b>Phone:</b> +44 987 065 908
                </List.Item>
                <List.Item>
                  <b>Email:</b> info@example.com
                </List.Item>
                <List.Item>
                  <b>Fax:</b> +44 987 065 909
                </List.Item>
              </List>
            </Container>
          </div>
          <div className="right-contact-form">
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}
