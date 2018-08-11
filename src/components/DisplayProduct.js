import React from "react";

class DisplayProduct extends React.Component {
  render() {
    return (
      <div>
        <div className="embedded-model">
          <div className="sketchfab-embed-wrapper">
            <iframe
              width="640"
              height="480"
              src={this.props.data.link}
              title='title'
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
