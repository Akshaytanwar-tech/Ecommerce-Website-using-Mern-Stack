import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="card p-3 border border-warning border-5 bg-dark" style={{ Width: "12rem" }}>
        <img
          src={props.Photo}
          className="card-img-top"
          alt="..."
          style={{ height: "12rem" }}
        />
        <div className="card-body">
          <h5 className="card-title text-light text-center">{props.Name}</h5>
          <Link
            to={`/products/${
              props.ButtonName === "View Products" ? props.id : "Category"
            }/${props.ButtonName === "Product Details" ? props.productID : ""}`}
            className="btn btn-dark btn-sm border border-5 border-warning text-warning d-flex justify-content-center"
          >
            {props.ButtonName}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
