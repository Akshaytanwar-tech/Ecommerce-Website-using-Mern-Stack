import React from "react";
import { Link } from "react-router-dom";
import {
  MouseOver,
  MouseOut,
  MouseOverImage,
  MouseOutImage,
} from "../../helpers/hover";

const CategoryCard = (props) => {
  return (
    <>
      <div
        className="card border-0 p-2 bg-transparent p-3"
        style={{ width: "14rem" }}
      >
        <div
          className="card-body text-center"
          style={{ height: "12rem", width: "14rem" }}
        >
          <Link
            to={`/products/${props.For === "Category" ? props.id : "Category"}`}
            className={`card-title justify-content-center text-capitalize text-decoration-none link-dark`}
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
          >
            <img
              src={props.Photo}
              className="card-img-top"
              alt="..."
              style={{ height: "10rem", width: "12rem", padding:"1px" }}
              onMouseOver={MouseOverImage}
              onMouseOut={MouseOutImage}
            />
            <div className="conatiner h5 p-2">{props.Name}</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
