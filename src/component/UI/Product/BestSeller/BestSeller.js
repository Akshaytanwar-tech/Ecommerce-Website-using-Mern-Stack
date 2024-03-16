import React, { useContext, useEffect } from "react";
import EcomContext from "../../../../context/EcomContext";
import { Link } from "react-router-dom";

const BestSeller = () => {
  const context = useContext(EcomContext);
  const { BestProduct, BestProducts } = context;

  useEffect(() => {
    BestProduct();
  }, [BestProduct]);

  return (
    <>
      <div class="container">
        <h2 class="text-center mb-4 pt-5">Trending Products</h2>

        <div
          id="productCarousel"
          class="carousel slide d-none d-md-block"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item carousel-item-trending active">
              <div class="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 py-3">
                {BestProducts.slice(0, 5).map((e) => {
                  return (
                    <div class="col">
                      <div class="product-card product-card-trending-product">
                        <Link
                          to={`/products/Category/${e._id}`}
                          className="text-decoration-none link-dark"
                        >
                          <img
                            src={e.photo}
                            class="img-fluid"
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

            <div class="carousel-item carousel-item-trending">
              <div class="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 py-3">
                {BestProducts.slice(5, 10).map((e) => {
                  return (
                    <div class="col">
                      <div class="product-card product-card-trending-product">
                        <Link
                          to={`/products/Category/${e._id}`}
                          className="text-decoration-none link-dark"
                        >
                          <img
                            src={e.photo}
                            class="img-fluid"
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
            class="carousel-control-prev carousel-control-prev-trending"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon carousel-control-prev-icon-trending"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next carousel-control-next-trending"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon carousel-control-next-icon-trending"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div class="trending-product-card-grid d-md-none">
          <div class="background-trending-mob">
            <div class="container">
              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-4">
                {BestProducts.map((e) => {
                  return (
                    <div class="col-6 col-md-6">
                      <div class="product-card-trending-mob">
                        <Link
                          to={`/products/Category/${e._id}`}
                          className="text-decoration-none link-dark"
                        >
                          <img
                            src={e.photo}
                            class="card-img-top"
                            alt="Product"
                            style={{ maxHeight: "120px" }}
                          />
                          <div class="card-body">
                            <h5 class="card-title"> {e.Product_Name.substring(0, 14) + "..."}</h5>
                          </div>
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
