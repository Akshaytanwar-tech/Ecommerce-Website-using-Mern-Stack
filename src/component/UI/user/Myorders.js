import React, { useContext, useEffect } from "react";
import Navbar from "../Navbar";
import EcomContext from "../../../context/EcomContext";

const Myorders = () => {
  const context = useContext(EcomContext);
  const { Myorders, myOrders, CancelOrder } = context;

  useEffect(() => {
    Myorders();
    // eslint-disable-next-line
  }, []);

  // Cancel the order handle api
  const HandelCancelorder = (id) => {
    CancelOrder(id);
  };
  return (
    <>
      <Navbar />
      <h2 className="container mt-3 text-center">My orders</h2>;
      {myOrders.map((e, i) => {
        return (
          <div className="container my-3" key={i}>
            <div class="card">
              <div class="card-header">
                <strong>Product name:</strong> {e.productName}
              </div>
              <div class="row g-0" style={{ maxWidth: "600px" }}>
                <div class="col-md-4">
                  <img
                    src={e.productPhoto}
                    class="img-fluid rounded-start p-2"
                    alt="...THis is the  for the product"
                    style={{ maxHeight: "200px", maxWidth: "200px" }}
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h6 class="card-title">Address</h6>
                    <div class="card-text">{e.name}</div>
                    <div class="card-text">{e.address}</div>
                    <div class="card-text">
                      <strong>Price:</strong> ₹{e.productPrice}
                    </div>
                    <p class="card-text">
                      <small class="text-muted">Delieverd in ...........</small>
                    </p>
                  </div>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between">
                <div>
                  <strong>Payment Mode:</strong> {e.PaymentMode}
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    onClick={() => {
                      HandelCancelorder(e._id);
                    }}
                  >
                    Cancel Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Myorders;
