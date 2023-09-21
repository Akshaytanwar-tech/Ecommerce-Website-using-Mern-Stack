import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import EcomContext from "../../../context/EcomContext";
import Alert from "../Alert";

const VerifydetailsFP = () => {
  const context = useContext(EcomContext);
  const navigate = useNavigate();
  const { forgotpassword } = context;
  const [Credentials, setCredentials] = useState({
    username: "",
    email: "",
    mobile: "",
  });
  // State to manage alert
  const [AlertTriggered, setAlertTriggered] = useState("");
  const handleonchange = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await forgotpassword(
      Credentials.username,
      Credentials.email,
      parseInt(Credentials.mobile)
    );
    if (result.success === true) {
      navigate(`forgotpassword/${result.id}`);
    } else {
      setAlertTriggered(result.error);
    }
  };
  return (
    <>
      {AlertTriggered && <Alert message={AlertTriggered} />}
      <form onSubmit={onSubmit} className="container my-3">
        <header className="h1 text-center">Reset Your Password</header>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="username"
            value={Credentials.username}
            onChange={handleonchange}
            className="form-control"
            id="floatingInput"
            placeholder="ex = Akshay"
            required
          />
          <label for="floatingInput"> Username</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            name="email"
            value={Credentials.email}
            onChange={handleonchange}
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            name="mobile"
            value={Credentials.mobile}
            onChange={handleonchange}
            className="form-control"
            id="floatingInput"
            placeholder="ex-7017000000"
            required
          />
          <label for="floatingInput">Mobile Number</label>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default VerifydetailsFP;
