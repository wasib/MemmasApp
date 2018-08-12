import React from "react";
import "../styles/Product.css";
import ProductList from "./ProductList";

export class Product extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
<<<<<<< HEAD
        <div className="product-gradient">
          <h2>
            <br />
            <br />
            PRODUCT
          </h2>
        </div>
        <ProductList />
=======
        <div className="product-gradient" >
          <h2 style={{
          color: 'white',
          paddingTop:'15px'
        }}>Products</h2>
        </div>
        <ProductList/>
>>>>>>> minutecss
      </div>
    );
  }
}
