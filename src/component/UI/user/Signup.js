import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EcomContext from "../../../context/EcomContext";
import Alert from "../Alert";

const Signup = () => {
  const context = useContext(EcomContext);
  const navigate = useNavigate();
  const { Signup } = context;

  const [User, setUser] = useState({
    Username: "",
    Email: "",
    Password: "",
    Photo: null,
    Mobile: "",
    Address: "",
  });
  //State to handle Alert
  const [AlertTriggered, setAlertTriggered] = useState("");

  const onChange = (e) => {
    const value =
      e.target.name === "Photo" ? e.target.files[0] : e.target.value;
    setUser({ ...User, [e.target.name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("username", User.Username);
    formData.append("email", User.Email);
    formData.append("password", User.Password);
    formData.append("photo", User.Photo);
    formData.append("mobile", User.Mobile);
    formData.append("address", User.Address);
    const json = await Signup(formData);
    setUser({
      Username: "",
      Email: "",
      Password: "",
      Photo: null,
      Mobile: "",
      Address: "",
    });

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
      <div>
        <div className="container d-flex justify-content-center">
          <form onSubmit={onSubmit}>
            <div className="h3 d-flex mt-5 pb-2 justify-content-center">
              Sign Up
            </div>
            <div className="form-outline">
              <input
                type="text"
                name="Username"
                value={User.Username}
                onChange={onChange}
                id="form2Example2"
                className="form-control"
                required
              />
              <label className="form-label" htmlFor="form2Example1">
                Username
              </label>
            </div>
            <div className="form-outline ">
              <input
                type="email"
                name="Email"
                value={User.Email}
                onChange={onChange}
                className="form-control"
                required
              />
              <label className="form-label" htmlFor="form2Example1">
                Email address
              </label>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Mobile No.
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Your Mobile number here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="Mobile"
                value={User.Mobile}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-outline">
              <input
                type="text"
                name="Address"
                value={User.Address}
                onChange={onChange}
                id="form2Example1"
                className="form-control"
                required
              />
              <label className="form-label" htmlFor="form2Example1">
                Address
              </label>
            </div>
            <div className="">
              {/* <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter your photo link"
                name="Photo"
                onChange={onChange}
                value={User.Photo}
                required
              /> */}
              <input
                type="file"
                name="Photo"
                className="form-control"
                id="inputGroupFile01"
                onChange={onChange}
                accept="image/*"
              />
              <label htmlFor="formGroupExampleInput" className="form-label">
                Please enter photo link
              </label>
            </div>

            <div className="form-outline ">
              <input
                type="password"
                name="Password"
                value={User.Password}
                onChange={onChange}
                className="form-control"
                required
              />
              <label className="form-label" htmlFor="form2Example2">
                Password
              </label>
            </div>
            <div className="d-flex justify-content-center">
              <button type="Submit" className="btn btn-primary btn-block mb-4">
                Sign Up
              </button>
            </div>
            <div className="text-center">
              <p>
                Already a member? <Link to="/signin">Signin</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
