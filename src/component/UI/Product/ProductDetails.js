import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EcomContext from "../../../context/EcomContext";
import Navbar from "../Navbar";
import ProductDescription from "./ProductDescription";

const ProductDetails = () => {
  const Context = useContext(EcomContext);
  const navigate = useNavigate();
  const { Productdetails, FetchProductDetails, AddItemCart } = Context;
  const { id } = useParams();

  useEffect(() => {
    FetchProductDetails(id);
    // eslint-disable-next-line
  }, [id]);
  const HandleAdditemCart = () => {
    AddItemCart(id);
    navigate("/cart");
  };

  const handleBuyProduct = () => {
    navigate(`/Order/${id}`);
  };
  return (
    <>
      <Navbar title="Dlipkart" />
      <div className="container mt-3 card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={Productdetails.photo}
              className="img-fluid rounded-start"
              alt="This is the of the product details"
              style={{ maxHeight: "20rem" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-title">{Productdetails.Brand_Name}</p>
              <h5 className="card-text">
                {Productdetails.Product_Name_Details}
              </h5>
              <p className="h2">₹{Productdetails.price}</p>
              <button
                type="button"
                className="btn btn-primary px-3 mx-2 btn-lg"
                onClick={handleBuyProduct}
              >
                Buy Now
              </button>
              <button
                type="button"
                onClick={HandleAdditemCart}
                className="btn btn-warning px-3 mx-2 btn-lg"
              >
                Add to Cart
              </button>

              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <ProductDescription product={Productdetails} />
    </>
  );
};

export default ProductDetails;
