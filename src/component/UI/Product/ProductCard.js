import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <>
      <div className="product-card">
        <div className="card">
          <Link to={`/products/Category/${props.product._id}`}>
            <img
              src={props.product.photo}
              className="card-img-top"
              alt="Product"
            />
          </Link>
          <div className="card-body">
            <Link
              to={`/products/Category/${props.product._id}`}
              className={`text-capitalize text-decoration-none link-dark`}
            >
              <h5 className="card-title">{props.product.Product_Name}</h5>
            </Link>
            <p className="card-text">₹{props.product.price}</p>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
