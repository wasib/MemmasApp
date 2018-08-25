import React from "react";
import { Link } from "react-router-dom";
import PRODUCTSINFO from "./ProductsInfo";
import "../../styles/ProductList.css";
import img1 from "../../images/img1.svg";

class ProductList extends React.Component {
  render() {
    const products = [];
    PRODUCTSINFO.forEach(product => {
      let path = "/Product/" + product.id;
      products.push(
        <div className='product-individual' key={product.id}>
          <Link to={path}>
            <img src={img1} alt="product-img" className="product-img" />
          </Link>
          <div className="product-text">
            <div className="product-model">
              Model:
              {product.model}
            </div>
            <div className="product-description">{product.description}</div>
          </div>
        </div>
      );
    });
    return <div className="product-list">{products}</div>;
  }
}

export default ProductList;
