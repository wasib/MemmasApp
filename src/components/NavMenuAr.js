import React from "react";

export class NavMenuAr extends React.Component {
  render() {
    return (
      <div className="NavMenu">
        <button
          className="btn btn-hover-3 link-1"
          onClick={() => {
            this.props.handleItemClick("Contact");
          }}
          style={
            this.props.active === "Contact"
              ? {
                  color: "lightblue"
                }
              : {
                  color: "white"
                }
          }
        >
          Contact
        </button>
        <button
          className="btn btn-hover-3 link-1"
          onClick={() => {
            this.props.handleItemClick("Services");
          }}
          style={
            this.props.active === "Services"
              ? {
                  color: "lightblue"
                }
              : {
                  color: "white"
                }
          }
        >
          Services
        </button>
        <button
          className="btn btn-hover-3 link-1"
          onClick={() => {
            this.props.handleItemClick("Product");
          }}
          style={
            this.props.active === "Product"
              ? {
                  color: "lightblue"
                }
              : {
                  color: "white"
                }
          }
        >
          Product
        </button>
        <button
          className="btn btn-hover-3 link-1"
          onClick={() => {
            this.props.handleItemClick("About");
          }}
          style={
            this.props.active === "About"
              ? {
                  color: "lightblue"
                }
              : {
                  color: "white"
                }
          }
        >
          About
        </button>
        <button
          className="btn btn-hover-3 link-1"
          onClick={() => {
            this.props.handleItemClick("Home");
          }}
          style={
            this.props.active === "Home"
              ? {
                  color: "lightblue"
                }
              : {
                  color: "white"
                }
          }
        >
          HomeAr
        </button>
      </div>
    );
  }
}
