import React, { useContext, useEffect } from "react";
import EcomContext from "../../../../context/EcomContext";
import { Link } from "react-router-dom";
import config from "../../../../config";

const BestSeller = () => {
  const context = useContext(EcomContext);
  const { BestProduct, BestProducts } = context;

  useEffect(() => {
    BestProduct();
  }, [BestProduct]);

  return (
    <>
      <div className="container">
        <h1
          className="text-center my-5"
          style={{ fontFamily: config.fontFamily }}
        >
          Trending Products
        </h1>

        <div
          id="productCarousel"
          className="carousel slide d-none d-md-block"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item carousel-item-trending active">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 py-3">
                {BestProducts.slice(0, 5).map((e, i) => {
                  return (
                    <div className="col" key={i}>
                      <div className="product-card product-card-trending-product">
                        <Link
                          to={`/products/Category/${e._id}`}
                          className="text-decoration-none link-dark"
                        >
                          <img
                            src={e.photo}
                            className="img-fluid"
                            alt="Product 1"
                            style={{ maxHeight: "120px" }}
                          />
                          <small>
                            {e.Product_Name.substring(0, 15) + "..."}
                          </small>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="carousel-item carousel-item-trending">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 py-3">
                {BestProducts.slice(5, 10).map((e, i) => {
                  return (
                    <div className="col" key={i}>
                      <div className="product-card product-card-trending-product">
                        <Link
                          to={`/products/Category/${e._id}`}
                          className="text-decoration-none link-dark"
                        >
                          <img
                            src={e.photo}
                            className="img-fluid"
                            alt="Product 1"
                            style={{ maxHeight: "120px" }}
                          />
                          <small>
                            {e.Product_Name.substring(0, 15) + "..."}
                          </small>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev carousel-control-prev-trending border"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="prev"
          >
            <i class="fa-solid fa-left-long"></i>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next carousel-control-next-trending border"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="next"
          >
            <i class="fa-solid fa-right-long"></i>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="trending-product-card-grid d-md-none">
          <div className="background-trending-mob">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-4">
                {BestProducts.map((e, i) => {
                  return (
                    <div className="col-6 col-md-6" key={i}>
                      <div className="product-card-trending-mob">
                        <Link
                          to={`/products/Category/${e._id}`}
                          className="text-decoration-none link-dark"
                        >
                          <img
                            src={e.photo}
                            className="card-img-top"
                            alt="Product"
                            style={{ maxHeight: "120px" }}
                          />

                          <small className="">
                            {" "}
                            {e.Product_Name.substring(0, 14) + "..."}
                          </small>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
