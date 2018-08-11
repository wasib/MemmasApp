import React from 'react';
import './../styles/NavMenu.css';
import {withRouter} from "react-router-dom";

class NavMenu extends React.Component{
  
  constructor(props) {
    super(props);
    

    this.handleItemClick = this
      .handleItemClick
      .bind(this);
  }

  handleItemClick(name) {
    
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
  
  render(){
    return(
      <div className="NavMenu">
        <span onClick={ ()=>{this.handleItemClick("Home")}}>Home</span>
        <span onClick={ ()=> {this.handleItemClick("About")}}>About</span>
        <span onClick={ ()=> {this.handleItemClick("Product")}}>Product</span>
        <span onClick={ ()=>{this.handleItemClick("Services")}}>Services</span>
        <span onClick={ ()=>{this.handleItemClick("Contact")}}>Contact</span>
      </div>
    );
  }
}

export default withRouter(NavMenu);