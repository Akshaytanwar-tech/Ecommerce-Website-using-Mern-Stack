import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = (props) => {
  return (
    <>
      <div className="h1 my-4 text-center" style={{ fontFamily: "Cursive" }}>
        {props.header}
      </div>
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
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
