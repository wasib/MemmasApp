import React from "react";
import "../styles/NavMenu.css";
import { NavMenuEn } from "./NavMenuEn";
import { NavMenuAr } from "./NavMenuAr";
import { withRouter } from "react-router-dom";

class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);
  }
 
  handleItemClick(name) {
    var temp = this.props.language === "ar" ? "ar" : "en";
    this.props.history.push(`/${temp}/` + name);
  }

  render() {
    let active = this.props.location.pathname
      .toString()
      .substr(4)
      .trim();

    return this.props.language === "ar" ? (
      <NavMenuAr active={active} handleItemClick={this.handleItemClick} />
    ) : (
      <NavMenuEn active={active} handleItemClick={this.handleItemClick} />
    );
  }
}

export default withRouter(NavMenu);
