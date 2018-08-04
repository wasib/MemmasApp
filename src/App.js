import React, { Component } from "react";
import MenuComplete from "./Components/MenuComplete";
import {Home} from './Components/home'
import {Footer} from './Components/footer'
import logo from "./logo.svg";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "Home"
    };
    this.changeActiveItem = this.changeActiveItem.bind(this);
  }

  changeActiveItem(newItem) {
    this.setState({
      activeItem: newItem
    });
  }

  render() {
    return (
      <div>
        <MenuComplete activeItem={this.state.activeItem} changeActiveItem={this.changeActiveItem} />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
