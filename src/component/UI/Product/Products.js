import React, { useEffect, useContext } from "react";
import EcomContext from "../../../context/EcomContext";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Navbar from "../Navbar";
import PriceFilter from "./PriceFilter";

const Products = () => {
  const Context = useContext(EcomContext);
  const { Product, FetchProductbyCategories } = Context;

  const { id, key } = useParams();

  useEffect(() => {
    FetchProductbyCategories(id);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row mt-3">
          <div className="col-md-3">
            <PriceFilter CategoryId={id} />
          </div>
          <div className="col-9">
            <div className="row row-cols-2 row-cols-lg-4 g-1 g-lg-3">
              {!key
                ? Product.map((element) => {
                    return (
                      <div className="col" key={element._id}>
                        <ProductCard product={element} />
                      </div>
                    );
                  })
                : Product.filter((e) => {
                    return e.price < key;
                  }).map((element) => {
                    return (
                      <div className="col" key={element._id}>
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
