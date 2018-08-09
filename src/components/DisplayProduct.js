import React from "react";
import PRODUCTSINFO from './ProductsInfo'
import img1 from '../images/img1.svg'

 class DisplayProduct extends React.Component {
  
  render() {
      const products=[];
      PRODUCTSINFO.forEach((product)=>{
            products.push(
                <div key={product.id}>
                    <img src={img1} alt='product-img' className='product-img'/>
                    <div className='product-text'>
                       <div className='product-model'>
                       Model:{product.model}
                       </div>
                       <div className='product-description'>
                           {product.description}
                       </div>
                    </div>
                </div>
            )
      })
    return (
      <div className='product-list'>
      {products}
      </div>
    );
  }
}

export default ProductList;