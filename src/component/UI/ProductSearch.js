import React, { useContext, useEffect } from "react";
import EcomContext from "../../context/EcomContext";
import { useParams } from "react-router-dom";
import Card from "./Card";
import Navbar from "./Navbar";

const ProductSearch = () => {
  const context = useContext(EcomContext);
  const { SearchProduct, SearchData } = context;
  const { key } = useParams();

  useEffect(() => {
    SearchProduct(key);
    // eslint-disable-next-line
  }, [key]);
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
          {SearchData.map((element, index) => {
            console.log(index);
            return (
              <div className="col" key={element._id}>
                <Card
                  Name={element.Product_Name}
                  Photo={element.photo}
                  productID={element._id}
                  ButtonName={"Product Details"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductSearch;
