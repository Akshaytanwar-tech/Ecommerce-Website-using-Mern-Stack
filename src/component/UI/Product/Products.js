import React, { useEffect, useContext } from "react";
import EcomContext from "../../../context/EcomContext";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Navbar from "../Navbar";

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
        <div className="my-5" style={{ width: "800px" }}>
          <div className=" text-center h3">Filter By Price</div>
        </div>

        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 mt-3">
          {Product.map((element, index) => {
            return (
              <div className="col" key={element._id}>
                <ProductCard product={element} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
