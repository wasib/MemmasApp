import React from 'react'

export class NavMenuEn extends React.Component{
    render(){
        return(
            <div className="NavMenu">
        <button
          className="btn btn-hover-3 link-1"
          onClick={() => {
            this.props.handleItemClick("Home");
          }}
          style={
            this.props.active === "Home"
              ? {
                  color: "lightblue"
                }
              : {
                  color: "white"
                }
          }
        >
          HOME
        </button>
        <button
          className="btn btn-hover-3 link-1"
          onClick={() => {
            this.props.handleItemClick("About");
          }}
          style={
            this.props.active === "About"
              ? {
                  color: "lightblue"
                }
              : {
                  color: "white"
                }
          }
        >
          ABOUT
        </button>
        <button
          className="btn btn-hover-3 link-1"
          onClick={() => {
            this.props.handleItemClick("Product");
          }}
          style={
            this.props.active === "Product"
              ? {
                  color: "lightblue"
                }
              : {
                  color: "white"
                }
          }
        >
          PRODUCT
        </button>
        <button
          className="btn btn-hover-3 link-1"
          onClick={() => {
            this.props.handleItemClick("Services");
          }}
          style={
            this.props.active === "Services"
              ? {
                  color: "lightblue"
                }
              : {
                  color: "white"
                }
          }
        >
          SERVICES
        </button>
        <button
          className="btn btn-hover-3 link-1"
          onClick={() => {
            this.props.handleItemClick("Contact");
          }}
          style={
            this.props.active === "Contact"
              ? {
                  color: "lightblue"
                }
              : {
                  color: "white"
                }
          }
        >
          CONTACT
        </button>
      </div>
        )
    }
}