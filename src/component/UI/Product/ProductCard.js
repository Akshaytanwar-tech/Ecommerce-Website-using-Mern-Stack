import React from "react";
import { Link } from "react-router-dom";
import { MouseOver, MouseOut } from "../../helpers/hover";

const ProductCard = (props) => {
  return (
    <>
      <div
        className="card border-0 p-4 bg-transparent"
        style={{ width: "14rem" }}
      >
        <img
          src={props.product.photo}
          className="card-img-top px-2"
          alt="..."
          style={{ height: "10rem" }}
        />
        <div className="card-body text-center">
          {/* <div className="fw-bold">{props.product.Brand_Name}</div> */}
          <Link
            to={`/products/Category/${props.product._id}`}
            className={`card-title text-capitalize text-decoration-none link-dark`}
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
          >
            <small>{props.product.Product_Name}</small>
          </Link>
          <div className="fw-bold">₹{props.product.price}</div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
