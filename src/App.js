import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Product } from "./components/Product";
import  ProductView  from "./components/ProductView";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import {PageNotFound} from "./components/PageNotFound"
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        {/*onUpdate={() => {document.body.scrollTo(0, 0); }}  history={createBrowserHistory()}>*/}
        <div>
          {/*<MenuComplete />*/}
          <AppBar />

          <div style={{marginTop:'60px'}}> 
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
            {/* If props need to be passed use this:
             <Route
              path='/dashboard'
             render={(props) => <Dashboard {...props} isAuthed={true} />} 
              />
             */}
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
