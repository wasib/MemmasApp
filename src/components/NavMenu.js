import React from "react";
import "./../styles/NavMenu.css";
import {withRouter} from "react-router-dom";

class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleItemClick = this
      .handleItemClick
      .bind(this);
  }

  handleItemClick(name) {
    if (name === "Home") {
      this
        .props
        .history
        .push("/");
    } else {
      this
        .props
        .history
        .push("/" + name);
    }
  }

  render() {
    let active = this
      .props
      .location
      .pathname
      .toString()
      .substr(1)
      .trim();
    if (active.indexOf("/") !== -1) {
      active = active.substr(0, active.indexOf("/"));
    }

    return (
      <div className="NavMenu">
        <button
          className="btn btn-hover-3 link-1"
          onClick={() => {
          this.handleItemClick("Home");
        }}
          style={active === ""
          ? {
            color: "lightblue"
          }
          : {
            color: "white"
          }}>
          Home
        </button>
        <button
          className="btn btn-hover-3 link-1"
          onClick={() => {
          this.handleItemClick("About");
        }}
          style={active === "About"
          ? {
            color: "lightblue"
          }
          : {
            color: "white"
          }}>
          About
        </button>
        <button
          className="btn btn-hover-3 link-1"
          onClick={() => {
          this.handleItemClick("Product");
        }}
          style={active === "Product"
          ? {
            color: "lightblue"
          }
          : {
            color: "white"
          }}>
          Product
        </button>
        <button
          className="btn btn-hover-3 link-1"
          onClick={() => {
          this.handleItemClick("Services");
        }}
          style={active === "Services"
          ? {
            color: "lightblue"
          }
          : {
            color: "white"
          }}>
          Services
        </button>
        <button
          className="btn btn-hover-3 link-1"
          onClick={() => {
          this.handleItemClick("Contact");
        }}
          style={active === "Contact"
          ? {
            color: "lightblue"
          }
          : {
            color: "white"
          }}>
          Contact
        </button>
      </div>
    );
  }
}

export default withRouter(NavMenu);
