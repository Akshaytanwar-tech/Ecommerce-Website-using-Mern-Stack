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
      {/* <div className="sticky-top"> 
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
      </div> */}
      <div className="sticky-top">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              <i class="fas fa-store"></i> ShopKart
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    <i class="fas fa-home"></i> Home
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    id="navbarDropdownShop"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fas fa-shopping-cart"></i> Shop
                  </Link>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownShop"
                  >
                    {Category.map((e) => {
                      return (
                        <li>
                          <Link
                            to={`/products/${e._id}`}
                            key={e._id}
                            className="dropdown-item"
                            style={{ cursor: "pointer" }}
                          >
                            {e.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    <i class="fas fa-info-circle"></i> About
                  </Link>
                </li>
              </ul>

              <form class="d-flex mx-auto">
                <input
                  class="form-control me-2"
                  type="search"
                  name="searched"
                  value={SearchStr.searched}
                  onChange={HandleSearchChange}
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success"
                  onClick={HandleSearch}
                  type="submit"
                >
                  <i class="fas fa-search"></i>
                </button>
              </form>

              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                {UserData.role === 1 ? (
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      to="/admin/dashboard"
                      target="_blank"
                    >
                      <i class="fa-solid fa-gauge-high"></i> Dashboard
                    </Link>
                  </li>
                ) : (
                  ""
                )}
                <li class="nav-item">
                  <Link class="nav-link" to="/cart">
                    <i class="fa-solid fa-cart-shopping">
                      <span className="position-absolute top-1 start-101 translate-middle badge rounded-pill bg-danger">
                        {Cart.length}
                      </span>
                    </i>
                    Cart
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownProfile"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fas fa-user"></i>
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownProfile"
                  >
                    {!localStorage.getItem("token") ? (
                      <>
                        <div className="d-flex justify-content-center my-4">
                          <Link to="/signin">
                            <button type="button" className="btn btn-primary">
                              Log In
                            </button>
                          </Link>
                        </div>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link class="dropdown-item" to="/myprofile">
                            My profile
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/myorders">
                            My orders
                          </Link>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
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
                      </>
                    )}
                  </ul>
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
