import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import EcomContext from "../../context/EcomContext";

const Navbar = () => {
  const Context = useContext(EcomContext);
  const navigate = useNavigate();
  const { Category, FetchCartitem, FetchUserData, Cart, UserData } = Context;
  const [SearchStr, SetSearchStr] = useState("");

  const HandleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      FetchCartitem();
      FetchUserData();
    }
    // eslint-disable-next-line
  }, []);

  const HandleSearch = (e) => {
    e.preventDefault();
    navigate(`/ProductSearch/${SearchStr.str}`);
    SetSearchStr("");
  };
  const HandleSearchChange = (e) => {
    const str = e.target.value;
    SetSearchStr({ ...SearchStr, str });
  };

  return (
    <>
      <div className="sticky-top">
        <div
          className="py-1 text-center"
          style={{ fontFamily: "cursive", background: "#f7f3e6" }}
        >
          10% off on your first purchase
        </div>
        <nav
          className="navbar navbar-expand-lg"
          style={{ background: "#00061a", fontFamily: "Serif" }}
        >
          <div className="container-fluid">
            <Link
              to="/"
              className="navbar-brand"
              style={{ color: "white", textDecoration: "underline" }}
            >
              <img
                src={
                  "https://www.jumblebee.co.uk/site/wp-content/uploads/2014/06/JB-FE-Shop_10.png"
                }
                alt=""
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              Shopkart
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon d-flex justify-content-center">
                <i className="fa-sharp fa-solid fa-bars te text-light"></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                    style={{ color: "white" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <div className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ color: "white" }}
                    >
                      Shop
                    </Link>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                      aria-expanded="true"
                    >
                      <div className="container">
                        <div className="row row-cols-auto">
                          {Category.map((e) => {
                            return (
                              <Link
                                to={`/products/${e._id}`}
                                key={e._id}
                                className="col text-dark"
                                style={{ cursor: "pointer" }}
                              >
                                {e.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/about"
                    style={{ color: "white" }}
                  >
                    About
                  </Link>
                </li>
              </ul>
              <ul className="nav d-flex">
                {UserData.role === 1 ? (
                  <li className="nav-item me-2">
                    <Link
                      type="button"
                      to="/admin/dashboard"
                      className="btn btn-primary btn-sm"
                      target="_blank"
                    >
                      Dashboard
                    </Link>
                  </li>
                ) : (
                  ""
                )}
                <li className="nav-item">
                  <form
                    className=" input-group input-group-sm d-flex"
                    role="search"
                  >
                    <input
                      className=" form-control me-2"
                      type="search"
                      name="searched"
                      value={SearchStr.searched}
                      onChange={HandleSearchChange}
                      placeholder="Search Product Here"
                      aria-label="Search"
                    />
                    <button
                      className="btn btn-outline-light"
                      onClick={HandleSearch}
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </li>
                <li className="nav-item">
                  <Link
                    to="/cart"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    <i
                      className="fa-solid fa-cart-shopping mx-2 nav-link position-relative text-white"
                      style={{ cursor: "pointer" }}
                    >
                      <span className="position-absolute top-0 start-101 translate-middle badge rounded-pill bg-danger">
                        {Cart.length}
                      </span>
                      <span className="h6" style={{ fontFamily: "cursive" }}>
                        Cart
                      </span>
                    </i>
                  </Link>
                </li>
                <li className="nav-item">
                  {!localStorage.getItem("token") ? (
                    <div className="dropdown">
                      <i
                        className="fa-regular fa-user mx-2 nav-link"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ cursor: "pointer", color: "white" }}
                      ></i>

                      <ul className="dropdown-menu dropdown-menu-end">
                        <li className="d-flex justify-content-center p-3">
                          <Link to="/signin">
                            <button type="button" className="btn btn-primary">
                              Log In
                            </button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div className="dropdown">
                      <a
                        href="/"
                        className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                        id="dropdownUser1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src={UserData.photo}
                          alt="hugenerd"
                          width="30"
                          height="30"
                          className="rounded-circle"
                        />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end text-small shadow">
                        <li>
                          <Link className="dropdown-item" to="/myprofile">
                            My Profile
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/myorders">
                            My Orders
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li className="d-flex justify-content-center">
                          <button
                            type="button"
                            className="btn btn-primary "
                            onClick={HandleLogout}
                          >
                            Log Out
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
