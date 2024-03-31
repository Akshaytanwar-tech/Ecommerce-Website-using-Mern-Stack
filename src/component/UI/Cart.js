import React, { useContext } from "react";
import Navbar from "./Navbar";
import EcomContext from "../../context/EcomContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Order from "../checkout/Order";
const Cart = () => {
  const navigate = useNavigate();
  const context = useContext(EcomContext);
  const { FetchCartitem, Cart, RemoveItemCart, HandleQty } = context;
  let totalprice = 0;

  useEffect(() => {
    FetchCartitem();
    // eslint-disable-next-line
  }, [HandleQty, Cart]);

  const handlePlaceOrder = (price) => {
    <Order totalprice={price} />;
    navigate(`/Order/CartitemBuy`);
  };

  const HandleIncreaseQty = (id, quantity) => {
    //to handle increase quantity
    HandleQty(id, quantity);
  };
  const HandleDecreaseQty = (id, quantity) => {
    //to handle decrease quantity
    if (quantity > 0) {
      HandleQty(id, quantity);
    } else {
      return;
    }
  };
  return (
    <>
      <Navbar />
      <div className="container px-4">
        <div className="row gx-5">
          <div className="col">
            <ul className="list-group list-group-flush my-3 ">
              {Cart.map((e) => {
                totalprice = totalprice + e.price;
                return (
                  <li className="list-group-item" key={e._id}>
                    <div className=" card my-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src={e.photo}
                            className="img-fluid rounded-start p-3"
                            alt="..."
                            style={{ maxHeight: "15rem" }}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <div className="card-title">
                              <b>{e.Brand_Name}</b>
                            </div>
                            <div className="card-title">
                              {e.Product_Name_Details}
                            </div>
                            <h4>₹{e.price}</h4>
                            <div>
                              <span>Qty:</span>

                              <button
                                className="border border-dark mx-1 px-2 py-1 bg-light rounded-circle fw-bold"
                                onClick={() => {
                                  HandleDecreaseQty(e.product, e.Quantity - 1);
                                }}
                                style={{ cursor: "pointer" }}
                              >
                                -
                              </button>
                              <span className="border px-2 py-1">
                                {e.Quantity}
                              </span>
                              <button
                                className="border border-dark mx-1 px-2 py-1 rounded-circle fw-bold"
                                onClick={() => {
                                  HandleIncreaseQty(e.product, e.Quantity + 1);
                                }}
                                style={{ cursor: "pointer" }}
                              >
                                +
                              </button>
                            </div>
                            <div className="container py-2">
                              <button
                                type="button"
                                onClick={() => {
                                  RemoveItemCart(e._id);
                                }}
                                className="btn btn-primary"
                              >
                                Remove item
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* checkout page */}
          <div className="col my-3 position-static">
            <div>
              <div className="container p-2 border bg-light ">
                <p className="text-center h3">Products Details</p>
                <p className="container">Total Products : {Cart.length}</p>
                <p className="container">Total Amount : ₹{totalprice}</p>
                <div className="container d-flex justify-content-center py-2">
                  {/* <StripeCheckout
                    stripeKey="pk_test_51Mcs7PSIOxSRCSOkmYzOxH1bLmalJ0lK3XX5iM45USl5WpJjhyRDE36ollzX1NaNIky5RONIADKqzbujinnK4j3T00BVnYh1vp"
                    amount={totalprice * 100}
                    token={handleToken}
                    billingAddress
                    shippingAddress
                  /> */}
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={() => {
                      handlePlaceOrder(totalprice);
                    }}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
