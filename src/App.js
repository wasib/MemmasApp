import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Product } from "./components/Product";
import ProductView from "./components/ProductView";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import { PageNotFound } from "./components/PageNotFound";
import "./styles/App.css";
import MobileNav from "./components/MobileNav";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);

    this.state = {
      mobileNavBarVisible: false
    };

    this.redirect = this.redirect.bind(this);
    this.closeMobileNavBar = this.closeMobileNavBar.bind(this);

    this.child = React.createRef();
  }

  handleButtonClick = () => {
    window.scrollTo(0, 0);
    this.setState({
      mobileNavBarVisible: true
    });
  };

  closeMobileNavBar() {
    this.setState({
      mobileNavBarVisible: false
    });
  }

  redirect(target) {
    this.child.current.redirect(target);
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <AppBar handleButtonClick={this.handleButtonClick} />

            <div
              style={{
                marginTop: "60px"
              }}
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Home" component={Home} />
                <Route path="/About" component={About} />
                <Route exact path="/Product" component={Product} />
                <Route path="/Product/:id" component={ProductView} />
                <Route path="/Services" component={Services} />
                <Route path="/Contact" component={Contact} />
                <Route component={PageNotFound} />
              </Switch>
            </div>

            <Footer />
            <MobileNav
              visible={this.state.mobileNavBarVisible}
              closeMobileNavBar={this.closeMobileNavBar}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
