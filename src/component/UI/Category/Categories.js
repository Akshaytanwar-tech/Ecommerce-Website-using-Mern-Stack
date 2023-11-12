import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = (props) => {
  return (
    <>
      <div className="h1 my-4 text-center" style={{ fontFamily: "Cursive" }}>
        {props.header}
      </div>
      <div className="container">
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
          {props.data.map((element) => {
            return (
              <div className="col" key={element._id}>
                <CategoryCard
                  Name={element.name}
                  Photo={element.photo}
                  id={element._id}
                  For={"Category"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;
