import React from "react";
import { Link } from "react-router-dom";

function Cancel() {
  return (
    <>
      <h4>Oops! Your payment has been cancelled.</h4>
      <p>
        We appreciate your business! If you have any questions, please email us
        at
        <a href="mailto:orders@example.com">orders@example.com</a>.
      </p>
      <div>
        <Link to="/"> Return to home</Link>
      </div>
    </>
  );
}

export default Cancel;
