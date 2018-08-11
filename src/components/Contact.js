import React from "react";
import { Header, Icon, Grid, Container, List } from "semantic-ui-react";
import ContactForm from "./ContactForm";

export class Contact extends React.Component{

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){

  return (
    <div>
      <div>
        <Header size="huge" icon textAlign="center">
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
              <ContactForm />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};
}