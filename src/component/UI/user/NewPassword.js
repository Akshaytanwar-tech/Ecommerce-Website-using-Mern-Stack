import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EcomContext from "../../../context/EcomContext";
import Alert from "../Alert";

const NewPassword = () => {
  const context = useContext(EcomContext);
  const navigate = useNavigate();
  const { newPassword } = context;
  const { id } = useParams();
  const [Credentials, setCredentials] = useState({
    NewPassword: "",
    ConfirmPassword: "",
  });
  //State to handle Alert
  const [AlertTriggered, setAlertTriggered] = useState("");

  const handleonchange = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await newPassword(
      Credentials.NewPassword,
      Credentials.ConfirmPassword,
      id
    );
    if (result.success === true) {
      navigate("/signin");
    } else {
      setAlertTriggered(result.error);
    }
  };
  return (
    <>
      {AlertTriggered && <Alert message={AlertTriggered} />}
      <form onSubmit={onSubmit} className="container my-3">
        <header className="h1 text-center">Set New Password</header>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="NewPassword"
            value={Credentials.NewPassword}
            onChange={handleonchange}
            className="form-control"
            id="floatingInput"
            placeholder="ex-7017000000"
            required
          />
          <label for="floatingInput">New Password</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="ConfirmPassword"
            value={Credentials.ConfirmPassword}
            onChange={handleonchange}
            className="form-control"
            id="floatingInput"
            placeholder="ex-7017000000"
            required
          />
          <label for="floatingInput">Confirm Password</label>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Create New Password
          </button>
        </div>
      </form>
    </>
  );
};

export default NewPassword;
