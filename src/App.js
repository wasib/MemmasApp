import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {Menu, Icon, Segment, Sidebar} from "semantic-ui-react";
import AppBar from "./components/AppBar";
import {Home} from "./components/Home";
import {Contact} from "./components/Contact";
import {About} from "./components/About";
import {Product} from "./components/Product";
import ProductView from "./components/ProductView";
import {Services} from "./components/Services";
import {Footer} from "./components/Footer";
import {PageNotFound} from "./components/PageNotFound";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.handleButtonClick = this
      .handleButtonClick
      .bind(this);

    this.closeNavBar = this
      .closeNavBar
      .bind(this);
    this.redirect = this
      .redirect
      .bind(this);
  }

  handleButtonClick = () => {
    window.scrollTo(0, 0);
    this.setState({
      visible: true //!this.state.visible
    });
  };

  closeNavBar = () => this.setState({visible: false});
  redirect = (target) => {
    this.closeNavBar;
    window.location = "/" + target;
    /*
    this
      .props
      .history
      .push("/" + target);
      */
  }

  render() {
    console.log("render called");
    const {visible} = this.state;

    return (
      <div>
        <Router>
          <div>
            <AppBar handleButtonClick={this.handleButtonClick}/>

            <div style={{
              marginTop: "60px"
            }}>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Home" component={Home}/>
                <Route path="/About" component={About}/>
                <Route exact path="/Product" component={Product}/>
                <Route path="/Product/:id" component={ProductView}/>
                <Route path="/Services" component={Services}/>
                <Route path="/Contact" component={Contact}/>
                <Route component={PageNotFound}/>
              </Switch>

            </div>

            <Footer/> {console.log(visible)}
            <div
              className="sidenav"
              style={visible
              ? {
                width: '100vw'
              }
              : {
                width: '0vw'
              }}>
              <a href="javascript:void(0)" className="closebtn" onClick={this.closeNavBar}>&times;</a>

              <span onClick={() => {
                this.redirect("")
              }}>Home</span>
              <span onClick={() => {
                this.redirect("About")
              }}>About</span>
              <span
                onClick={() => {
                this.redirect("Product")
              }}>Product</span>
              <span
                onClick={() => {
                this.redirect("Services")
              }}>Services</span>
              <span
                onClick={() => {
                this.redirect("Contact")
              }}>Contact</span>

            </div>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
