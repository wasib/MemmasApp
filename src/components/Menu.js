import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {Menu} from "semantic-ui-react";
import './../styles/Menu.css';

class MenuBar extends Component {
  constructor(props) {
    super(props);
    

    this.handleItemClick = this
      .handleItemClick
      .bind(this);
  }

  handleItemClick(e, {name}) {
    this
      .props
      .changeActiveItem('/' + name);
    if (name === 'Home') {
      this
        .props
        .history
        .push('/')
    } else {
      this
        .props
        .history
        .push('/' + name)
    }
  }

  render() {
    const activeItem = this.props.activeItem;
    return (
      <div>
        <Menu text>
          <Menu.Item
            className="menuitem"
            style=
            { activeItem === "/Home" ? {backgroundColor:'#fae4e4'} : {backgroundColor:'white'} }
            position="right"
            name="Home"
            active={activeItem === "/Home"}
            onClick={this.handleItemClick}/>
          <Menu.Item
            className="menuitem"
            style=
            { activeItem === "/About" ? {backgroundColor:''} : {backgroundColor:'white'} }
            name="About"
            active={activeItem === "/About"}
            onClick={this.handleItemClick}/>
          <Menu.Item
            className="menuitem"
            style=
            { activeItem === "/Product" ? {backgroundColor:'#fae4e4'} : {backgroundColor:'white'} }
            name="Product"
            active={activeItem === "/Product"}
            onClick={this.handleItemClick}/>
          <Menu.Item
            className="menuitem"
            style=
            { activeItem === "/Services" ? {backgroundColor:'#fae4e4'} : {backgroundColor:'white'} }
            name="Services"
            active={activeItem === "/Services"}
            onClick={this.handleItemClick}/>
          <Menu.Item
            className="menuitem"
            style=
            { activeItem === "/Contact" ? {backgroundColor:'#fae4e4'} : {backgroundColor:'white'} }
            name="Contact"
            active={activeItem === "/Contact"}
            onClick={this.handleItemClick}
            />
        </Menu>
      </div>
    );
  }
}

export default withRouter(MenuBar);
