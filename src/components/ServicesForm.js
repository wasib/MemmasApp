import React from "react";
import { Form } from "semantic-ui-react";
import "../styles/ContactForm.css";

export default class ServicesForm extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <h2>Request a new service</h2>
          <Form.Group widths="equal">
            <Form.Input fluid placeholder="Your Name" />
            <Form.Input fluid placeholder="Your Email" />
          </Form.Group>
          <Form.Input placeholder="Your Title" />
          <Form.Input placeholder="Your Contact Number" />
          <Form.TextArea placeholder="Your Comment" />

          <Form.Button color="blue">SEND MESSAGE</Form.Button>
        </Form>
      </div>
    );
  }
}

