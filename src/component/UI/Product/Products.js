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
          <div className="col-md-9">
            <div className="row row-cols-sm-2 row-cols-md-4 g-4">
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
            <div className="container d-flex justify-content-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
