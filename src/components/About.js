import React from "react";
import { Header, Image } from "semantic-ui-react";
import image from "../images/about.jpg";
import { Link } from "react-router-dom";
import "../styles/About.css";

export class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="about-gradient">
          <Header as="h2" textAlign="center">
            <Header.Content style={{ color: "white" }}>About Us</Header.Content>
            {/* <Header.Subheader style={{ color: "white" }}>
              <br />
              Middle East Mechatronics Factory for Machinery and Equipment,
              established in 2016 and it is the first factory in the KSA which
              is specialized in the automation field and specifically producing
              automatic car wash machines with providing reliable warranties and
              after-services for the products nationwide and worldwide.
            </Header.Subheader> */}
          </Header>
        </div>

        <div className="about-us-2">
          <div className="about-us-image">
            <Image src={image} />
          </div>
          <div className="about-us-text">
            <h2>About Us</h2>
            <p>
              Middle East Mechatronics Factory for Machinery and Equipment,
              established in 2016 and it is the first factory in the KSA which
              is specialized in the automation field and specifically producing
              automatic car wash machines with providing reliable warranties and
              after-services for the products nationwide and worldwide.
            </p>
          </div>
        </div>

        {/* <div className="need-a-project-2">
            <h2>Need a Project?</h2>
            <p>
              Let us know what youre looking for in an agency. We'll take a look
              and see if this could be the start of something beautiful
            </p>
            <Link to="/en/Contact">
              <button className="ui button">Let's Talk</button>
            </Link>
        </div> */}
      </div>
    );
  }
}
