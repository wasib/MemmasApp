import React from 'react';
import './../styles/AppBar.css';
import NavMenu from './NavMenu';
import { withRouter } from "react-router-dom";
import logo from '../images/logo.png';

class AppBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activeItem:
        this.props.location.pathname === "/"
          ? "/Home"
          : this.props.location.pathname
    };
   }
  
    /*
    var prevScrollpos = window.pageYOffset;

    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        //document.getElementById("navbar").style.top = "0";
        this.setState({
          overridedStyle: {
            height: '8vh'
          }
        });
      } else {
        //document.getElementById("navbar").style.top = "-50px";
        this.setState({
          overridedStyle: {
            height: '0vh'
          }
        });
      }
      prevScrollpos = currentScrollPos;
    }.bind(this)
  }
*/
  hide = () => {
    this.setState({
      overridedStyle: {
        height: '0vh',
        display:'none'
      }
    });
    
  }
  render() {
    return (
      <div className="AppBar" style={this.state.overridedStyle}>
        <div className="LeftPane">
          <img src={logo} width="120" height="50" />
        </div>
        <div className="CenterPane"> 
        </div>
        <div className="RightPane">
          <NavMenu />
        </div>
      </div>
    );
  }
}

export default withRouter(AppBar);