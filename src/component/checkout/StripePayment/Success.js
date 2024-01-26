import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <>
      <h2>Thanks for your order!</h2>
      <h4>Your payment is successful.</h4>
      <p>
        We appreciate your business! If you have any questions, please email us
        at
        <Link to="/">Return To home</Link>
      </p>
      <div></div>
    </>
  );
}

export default Success;
