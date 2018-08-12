import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Menu, Icon, Segment, Sidebar } from "semantic-ui-react";
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.handleSidebarHide = this.handleSidebarHide.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick = () => this.setState({ visible: !this.state.visible });

  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;

    return (
      <Router>
        <div>
          <AppBar handleButtonClick={this.handleButtonClick} />

          <div style={{ marginTop: "60px" }}>
            <Sidebar.Pushable as={Segment}>
              <Sidebar
                as={Menu}
                animation="overlay"
                direction="right"
                icon="labeled"
                inverted
                onHide={this.handleSidebarHide}
                vertical
                visible={visible}
                width="thin"
              >
                <Link to="/">
                  <Menu.Item>
                    <Icon name="home" />
                    Home
                  </Menu.Item>
                </Link>
                <Link to="/About">
                  <Menu.Item>
                    <Icon name="gamepad" />
                    About
                  </Menu.Item>
                </Link>
                <Link to="/Product">
                  <Menu.Item>
                    <Icon name="camera" />
                    Product
                  </Menu.Item>
                </Link>
                <Link to="/Services">
                  <Menu.Item>
                    <Icon name="settings" />
                    Services
                  </Menu.Item>
                </Link>
                <Link to="/Contact">
                  <Menu.Item>
                    <Icon name="conversation" />
                    Contact
                  </Menu.Item>
                </Link>
              </Sidebar>

              <Sidebar.Pusher dimmed={visible}>
                <Segment basic>
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
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
