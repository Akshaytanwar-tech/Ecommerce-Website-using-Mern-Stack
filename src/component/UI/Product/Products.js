import React, { useEffect, useContext } from "react";
import EcomContext from "../../../context/EcomContext";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Navbar from "../Navbar";
import PriceFilter from "./PriceFilter";

const Products = () => {
  const Context = useContext(EcomContext);
  const { Product, FetchProductbyCategories } = Context;

  const { id } = useParams();

  useEffect(() => {
    FetchProductbyCategories(id);
    // eslint-disable-next-line
  }, [Product]);

  return (
    <>
      <Navbar title="Dlipkart" />
      <div className="d-flex">
        <div className="py-3" style={{ minWidth: "20%", maxHeight: "50vh" }}>
          <div className=" text-center h3">Filter By Price</div>
          <PriceFilter />
        </div>
        <div
          className="container"
          style={{ height: "89vh", overflow: "scroll", overflowX: "hidden" }}
        >
          <div
            className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3"
            style={{ maxHeight: "100%" }}
          >
            {Product.map((element, index) => {
              return (
                <div className="col" key={element._id}>
                  <ProductCard product={element} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
