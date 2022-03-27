import React from "react";

function Product(props) {
  return ( 
    <div className="row mt-3">
      <div className="col-5">
        <h3>
          {props.product.name}{" "}
          <span className="badge bg-secondary">₹{props.product.price}</span>
        </h3>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            onClick={() => props.removeQuantity(props.index)}
            className="btn btn-danger"
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            onClick={() => {
              props.addQuantity(props.index);
            }}
            className="btn btn-success"
          >
            +
          </button>
        </div>
      </div>
      <div className="col-3">
        {props.product.price * props.product.quantity}
      </div>
      <div className="col-1">
        <button className="btn btn-danger btn-sm" onClick={()=>props.deleteProduct(props.index)} >X</button>
      </div>
      
    </div>
  );
}

export default Product;
