import React, { useContext, useEffect } from "react";
import EcomContext from "../../../../context/EcomContext";
import { Link } from "react-router-dom";
import { MouseOver, MouseOut } from "../../../helpers/hover";

const BestSeller = () => {
  const context = useContext(EcomContext);
  const { BestProduct, BestProducts } = context;

  useEffect(() => {
    BestProduct();
  }, [BestProduct]);

  return (
    <>
      <h1 className="container text-center my-4">Our Best Products</h1>
      <div
        id="carouselExample"
        class="carousel slide border border-white bg-white container"
      >
        <div class="carousel-inner" style={{ maxHeight: "200px" }}>
          <div class="carousel-item  active">
            <div className="container d-flex justify-content-center">
              {BestProducts.slice(0, 4).map((e) => {
                return (
                  <div className="mx-3 my-4 border">
                    <img src={e.photo} alt="" style={{ maxHeight: "120px" }} />
                    <div className="text-center">
                      <Link
                        to={`/products/Category/${e._id}`}
                        onMouseOver={MouseOver}
                        onMouseOut={MouseOut}
                        className="text-decoration-none link-dark"
                      >
                        <small>{e.Product_Name.substring(0, 15) + "..."}</small>
                      </Link>
                      <br />
                      <small>₹{e.price}</small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div class="carousel-item">
            <div className="container d-flex justify-content-center">
              {BestProducts.slice(4, 8).map((e) => {
                return (
                  <div className="my-4 mx-3 border">
                    <img src={e.photo} alt="" style={{ maxHeight: "120px" }} />
                    <div className="text-center">
                      <Link
                        to={`/products/Category/${e._id}`}
                        onMouseOver={MouseOver}
                        onMouseOut={MouseOut}
                        className="text-decoration-none link-dark"
                      >
                        <small>{e.Product_Name.substring(0, 15) + "..."}</small>
                      </Link>
                      <br />
                      <small>₹{e.price}</small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div class="carousel-item">
            <div className="container d-flex justify-content-center">
              {BestProducts.slice(4, 8).map((e) => {
                return (
                  <div className="my-4 mx-3 border">
                    <img src={e.photo} alt="" style={{ maxHeight: "120px" }} />
                    <div className="text-center">
                      <Link
                        to={`/products/Category/${e._id}`}
                        onMouseOver={MouseOver}
                        onMouseOut={MouseOut}
                        className="text-decoration-none link-dark"
                      >
                        <small>{e.Product_Name.substring(0, 15) + "..."}</small>
                      </Link>
                      <br />
                      <small>₹{e.price}</small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev bg-dark"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next bg-dark"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default BestSeller;
