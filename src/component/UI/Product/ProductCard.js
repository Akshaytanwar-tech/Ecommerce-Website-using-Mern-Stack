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
      <div className="card border-0 p-4 bg-transparent" style={{}}>
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
            style={{}}
            onMouseOver={MouseOverImage}
            onMouseOut={MouseOutImage}
          />
          <div className="card-body text-center">
            {/* <div className="fw-bold">{props.product.Brand_Name}</div> */}
            <p className="fw-bold text-left">₹{props.product.price}</p>
            <small>{props.product.Product_Name}</small>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
