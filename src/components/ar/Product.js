import React from "react";
import "../../styles/Product.css";
import ProductList from "./ProductList";

export class ProductAr extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="product-gradient">
          <br />
          <br />
          <h2>Products</h2>
        </div>
        <ProductList />
      </div>
    );
  }
}
