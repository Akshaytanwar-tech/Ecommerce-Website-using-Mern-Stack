import React from "react";
import { Link } from "react-router-dom";
import {
  MouseOver,
  MouseOut,
  MouseOverImage,
  MouseOutImage,
} from "../../helpers/hover";

const ProductCard = (props) => {
  return (
    <>
      <div
        className="card border-0 p-4 bg-transparent"
        style={{ width: "14rem" }}
      >
        <Link
          to={`/products/Category/${props.product._id}`}
          className={`card-title text-capitalize text-decoration-none link-dark`}
          onMouseOver={MouseOver}
          onMouseOut={MouseOut}
        >
          <img
            src={props.product.photo}
            className="card-img-top px-2"
            alt="..."
            style={{ height: "10rem" }}
            onMouseOver={MouseOverImage}
            onMouseOut={MouseOutImage}
          />
          <div className="card-body text-center">
            {/* <div className="fw-bold">{props.product.Brand_Name}</div> */}
            <small>{props.product.Product_Name}</small>
            <div className="fw-bold">₹{props.product.price}</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
