import React, { Component } from "C:/Users/wasib/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react";
import MenuComplete from "./Components/MenuComplete";
import {Home} from './Components/Home'
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
        <Router>
             <div>
               <Route exact path="/" component={Home} />
               <Route path="/attendance" component={Attendance} />
               </div>  
          </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
