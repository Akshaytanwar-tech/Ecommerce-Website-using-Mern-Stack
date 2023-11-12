import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  return (
    <>
      <div
        className="card border-0 p-2 bg-transparent"
        style={{ width: "14rem" }}
      >
        <img
          src={props.Photo}
          className="card-img-top"
          alt="..."
          style={{ height: "10rem" }}
        />
        <div className="card-body text-center">
          <Link
            to={`/products/${props.For === "Category" ? props.id : "Category"}`}
            className={`card-title text-dark justify-content-center text-capitalize h5`}
            style={{ textDecoration: "none" }}
          >
            {props.Name}
          </Link>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
