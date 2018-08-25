import React from "react";
import "./../styles/AppBar.css";
import NavMenu from "./NavMenu";
import { Link, withRouter } from "react-router-dom";
import { Button, Dropdown } from "semantic-ui-react";
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
      .substr(1,2)
      .trim()
    };
  }

  onChange = (e, data) => {
    console.log(data.value);
    this.setState({ selected: data.value });
    this.props.history.push(
      `/${data.value}/` +
        this.props.location.pathname
          .toString()
          .substr(4)
          .trim()
    );
  };
  render() {
    const imgLink=`/${this.state.selected}/Home`;
    return (
      <div className="AppBar">
        <div className="LeftPane">
          <Link to={imgLink}>
            <img src={logo} alt="logo" width="120" height="50" />
          </Link>
          <Dropdown
            button
            className="icon"
            fluid
            labeled
            icon="world"
            options={languageOptions}
            value={this.state.selected}
            onChange={this.onChange}
          />
        </div>
        <div className="RightPane">
          <NavMenu language={this.state.selected}/>
        </div>
        <div className="sidebar-button">
          <Button icon="content" onClick={this.props.handleButtonClick} />
        </div>
      </div>
    );
  }
}

export default withRouter(AppBar);
