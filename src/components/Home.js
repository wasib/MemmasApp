import React from "react";
import homeImage from "../images/homeImage.svg";
import image from "../images/image.png";
import signature from "../images/signature.svg";
import client1 from "../images/home/1.png";
import client2 from "../images/home/2.png";
import client3 from "../images/home/3.png";
import client4 from "../images/home/5.png";
import client5 from "../images/home/6.png";
import client6 from "../images/home/7.png";
import client7 from "../images/home/8.png";
import { Header, Embed, Image } from "semantic-ui-react";
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
            <Image src={homeImage} size="massive" />
          </div>
          <div className="home-top-text">
            <div className="home-header">
              <Header as="h2" icon textAlign="center">
                <Header.Content style={{ color: "white" }}>
                  We Design and Develop
                </Header.Content>
                <br />
                <Header.Subheader style={{ color: "white" }}>
                  We are a new design studio based in USA. We have over 20 years
                  of Combined experience, and know a thing or two about
                  designing websites and mobile apps.
                </Header.Subheader>
                <br />
                <Link to="/en/Contact">
                  <button className="ui button">CONTACT US</button>
                </Link>
              </Header>
            </div>
          </div>
        </div>

        <div className="about-us">
          <div className="about-text">
            <Header as="h2" icon textAlign="center">
              <Header.Content>About Us</Header.Content>
              <br />
              <Header.Subheader>
                Divide have dont man wherin air fourth. Own itself make have
                night wont make. A you under seed appear which good give. Own
                give air without foul moveth dry first heaven fruit dominonshed
                wont very all.
              </Header.Subheader>
            </Header>
            <img src={signature} alt="signature" />
          </div>
        </div>

        <div className="our-work-process">
          <Header as="h2" icon textAlign="center">
            <Header.Content>Our Work Process</Header.Content>
            <br />
            <Header.Subheader>
              Was years it seasons was there form he in in them together over
              that, third sixth gathered female creeping bearing behold years.
            </Header.Subheader>
            <br />
          </Header>
          <video controls>
            <source
              src={require("../images/home/homepage_video.mp4")}
              type="video/mp4"
            />
          </video>
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
          <img src={client6} alt="client6" />
          <img src={client7} alt="client7" />
        </div>

        <div className="need-a-project">
          <Header as="h2" icon textAlign="center">
            <Header.Content>Need a Project?</Header.Content>
            <br />
            <Header.Subheader>
              Let us know what youre looking for in an agency. We'll take a look
              and see if this could be the start of something beautiful
            </Header.Subheader>
          </Header>
          <br />
          <ContactForm />
        </div>
      </div>
    );
  }
}
