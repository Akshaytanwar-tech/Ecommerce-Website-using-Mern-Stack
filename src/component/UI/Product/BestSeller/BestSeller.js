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
        className="carousel slide border border-white bg-white container"
      >
        <div className="carousel-inner" style={{ maxHeight: "200px" }}>
          <div className="carousel-item  active">
            <div className="container d-flex justify-content-center">
              {BestProducts.slice(0, 4).map((e) => {
                return (
                  <div className="mx-3 my-4 border" key={e._id}>
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
          <div className="carousel-item">
            <div className="container d-flex justify-content-center">
              {BestProducts.slice(4, 8).map((e) => {
                return (
                  <div className="my-4 mx-3 border" key={e._id}>
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
          <div className="carousel-item">
            <div className="container d-flex justify-content-center">
              {BestProducts.slice(4, 8).map((e) => {
                return (
                  <div className="my-4 mx-3 border" key={e._id}>
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
          className="carousel-control-prev bg-dark"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next bg-dark"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default BestSeller;
