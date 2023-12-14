import React, { useEffect, useContext } from "react";
import EcomContext from "../../../../context/EcomContext";

const BestSeller = (props) => {
  const Context = useContext(EcomContext);
  const { Product, FetchProductbyCategories } = Context;

  return (
    <>
      <h1 className="container text-center my-4">Our Best Products</h1>
      <div
        id="carouselExample"
        class="carousel slide border border-white bg-white container"
      >
        <div class="carousel-inner" style={{ height: "200px" }}>
          <div class="carousel-item  active">
            <div className="container d-flex justify-content-center">
              {props.Category.slice(0, 4).map((e) => {
                return (
                  <div className="mx-3 my-4 border">
                    <img
                      src={e.photo}
                      alt=""
                      style={{ height: "100px", width: "130px" }}
                    />
                    <div className="text-center">
                      <small>{e.name}</small>
                      <br />
                      <small>price</small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div class="carousel-item">
            <div className="container d-flex justify-content-center">
              {props.Category.slice(4, 8).map((e) => {
                return (
                  <div className="my-4 mx-3 border">
                    <img
                      src={e.photo}
                      alt=""
                      style={{ height: "100px", width: "130px" }}
                    />
                    <div className="text-center">
                      <small>{e.name}</small>
                      <br />
                      <small>price</small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div class="carousel-item">
            <div className="container d-flex justify-content-center">
              <div className="m-4 my-3 border">container-1</div>
              <div className="m-4 my-3 border">container-2</div>
              <div className="m-4 my-3 border">container-3</div>
              <div className="m-4 my-3 border">container-4</div>
              <div className="m-4 my-3 border">container-4</div>
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
