import React, { useEffect, useContext } from "react";
import EcomContext from "../../../context/EcomContext";
import { useParams } from "react-router-dom";
import Card from "../Card";
import Navbar from "../Navbar";

const Products = () => {
  const Context = useContext(EcomContext);
  const { Product, FetchProductbyCategories } = Context;

  const { id } = useParams();

  useEffect(() => {
    FetchProductbyCategories(id);
    // eslint-disable-next-line
  },[Product]);

  return (
    <>
    <Navbar title="Dlipkart" />
      <div className="container">
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 mt-3">
          {Product.map((element, index) => {
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

export default Products;
