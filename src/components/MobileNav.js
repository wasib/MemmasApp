import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import './../styles/MobileNav.css';

class MobileNav extends Component {
  constructor(props) {
    super(props);
  }

  redirect(target) {
    //alert(target);
    this
      .props
      .history
      .push("/" + target);
  }
  render() {
    const visible = this.props.visible;
    console.log("Duh");
    console.log(visible);
    let active = this
      .props
      .location
      .pathname
      .toString()
      .substr(1)
      .trim();
    if (active.indexOf("/") != -1) 
      active = active.substr(0, active.indexOf("/"));
    
    return (
      <div
        className="sidenav"
        style={visible
        ? {
          width: '100vw'
        }
        : {
          width: '0vw'
        }}>
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={this.props.closeMobileNavBar}>&times;</a>

        <span
          onClick={() => {
          this
            .props
            .closeMobileNavBar();
          this.redirect("")
        }}
          style={active == ""
          ? {
            color: '#f1f1f1'
          }
          : {
            color: '#818181'
          }}>Home</span>
        <span
          onClick={() => {
          this
            .props
            .closeMobileNavBar();
          this.redirect("About")
        }}
          style={active == "About"
          ? {
            color: '#f1f1f1'
          }
          : {
            color: '#818181'
          }}>About</span>
        <span
          onClick={() => {
          this
            .props
            .closeMobileNavBar();
          this.redirect("Product")
        }}
          style={active == "Product"
          ? {
            color: '#f1f1f1'
          }
          : {
            color: '#818181'
          }}>Product</span>
        <span
          onClick={() => {
          this
            .props
            .closeMobileNavBar();
          this.redirect("Services")
        }}
          style={active == "Services"
          ? {
            color: '#f1f1f1'
          }
          : {
            color: '#818181'
          }}>Services</span>
        <span
          onClick={() => {
          this
            .props
            .closeMobileNavBar();
          this.redirect("Contact")
        }}
          style={active == "Contact"
          ? {
            color: '#f1f1f1'
          }
          : {
            color: '#818181'
          }}>Contact</span>

      </div>
    )
  }
}

export default withRouter(MobileNav);
