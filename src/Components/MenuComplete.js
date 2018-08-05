import React from "react";
import MenuBar from "./Menu";
import { withRouter } from "react-router-dom";
import { Sticky } from "semantic-ui-react";
import "./../styles/MenuComplete.css";
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
                src="https://st.depositphotos.com/2274151/3518/i/950/depositphotos_35186549-stock-photo-sample-grunge-red-round-stamp.jpg"
                alt="Image"
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
