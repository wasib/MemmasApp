import React from "react";
import { Form } from "semantic-ui-react";
import "../../styles/ContactForm.css";

export default class ServicesForm extends React.Component {
  render() {
    return (
      <div className="contact-form-ar">
        <Form style={{ "text-align": "right" }}>
          <h2>طلب خدمة جديدة</h2>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              placeholder=" تأهيلية تخص"
              style={{ direction: "rtl", textAlign: "right" }}
            />
            <Form.Input fluid placeholder=" المعلوم" />
          </Form.Group>
          <Form.Input placeholder="أهيلية تخص" />
          <Form.Input placeholder="رقم التواصل" />
          <Form.TextArea placeholder="مجال أمن " />

          <Form.Button color="blue">عرض المزيد</Form.Button>
        </Form>
      </div>
    );
  }
}
