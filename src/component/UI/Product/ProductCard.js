import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <>
      <div
        className="card border-0 p-2 bg-transparent"
        style={{ width: "14rem" }}
      >
        <img
          src={props.product.photo}
          className="card-img-top px-3"
          alt="..."
          style={{ height: "10rem" }}
        />
        <div className="card-body">
          <Link
            to={`/products/Category/${props.product._id}`}
            className={`card-title text-dark text-capitalize`}
            style={{ textDecoration: "none" }}
          >
            <div className="fw-bold">{props.product.Brand_Name}</div>
            {props.product.Product_Name}
            <div className="fw-bold">₹{props.product.price}</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
