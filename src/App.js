import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MenuComplete from "./components/MenuComplete";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Product } from "./components/Product";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import logo from "./logo.svg";
import "./styles/App.css";

class App extends Component {
  render() {

    return (
      <Router>{/*onUpdate={() => {document.body.scrollTo(0, 0); }}  history={createBrowserHistory()}>*/}
        <div>
          <MenuComplete />
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Product" component={Product} />
            <Route path="/Services" component={Services} />
            <Route path="/Contact" component={Contact} />
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
