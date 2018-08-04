import React, { Component } from 'react'
import { Menu } from "semantic-ui-react";

export class MenuBar extends Component {
    constructor(props) {
        super(props);
        
        this.handleItemClick = this.handleItemClick.bind(this);
      }
    
      handleItemClick(e,{name}) {
        this.props.changeActiveItem(name);
      }

  render() {
    const activeItem = this.props.activeItem;
    return (
      <div>
        <Menu text>
          <Menu.Item
            style={{ marginRight: "25px" }}
            position="right"
            name="Home"
            active={activeItem === "Home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            style={{ marginRight: "25px" }}
            name="About"
            active={activeItem === "About"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            style={{ marginRight: "25px" }}
            name="Product"
            active={activeItem === "Product"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            style={{ marginRight: "25px" }}
            name="Services"
            active={activeItem === "Services"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            style={{ marginRight: "25px" }}
            name="Contact"
            active={activeItem === "Contact"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    );
  }
}
