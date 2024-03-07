import React, { useContext, useEffect } from "react";
import Navbar from "../Navbar";
import EcomContext from "../../../context/EcomContext";

const Myorders = () => {
  const context = useContext(EcomContext);
  const { Myorders, myOrders, CancelOrder } = context;

  useEffect(() => {
    Myorders();
    // eslint-disable-next-line
  }, [myOrders]);

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
            <div className="card">
              <div className="card-header">
                <strong>Product name:</strong> {e.productName}
              </div>
              <div className="row g-0" style={{ maxWidth: "600px" }}>
                <div className="col-md-4">
                  <img
                    src={e.productPhoto}
                    className="img-fluid rounded-start p-2"
                    alt="...THis is the  for the product"
                    style={{ maxHeight: "200px", maxWidth: "200px" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h6 className="card-title">Address</h6>
                    <div className="card-text">{e.name}</div>
                    <div className="card-text">{e.address}</div>
                    <div className="card-text">
                      <strong>Price:</strong> ₹{e.productPrice}
                    </div>
                    <p className="card-text">
                      <small className="text-muted">Delieverd in ...........</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <div>
                  <strong>Payment Mode:</strong> {e.PaymentMode}
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
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
