import React from "react";
import {
  Header,
  Icon,
  Grid,
  Image,
  Container,
  List,
  Form
} from "semantic-ui-react";

export const Contact = () => {
  return (
    <div>
      <div>
        <Header size="Huge" icon textAlign="center">
          <Icon name="users" circular />
          <Header.Content>ABOUT US</Header.Content>
        </Header>
      </div>

      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8} verticalAlign="middle">
              <Container textAlign="justified">
                <Header as="h2">Contact Info:</Header>
                <p>
                  Domestic dogs inherited complex behaviors, such as bite
                  inhibition, from their wolf ancestors, which would have been
                  pack hunters with complex body language.
                </p>
                <List>
                  <List.Item>Address:</List.Item>
                  <List.Item>Phone:</List.Item>
                  <List.Item>Email</List.Item>
                  <List.Item>Fax</List.Item>
                </List>
              </Container>
            </Grid.Column>
            <Grid.Column width={8}>
              <Form>
                <Form.Group widths="equal">
                  <Form.Input fluid placeholder="Your Name" />
                  <Form.Input fluid placeholder="Your Email" />
                </Form.Group>
                <Form.Input placeholder="Your Title" />
                <Form.TextArea placeholder="Your Comment" />

                <Form.Button>SEND MESSAGE</Form.Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};
