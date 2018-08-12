import React from "react";
import "./../styles/NavMenu.css";
import { withRouter } from "react-router-dom";

class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(name) {
    if (name === "Home") {
      this.props.history.push("/");
    } else {
      this.props.history.push("/" + name);
    }
  }

  render() {
    let active = this.props.location.pathname
      .toString()
      .substr(1)
      .trim();
    if(active.indexOf("/") != -1)      
    active =  active.substr(0,active.indexOf("/"));
      
    return (
      <div className="NavMenu">
        <span
          onClick={() => {
            this.handleItemClick("Home");
          }}
          style={active === "" ? { color: "lightblue" } : { color: "white" }}
        >
          Home
        </span>
        <span
          onClick={() => {
            this.handleItemClick("About");
          }}
          style={
            active === "About" ? { color: "lightblue" } : { color: "white" }
          }
        >
          About
        </span>
        <span
          onClick={() => {
            this.handleItemClick("Product");
          }}
          style={
            active === "Product" ? { color: "lightblue" } : { color: "white" }
          }
        >
          Product
        </span>
        <span
          onClick={() => {
            this.handleItemClick("Services");
          }}
          style={
            active === "Services" ? { color: "lightblue" } : { color: "white" }
          }
        >
          Services
        </span>
        <span
          onClick={() => {
            this.handleItemClick("Contact");
          }}
          style={
            active === "Contact" ? { color: "lightblue" } : { color: "white" }
          }
        >
          Contact
        </span>
      </div>
    );
  }
}

export default withRouter(NavMenu);
