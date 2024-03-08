import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <>
      <div class="product-card">
        <div class="card">
          <Link to={`/products/Category/${props.product._id}`}>
            <img
              src={props.product.photo}
              class="card-img-top"
              alt="Product"
            />
          </Link>
          <div class="card-body">
            <Link
              to={`/products/Category/${props.product._id}`}
              className={`text-capitalize text-decoration-none link-dark`}
            >
              <h5 class="card-title">{props.product.Product_Name}</h5>
            </Link>
            <p class="card-text">₹{props.product.price}</p>
            <a href="/" class="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
