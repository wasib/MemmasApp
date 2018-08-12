import React from "react";
import { Form } from "semantic-ui-react";
import '../styles/ContactForm.css'

class ContactForm extends React.Component {
  render() {
    return (
      <div>
        <Form style={{margin:'0px 15px 0px px'}}> 
          <Form.Group widths="equal">
            <Form.Input fluid placeholder="Your Name" />
            <Form.Input fluid placeholder="Your Email" />
          </Form.Group>
          <Form.Input placeholder="Your Title" />
          <Form.TextArea placeholder="Your Comment" />

          <Form.Button color='blue'>SEND MESSAGE</Form.Button>
        </Form>
      </div>
    );
  }
}

export default ContactForm;