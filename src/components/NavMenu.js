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
    this.props.history.push(`/${this.props.language}/` + name);
  }

  render() {
    let active = this.props.location.pathname
    .toString()
    .substr(4)
    .trim();

    return this.props.language === "en" ? (
      <NavMenuEn active={active} handleItemClick={this.handleItemClick} />
    ) : (
      <NavMenuAr active={active} handleItemClick={this.handleItemClick} />
    );
  }
}

export default withRouter(NavMenu);
