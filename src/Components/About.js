import React from "react";
import { Header, Icon, Grid, Image, Container,Button } from "semantic-ui-react";
import image from "../images/image.png";

export class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div>
          <Header size="Huge" icon textAlign="center">
            <Icon name="users" circular />
            <Header.Content>ABOUT US</Header.Content>
            <Header.Subheader>
              I am a Graphic and Web Designer based in New York, specializing in
              User Interface Design and Development.
            </Header.Subheader>
          </Header>
        </div>
        <div>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Image src={image} />
              </Grid.Column>
              <Grid.Column width={8} verticalAlign="middle">
                <Container textAlign="justified">
                  <Header as="h2">About Me</Header>
                  <p>
                    Domestic dogs inherited complex behaviors, such as bite
                    inhibition, from their wolf ancestors, which would have been
                    pack hunters with complex body language.
                  </p>
                  <p>
                    "man's best friend" in the Western world. In some cultures,
                    however, dogs are also a source of meat.
                  </p>
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <div>
          <Header as="h2" icon textAlign="center">
            <Header.Content>Need a Project?</Header.Content>
            <Header.Subheader>
              Let us know what youre looking for in an agency. We'll take a look and see if
              this could be the start of something beautiful
            </Header.Subheader>
            <button class="ui button" role="button" onClick={()=>{this.props.history.push('/Contact')}}>Let's Talk</button>
          </Header>
          
        </div>
      </div>
    );
  }
}
