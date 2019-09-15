import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./../styles/MobileNav.css";
import { Icon } from "semantic-ui-react";

class MobileNav extends Component {
  redirect(target) {
    this.props.history.push(`/${this.props.language}/` + target);
  }

  render() {
    const visible = this.props.visible;
    let active = this.props.location.pathname
      .toString()
      .substr(1)
      .trim();
    if (active.indexOf("/") !== -1)
      active = active.substr(0, active.indexOf("/"));

    return (
      <div
        className="sidenav"
        style={
          visible
            ? {
                width: "100vw"
              }
            : {
                width: "0vw"
              }
        }
      >
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={this.props.closeMobileNavBar}
        >
          &times;
        </a>

        <span
          onClick={() => {
            this.props.closeMobileNavBar();
            this.redirect("Home");
          }}
          style={
            active === ""
              ? {
                  color: "#f1f1f1"
                }
              : {
                  color: "#818181"
                }
          }
        >
          <Icon name="home" />
          &nbsp;{this.props.language === "ar" ? "الصفحة" : "HOME"}
        </span>
        <span
          onClick={() => {
            this.props.closeMobileNavBar();
            this.redirect("About");
          }}
          style={
            active === "About"
              ? {
                  color: "#f1f1f1"
                }
              : {
                  color: "#818181"
                }
          }
        >
          <Icon name="info" />
          &nbsp;{this.props.language === "ar" ? "من نحن" : "ABOUT"}
        </span>
        <span
          onClick={() => {
            this.props.closeMobileNavBar();
            this.redirect("Product");
          }}
          style={
            active === "Product"
              ? {
                  color: "#f1f1f1"
                }
              : {
                  color: "#818181"
                }
          }
        >
          <Icon name="camera" />
          &nbsp;{this.props.language === "ar" ? "المنتجات" : "PRODUCT"}
        </span>
        <span
          onClick={() => {
            this.props.closeMobileNavBar();
            this.redirect("Services");
          }}
          style={
            active === "Services"
              ? {
                  color: "#f1f1f1"
                }
              : {
                  color: "#818181"
                }
          }
        >
          <Icon name="settings" />
          &nbsp;{this.props.language === "ar" ? "خدمات" : "SERVICES"}
        </span>
        <span
          onClick={() => {
            this.props.closeMobileNavBar();
            this.redirect("Contact");
          }}
          style={
            active === "Contact"
              ? {
                  color: "#f1f1f1"
                }
              : {
                  color: "#818181"
                }
          }
        >
          <Icon name="conversation" />
          &nbsp;{this.props.language === "ar" ? "اتصل بنا" : "CONTACT"}
        </span>
      </div>
    );
  }
}

export default withRouter(MobileNav);
