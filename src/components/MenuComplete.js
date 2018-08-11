import React from "react";
import MenuBar from "./Menu";
import { withRouter } from "react-router-dom";
import "./../styles/MenuComplete.css";
import logo from '../images/logo.png';
class MenuComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem:
        this.props.location.pathname === "/"
          ? "/Home"
          : this.props.location.pathname
    };
    
    this.changeActiveItem = this.changeActiveItem.bind(this);
  }

  changeActiveItem(newItem) {
    this.setState({ activeItem: newItem });
  }
  render() {
    return (
      <div className="wholeAppBar">
        <table
          style={{
            width: "100%"
          }}
        >
          <tr>
            <td width="15%">
              <img
                width="60"
                style={{
                  margin: "5px"
                }}
                src={logo}
                alt="logo"
              />
            </td>

            <td width="85%">
              <MenuBar
                activeItem={this.state.activeItem}
                changeActiveItem={this.changeActiveItem}
              />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default withRouter(MenuComplete);
