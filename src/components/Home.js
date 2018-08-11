import React from "react";
import homeImage from "../images/homeImage.svg";
import signature from "../images/signature.svg";
import client1 from "../images/client1.svg";
import client2 from "../images/client2.svg";
import client3 from "../images/client3.svg";
import client4 from "../images/client4.svg";
import client5 from "../images/client5.svg";
import { Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import ContactForm from "./ContactForm";
import "../styles/Home.css";

export class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="home">
        <div className="home-top">
          <div className="home-image">
            <img src={homeImage} alt="home" />
          </div>
          <div className="home-top-text">
            <Header as="h2" icon textAlign="center">
              <Header.Content>We Design and Develop</Header.Content>
              <Header.Subheader>
                We are a new design studio based in USA. We have over 20 years
                of Combined experience, and know a thing or two about designing
                websites and mobile apps.
              </Header.Subheader>
              <Link to="/Contact">
                <button className="ui button" >
                  CONTACT US
                </button>
              </Link>
            </Header>
          </div>
        </div>

        <div className="about-us">
          <Header as="h2" icon textAlign="center">
            <Header.Content>About Us</Header.Content>
            <Header.Subheader>
              Divide have dont man wherin air fourth. Own itself make have night
              wont make. A you under seed appear which good give. Own give air
              without foul moveth dry first heaven fruit dominonshed wont very
              all
            </Header.Subheader>
          </Header>
          <img src={signature} alt="signature" />
        </div>

        <div className="our-work-process">
          <Header as="h2" icon textAlign="center">
            <Header.Content>Our Work Process</Header.Content>
            <Header.Subheader>
              Was years it seasons was there form he in in them together over
              that, third sixth gathered female creeping bearing behold years.
            </Header.Subheader>
            <iframe
              width="965"
              height="543"
              src="https://www.youtube.com/embed/kJQP7kiw5Fk"
              title='video'
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </Header>
        </div>

        <div className="carousel">
          <Carousel autoplay>
            <div>
              <h3>
                "Outstanding job and exceeded all expectations. It was a
                pleasure to work with them on a sizable first project and am
                looking forward to startthe next one asap."
              </h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </div>

        <div className="clients">
          <img src={client1} alt="client1" />
          <img src={client2} alt="client2" />
          <img src={client3} alt="client3" />
          <img src={client4} alt="client4" />
          <img src={client5} alt="client5" />
        </div>

        <div className="need-a-project">
          <Header as="h2" icon textAlign="center">
            <Header.Content>Need a Project?</Header.Content>
            <Header.Subheader>
              Let us know what youre looking for in an agency. We'll take a look
              and see if this could be the start of something beautiful
            </Header.Subheader>
          </Header>
          <ContactForm />
        </div>
      </div>
    );
  }
}
