import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import AppBar from "./components/AppBar";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Product } from "./components/Product";
import ProductView from "./components/ProductView";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import { PageNotFound } from "./components/PageNotFound";
import { HomeAr } from "./components/ar/Home";
import { ContactAr } from "./components/ar/Contact";
import { AboutAr } from "./components/ar/About";
import { ProductAr } from "./components/ar/Product";
import ProductViewAr from "./components/ar/ProductView";
import { ServicesAr } from "./components/ar/Services";
import "./styles/App.css";
import MobileNav from "./components/MobileNav";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);

    this.state = {
      mobileNavBarVisible: false
    };
    this.closeMobileNavBar = this.closeMobileNavBar.bind(this);
  }

  handleButtonClick = () => {
    this.setState({
      mobileNavBarVisible: true
    });
  };

  closeMobileNavBar() {
    this.setState({
      mobileNavBarVisible: false
    });
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
              <Route exact path="/" component={() => window.location='/en/Home'}/>
                <Redirect exact from="/en" to="/en/Home" />
                <Redirect exact from="/ar" to="/ar/Home" />
                <Route path="/en/Home" component={Home} />
                <Route path="/en/About" component={About} />
                <Route exact path="/en/Product" component={Product} />
                <Route path="/en/Product/:id" component={ProductView} />
                <Route path="/en/Services" component={Services} />
                <Route path="/en/Contact" component={Contact} />
                <Route path="/ar/Home" component={HomeAr} />
                <Route path="/ar/About" component={AboutAr} />
                <Route exact path="/ar/Product" component={ProductAr} />
                <Route path="/ar/Product/:id" component={ProductViewAr} />
                <Route path="/ar/Services" component={ServicesAr} />
                <Route path="/ar/Contact" component={ContactAr} />
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
