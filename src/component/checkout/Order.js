import React, { useContext, useState } from "react";
import EcomContext from "../../context/EcomContext";
import { useNavigate, useParams } from "react-router-dom";

const Order = () => {
  const Context = useContext(EcomContext);
  const navigate = useNavigate();
  let { id } = useParams();

  const [Order, setOrder] = useState({
    name: "",
    address: "",
    PINcode: "",
    Mobile: "",
    AlternateMobile: "",
  });
  const {
    HandleCheckout,
    FetchCartitem,
    Cart,
    FetchProductDetails,
    Productdetails,
    PaymentHandler,
    RemoveAllItems,
  } = Context;

  // Handller To order from the cart
  const handleCheckout = (e) => {
    e.preventDefault();
    const OrderType = e.target.payment.value;
    FetchCartitem();
    if (OrderType === "Cash") {
      Cart.map((e) => {
        return HandleCheckout(
          Order.name,
          Order.address,
          Order.PINcode,
          Order.Mobile,
          Order.AlternateMobile,
          e.product,
          e.Product_Name_Details,
          e.photo,
          e.price,
          "Cash on delivery"
        );
      });
      RemoveAllItems();
      navigate("/myorders");
    } else {
      // Handle bulk payment for the online payment mode.

      let price = Cart.map((e) => {
        return e.price;
      }).reduce((total, current) => {
        return total + current;
      });
      const payment = PaymentHandler("Bulk Order", price, 1);
      if (payment) {
        Cart.map((e) => {
          return HandleCheckout(
            Order.name,
            Order.address,
            Order.PINcode,
            Order.Mobile,
            Order.AlternateMobile,
            e.product,
            e.Product_Name_Details,
            e.photo,
            e.price,
            "Online"
          );
        });
        RemoveAllItems();
      }
    }

    setOrder({
      name: "",
      address: "",
      PINcode: "",
      Mobile: "",
      AlternateMobile: "",
    });
  };

  // Handller To order for a single product
  const HandleOnlyProductCheckout = (e) => {
    let quantity = 1;
    e.preventDefault();
    const OrderType = e.target.payment.value;
    FetchProductDetails(id);
    // If the order type is cash
    if (OrderType === "Cash") {
      // Sending details to handler for cash on delivery.
      HandleCheckout(
        Order.name,
        Order.address,
        Order.PINcode,
        Order.Mobile,
        Order.AlternateMobile,
        Productdetails._id,
        Productdetails.Product_Name,
        Productdetails.photo,
        Productdetails.price,
        "Cash on delivery"
      );
      navigate("/myorders");
    } else {
      // Sending details to Payment Handeler for Payment from card.
      const payment = PaymentHandler(
        Productdetails.Product_Name,
        Productdetails.price,
        quantity
      );
      if (payment) {
        HandleCheckout(
          Order.name,
          Order.address,
          Order.PINcode,
          Order.Mobile,
          Order.AlternateMobile,
          Productdetails._id,
          Productdetails.Product_Name,
          Productdetails.photo,
          Productdetails.price,
          "Online"
        );
      }
    }
    setOrder({
      name: "",
      address: "",
      PINcode: "",
      Mobile: "",
      AlternateMobile: "",
    });
  };

  // Handle onchange for changes in input fields.

  const handleOnchange = (e) => {
    setOrder({ ...Order, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container my-3 p-3 border">
        <div className="h3 text-center mb-4">Order details</div>
        <div className="my-2">
          <form
            onSubmit={
              id === "CartitemBuy" ? handleCheckout : HandleOnlyProductCheckout
            }
          >
            <div className="mb-2 form-floating">
              <input
                type="text"
                name="name"
                className="form-control"
                id="floatingInputValue"
                placeholder="Enter your name"
                value={Order.name}
                onChange={handleOnchange}
                required
              />
              <label htmlFor="floatingInputValue">Your Name</label>
            </div>

            <div className="form-floating mb-2">
              <textarea
                className="form-control"
                placeholder="Enter Your address here"
                id="floatingTextarea"
                name="address"
                value={Order.address}
                onChange={handleOnchange}
                required
              ></textarea>
              <label htmlFor="floatingTextarea">Your Address</label>
            </div>

            <div className="form-floating mb-2">
              <input
                type="number"
                className="form-control"
                id="floatingInputValue"
                placeholder="PIN code"
                name="PINcode"
                value={Order.PINcode}
                onChange={handleOnchange}
                required
              />
              <label htmlFor="floatingInputValue">Your PIN Code</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="number"
                className="form-control"
                id="floatingInputValue"
                placeholder="Mobile number"
                name="Mobile"
                value={Order.Mobile}
                onChange={handleOnchange}
                required
              />
              <label htmlFor="floatingInputValue">Your Mobile Number</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="number"
                className="form-control"
                id="floatingInputValue"
                placeholder="Alternate Mobile number"
                name="AlternateMobile"
                value={Order.AlternateMobile}
                onChange={handleOnchange}
                required
              />
              <label htmlFor="floatingInputValue">Alternate Mobile No.</label>
            </div>
            <div className="container d-flex my-3">
              <big className="mx-2">Payment Options:</big>

              <div className="form-check mx-2 py-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  value="Cash"
                  id="flexRadioDefault1"
                  required
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Cash on Delievary
                </label>
              </div>
              <div className="form-check mx-2 py-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  value="Card"
                  id="flexRadioDefault1"
                  required
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Pay with card
                </label>
              </div>
            </div>
            <div className=" d-flex justify-content-center">
              <button type="submit" className="btn btn-outline-primary">
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Order;
