import React from "react";
import bigProduct from "../images/bigProduct.svg";

class DisplayProduct extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="embedded-model">
          <div class="sketchfab-embed-wrapper">
            <iframe
              width="640"
              height="480"
              src={this.props.data.link}
              frameborder="0"
              allow="autoplay; fullscreen; vr"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            />
          </div>
        </div>
        <div className="model-details">
          Model:
          {this.props.data.model}
          <br />
          {this.props.data.description}
        </div>
      </div>
    );
  }
}

export default DisplayProduct;
