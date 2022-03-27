import React from "react";
import Product from "./Product";

const ProductList = (props) => {
  return props.productList.length > 0 ? (
    props.productList.map((product, i) => {
      return (
          <Product
            product={product}
            deleteProduct={props.deleteProduct}
            key={i}
            removeQuantity={props.removeQuantity}
            addQuantity={props.addQuantity}
            index={i}
          />
      );
    })
  ) : (
    <div>No Products to display :( </div>
  );
};

export default ProductList;
