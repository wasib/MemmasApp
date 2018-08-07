import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MenuComplete from "./components/MenuComplete";
import {Home} from "./components/Home";
import {Contact} from "./components/Contact";
import {About} from "./components/About";
import {Product} from "./components/Product";
import {Services} from "./components/Services";
import {Footer} from "./components/Footer";
import logo from "./logo.svg";
import "./styles/App.css";

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      menuInvisible : false
    }
    this.handleScroll =  this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('wheel', this.handleScroll, {passive: true})
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScroll)
  }

  handleScroll(event) {
  var delta;
    if (event.wheelDelta) {
      delta = event.wheelDelta;
    } else {
      delta = -1 * event.deltaY;
    }
    if (delta < 0) {
      this.setState({
        menuInvisible: true
      });
    } else if (delta > 0) {
      this.setState({
        menuInvisible: false
      });
    }
  }

  render() {

    return (
      <Router>{/*onUpdate={() => {document.body.scrollTo(0, 0); }}  history={createBrowserHistory()}>*/}
        <div>
          this.state.menuInvisible?<MenuComplete invisible={this.state.menuInvisible}/>:null;
          <div style={{
            marginTop: '100px'
          }}>
            <Route exact path="/" component={Home}/>
            <Route path="/Home" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Product" component={Product}/>
            <Route path="/Services" component={Services}/>
            <Route path="/Contact" component={Contact}/> {/* If props need to be passed use this:
             <Route
              path='/dashboard'
             render={(props) => <Dashboard {...props} isAuthed={true} />}
              />
             */}
          </div>

          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
