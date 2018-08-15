import React from "react";
import "../styles/DisplayProduct.css";

class DisplayProduct extends React.Component {
  render() {
    return (
      <div className="display-product">
        <div className="embedded-model">
          <div className="sketchfab-embed-wrapper">
            <iframe
              className="resp-iframe"
              src={this.props.data.link}
              title="title"
              frameBorder="0"
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
