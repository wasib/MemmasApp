import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MenuComplete from "./Components/MenuComplete";
import { Home } from "./Components/Home";
import { Contact } from "./Components/Contact";
import { About } from "./Components/About";
import { Product } from "./Components/Product";
import { Services } from "./Components/Services";
import { Footer } from "./Components/Footer";
import logo from "./logo.svg";
import "./styles/App.css";

class App extends Component {
  render() {

    return (
      <Router>{/*onUpdate={() => {document.body.scrollTo(0, 0); }}  history={createBrowserHistory()}>*/}
        <div>
          <MenuComplete />
          <div style={{marginTop:'100px'}}>
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
