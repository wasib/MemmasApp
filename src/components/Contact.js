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
    <div style={{margin:'20px 0px 20px 0px'}}>
        <Header size="huge" icon textAlign="center">
          <Icon name="users" circular inverted teal  />
          <Header.Content style={{margin:'15px 0px 15px 0px'}}>About Us</Header.Content>
        </Header>
      </div>

      <div style={{margin:'30px 0px 20px 0px'}}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8} verticalAlign="middle">
              <Container textAlign="justified">
                <Header as="h2" style={{margin:'0px 15px 0px 15px'}}>Contact Info:</Header>
                <p style={{padding:'0px 15px 0px 15px'}}>
                  Domestic dogs inherited complex behaviors, such as bite
                  inhibition, from their wolf ancestors, which would have been
                  pack hunters with complex body language.
                </p>
                <List>
                  <List.Item style={{padding:'0px 15px 0px 15px'}}>Address:</List.Item>
                  <List.Item style={{padding:'0px 15px 0px 15px'}}>Phone:</List.Item>
                  <List.Item style={{padding:'0px 15px 0px 15px'}}>Email</List.Item>
                  <List.Item style={{padding:'0px 15px 0px 15px'}}>Fax</List.Item>
                </List>
              </Container>
            </Grid.Column>
            <Grid.Column width={8} >
              <ContactForm />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};
}