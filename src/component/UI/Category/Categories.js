import React from "react";
import Card from "../Card";

const Categories = (props) => {
  return (
    <>
      <div className="h1 my-3 text-center">{props.header}</div>
      <div className="container">
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
          {props.data.map((element) => {
            return (
              <div className="col" key={element._id}>
                <Card
                  Name={element.name}
                  Photo={element.photo}
                  id={element._id}
                  ButtonName={"View Products"}
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
