import React, { useState, useContext } from "react";
import EcomContext from "../../../context/EcomContext";
import { useNavigate } from "react-router-dom";

const Changepassword = () => {
  const context = useContext(EcomContext);
  const navigate = useNavigate();
  const [Credentials, setCredentials] = useState({
    OldPassword: "",
    NewPassword: "",
    ConfirmPassword: "",
  });
  const { changepassword } = context;
  const handleonchange = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await changepassword(
      Credentials.OldPassword,
      Credentials.NewPassword,
      Credentials.ConfirmPassword
    );
    console.log(result);
    if (result.success === true) {
      navigate("/myprofile");
    }
  };
  return (
    <>
      <form onSubmit={onSubmit} className="container my-3">
        <header className="h1 text-center">Set New Password</header>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="OldPassword"
            value={Credentials.OldPassword}
            onChange={handleonchange}
            className="form-control"
            id="floatingInput"
            placeholder="ex-7017000000"
            required
          />
          <label for="floatingInput">Old Password</label>
        </div>
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

export default Changepassword;
