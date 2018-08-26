import React from "react";
import "./../styles/AppBar.css";
import NavMenu from "./NavMenu";
import { Link, withRouter } from "react-router-dom";
import { Button, Dropdown, Icon } from "semantic-ui-react";
import logo from "../images/logo.png";

const languageOptions = [
  { key: "en", text: "English", value: "en" },
  { key: "ar", text: "Arabic", value: "ar" }
];

class AppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.location.pathname
        .toString()
        .substr(1, 2)
        .trim(),
      flag:
        this.props.location.pathname
          .toString()
          .substr(1, 2)
          .trim() === "ar"
          ? "sa flag"
          : "us flag"
    };
  }

  onChange = (e, data) => {
    this.setState({
      selected: data.value,
      flag: data.value === "ar" ? "sa flag" : "us flag"
    });
    this.props.history.push(
      `/${data.value}/` +
        this.props.location.pathname
          .toString()
          .substr(4)
          .trim()
    );
  };
  render() {
    var temp = this.state.selected === "ar" ? "ar" : "en";
    const imgLink = `/${temp}/Home`;
    const trigger = (
      <span>
        <i class={this.state.flag} />
      </span>
    );
    return (
      <div className="AppBar">
        <div className="LeftPane">
          <Link to={imgLink}>
            <img src={logo} alt="logo" width="120" height="50" />
          </Link>
          <Dropdown
            fluid
            trigger={trigger}
            options={languageOptions}
            onChange={this.onChange}
          />
        </div>
        <div className="RightPane">
          <NavMenu language={this.state.selected} />
        </div>
        <div className="sidebar-button">
          <Button icon="content" onClick={this.props.handleButtonClick} />
        </div>
      </div>
    );
  }
}

export default withRouter(AppBar);
