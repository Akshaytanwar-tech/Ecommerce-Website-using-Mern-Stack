import React from "react";
import CategoryCard from "./CategoryCard";
import config from "../../../config";

const Categories = (props) => {
  return (
    <>
      <div
        className="h1 my-5 text-center"
        style={{ fontFamily: config.fontFamily }}
      >
        {props.header}
      </div>

      <div className="container p-3">
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
          {props.data.map((element) => {
            return (
              <CategoryCard
                Name={element.name}
                Photo={element.photo}
                id={element._id}
                For={"Category"}
                key={element._id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;
