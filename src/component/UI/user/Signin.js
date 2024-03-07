import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import EcomContext from "../../../context/EcomContext";
import Alert from "../Alert";

const Signin = () => {
  const context = useContext(EcomContext);
  const navigate = useNavigate();
  const { SignIn } = context;
  const [Credentials, setCredentials] = useState({ email: "", password: "" });
  const [AlertTriggered, setAlertTriggered] = useState("");

  const HandleonChange = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value });
  };

  const HandleonSubmit = async (e) => {
    e.preventDefault();
    const json = await SignIn(Credentials.email, Credentials.password);
    setCredentials({ email: "", password: "" });

    if (json.success === true) {
      localStorage.setItem("token", json.token);
      navigate("/");
    } else {
      setAlertTriggered(json.error);
    }
  };

  return (
    <>
      {AlertTriggered && <Alert message={AlertTriggered} />}
      <div className="container d-flex justify-content-center">
        <form className="needs-validation" onSubmit={HandleonSubmit} novalidate>
          <div className="h3 d-flex mt-5 pb-2 justify-content-center">
            Login
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="validationCustom01">
              Email address
            </label>
            <input
              type="email"
              id="validationCustom01"
              name="email"
              value={Credentials.email}
              onChange={HandleonChange}
              className="form-control"
              required
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={Credentials.password}
              onChange={HandleonChange}
              id="form2Example2"
              className="form-control"
              required
            />
            <Link
              to="VerifydetailsFP"
              className="form-label h6 fw-light"
              htmlFor="form2Example2"
            >
              Forgot password?
            </Link>
          </div>
          <button type="Submit" className="btn btn-primary btn-block mb-4">
            Sign in
          </button>

          <div className="text-center">
            <p>
              Not a member? <Link to="/signup">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
