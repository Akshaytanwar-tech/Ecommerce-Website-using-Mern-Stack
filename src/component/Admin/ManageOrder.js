import React, { useContext, useEffect, useState } from "react";
import EcomContext from "../../context/EcomContext";

const ManageOrder = () => {
  let context = useContext(EcomContext);
  const { ManageOrders, ConfirmOrder, SetDeliverytime } = context;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    ManageOrders().then((json) => {
      setOrders(json);
    });
    // eslint-disable-next-line
  }, [ManageOrders, SetDeliverytime]);
  const [deliveryTime, setDelievery] = useState(null);

  const HandleConfirmOrder = (id) => {
    ConfirmOrder(id).then((res) => {
      console.log(res);
    });
  };
  const HandleRejectOrder = () => {
    //this is to handle the reject order.
  };
  console.log("running time");

  // this is to handle onchange of delievery
  const HandleChangeDelieverytime = (e) => {
    //
    setDelievery(e.target.value);
  };
  const HandleDelieveryTime = (id) => {
    //
    SetDeliverytime(id, deliveryTime);
  };
  return (
    <>
      {orders &&
        orders.map((e, i) => {
          return (
            <div className="card m-3" key={i} style={{ maxWidth: "1280px" }}>
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    src={e.productPhoto}
                    className="img-fluid rounded-start p-2"
                    style={{ maxHeight: "180px", maxWidth: "180px" }}
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="card-title">Product Name:-{e.name}</div>
                    <div className="card-text">Buyer Name:-{e.name}</div>
                    <div className="card-text">Buyer Address:-{e.address}</div>
                    <div className="card-text">Buyer Pin code:-{e.PINcode}</div>
                    <div className="card-text">Buyer Phone No:-{e.Mobile}</div>
                    <div className="card-text">
                      Mode of payment:-{e.PaymentMode}
                    </div>
                    <div className="card-text">
                      Product Qty:-{e.PaymentMode}
                    </div>
                    {!e.isConfirmed ? (
                      <div className="card-text d-flex my-2">
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            HandleConfirmOrder(e._id);
                          }}
                        >
                          Confirm Order
                        </button>
                        <button
                          className="mx-2 btn btn-primary"
                          onClick={HandleRejectOrder}
                        >
                          Reject Order
                        </button>
                      </div>
                    ) : !e.DelieveryTime ? (
                      <div className="d-flex justify-content-end">
                        <input
                          className="form-control form-control-sm mx-2"
                          type="number"
                          placeholder="time taken to deliever"
                          aria-label=".form-control-sm example"
                          style={{ maxWidth: "150px" }}
                          onChange={(e, i) => {
                            HandleChangeDelieverytime(e, i);
                          }}
                        />
                        <button
                          type="button"
                          className="btn btn-primary mx-2"
                          onClick={() => {
                            HandleDelieveryTime(e._id);
                          }}
                        >
                          send
                        </button>
                      </div>
                    ) : (
                      <div className="container d-flex justify-content-end">
                        <button type="button" class="btn btn-primary">
                          Click here if order Delivered
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ManageOrder;
