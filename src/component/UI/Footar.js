import React from "react";

const Footar = () => {
  return (
    <div className="mt-3 d-flex text-white p-2" style={{ background: "#00061a" }}>
      <div className=" w-50  p-5  border-end">
        <div className="row">
          <div className="col px-3" style={{ cursor: "pointer" }}>
            <div disabled className="col-sm h5">
              ABOUT
            </div>
            <div className="col-sm">About Us</div>
            <div className="col-sm">Careers</div>
            <div className="col-sm">Contact Us</div>
            <div className="col-sm"></div>
          </div>
          <div className="col px-3" style={{ cursor: "pointer" }}>
            <div disabled className="col-sm h5">
              HELP
            </div>
            <div className="col-sm">Payment</div>
            <div className="col-sm">Shipping</div>
            <div className="col-sm">Cancellation</div>
            <div className="col-sm">FAQ</div>
          </div>
          <div className="col px-3" style={{ cursor: "pointer" }}>
            <div disabled className="col-sm h5">
              POLICY
            </div>
            <div className="col-sm">Terms of use</div>
            <div className="col-sm">Return Policy</div>
            <div className="col-sm">Security</div>
            <div className="col-sm">Privacy</div>
          </div>
          <div className="col px-3" style={{ cursor: "pointer" }}>
            <div disabled className="col-sm h5">
              SOCIAL
            </div>
            <div className="col-sm">Youtube</div>
            <div className="col-sm">Facebook</div>
            <div className="col-sm">Instagram</div>
            <div className="col-sm">Twitter</div>
          </div>
        </div>
      </div>
      <div className="w-50 p-5">
        <div className="col">
          <div className="row-sm h5">Registerd office adderess:-</div>
          <div className="row-sm">
            Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
            Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103,
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footar;
