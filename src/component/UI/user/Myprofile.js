import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import EcomContext from "../../../context/EcomContext";

const Myprofile = () => {
  const context = useContext(EcomContext);
  const { FetchUserData, UserData, changeProfile } = context;
  const navigate = useNavigate();
  const [isDisabled, setisDisabled] = useState(false);
  const [Crediantial, setCrediantial] = useState({
    username: "",
    email: "",
    mobile: "",
    address: "",
  });

  // State to handle the on value of input.
  useEffect(() => {
    FetchUserData();
    // eslint-disable-next-line
  }, [UserData]);

  const HandleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  // Navigate to change password page
  const HandleChangePassword = () => {
    navigate("changepassword");
  };
  //To handle Onchage of edit input
  const HandleInputChange = (e) => {
    setCrediantial({ ...Crediantial, [e.target.name]: e.target.value });
  };
  // Handle the Edit button
  const HandleOnEdit = () => {
    if (!isDisabled) {
      setisDisabled(true);
    } else {
      changeProfile(
        Crediantial.username,
        Crediantial.email,
        Crediantial.mobile,
        Crediantial.address
      );
      setisDisabled(false);
      setCrediantial({
        username: "",
        email: "",
        mobile: "",
        address: "",
      });
    }
  };

  return (
    <>
      <Navbar />
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav
                aria-label="breadcrumb"
                className="bg-light rounded-3 p-3 mb-4"
              >
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    User Profile
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src={UserData.photo ? UserData.photo : ""}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  <div
                    className="pt-2 text-primary"
                    style={{ cursor: "pointer" }}
                  >
                    <u>Change Picture?</u>
                  </div>
                  <h5 className="my-3">{UserData.username}</h5>
                  <p className="text-muted mb-4">{UserData.address}</p>
                  <div className="d-flex justify-content-between px-4 mb-2">
                    <button
                      onClick={HandleLogout}
                      type="button"
                      className="btn btn-primary"
                    >
                      Log Out
                    </button>
                    <button
                      onClick={HandleChangePassword}
                      type="button"
                      className="btn btn-primary"
                    >
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name:</p>
                    </div>
                    <div className="col-sm-9 d-flex">
                      <div className="col-sm-6">{UserData.username}</div>
                      {isDisabled && (
                        <input
                          class="form-control"
                          type="text"
                          name="username"
                          value={Crediantial.username}
                          placeholder="Username"
                          aria-label="default input example"
                          onChange={HandleInputChange}
                        />
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email:</p>
                    </div>
                    <div className="col-sm-9 d-flex">
                      <div className=" col-sm-6">{UserData.email}</div>
                      {isDisabled && (
                        <input
                          class="form-control"
                          type="text"
                          name="email"
                          placeholder="Email"
                          value={Crediantial.email}
                          aria-label="default input example"
                          onChange={HandleInputChange}
                        />
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile:</p>
                    </div>
                    <div className="col-sm-9 d-flex">
                      <div className="col-sm-6">{UserData.mobile}</div>
                      {isDisabled && (
                        <input
                          class="form-control"
                          type="text"
                          name="mobile"
                          placeholder="Mobile"
                          value={Crediantial.mobile}
                          aria-label="default input example"
                          onChange={HandleInputChange}
                        />
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address:</p>
                    </div>
                    <div className="col-sm-9 d-flex">
                      <div className="col-sm-6">{UserData.address}</div>
                      {isDisabled && (
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          name="address"
                          rows="2"
                          value={Crediantial.address}
                          onChange={HandleInputChange}
                        ></textarea>
                      )}
                    </div>
                  </div>
                  <div className="container row mt-5">
                    <button
                      type="button"
                      class="btn btn-outline-primary"
                      onClick={HandleOnEdit}
                    >
                      {isDisabled ? "Save Changes" : "Edit Profile"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Myprofile;
