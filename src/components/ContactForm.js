import React from "react";
import { Form } from "semantic-ui-react";

class ContactForm extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group widths="equal">
            <Form.Input fluid placeholder="Your Name" />
            <Form.Input fluid placeholder="Your Email" />
          </Form.Group>
          <Form.Input placeholder="Your Title" />
          <Form.TextArea placeholder="Your Comment" />

          <Form.Button>SEND MESSAGE</Form.Button>
        </Form>
      </div>
    );
  }
}

export default ContactForm;