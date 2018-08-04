import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react'
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
     this.props.history.push("/"+newItem);
  }

  render() {
    return (
      <div>
        <MenuComplete
          activeItem={this.state.activeItem}
          changeActiveItem={this.changeActiveItem}
        />
        <Router>
          <div>
            <Route exact path="/" component={Home} />
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
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
