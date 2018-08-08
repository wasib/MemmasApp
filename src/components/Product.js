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
        <div className="product-gradient">PRODUCT</div>
        <ProductList />
      </div>
    );
  }
}
