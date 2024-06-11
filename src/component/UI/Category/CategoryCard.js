import React from "react";
import { Link } from "react-router-dom";
import { MouseOver, MouseOut } from "../../helpers/hover";

const CategoryCard = (props) => {
  return (
    <>
      <div className="col">
        <div className="card card-container-category">
          <Link
            to={`/products/${props.For === "Category" ? props.id : "Category"}`}
            className={`text-capitalize text-decoration-none link-dark`}
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
          >
            <img src={props.Photo} className="card-img-top" alt="Category 1" loading="lazy"/>
            <div className="card-body" id="card-body">
              <h5 className="card-title text-center p-0" id="card-body">
                {props.Name}
              </h5>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
