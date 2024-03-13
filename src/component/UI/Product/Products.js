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

      <div class="container">
        <div class="row mt-3">
          <div class="col-md-3">
            <PriceFilter />
          </div>
          <div class="col-md-9 product-grid">
            <div className="row">
              {Product.map((element, index) => {
                return (
                  <div class="col-md-4" key={element._id}>
                    <ProductCard product={element} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
