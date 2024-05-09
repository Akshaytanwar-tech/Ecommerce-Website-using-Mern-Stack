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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <i className="fas fa-store"></i> DigiShop
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <i className="fas fa-home"></i> Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownShop"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-shopping-cart"></i> Shop
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownShop"
                  >
                    {Category.map((e) => {
                      return (
                        <li key={e._id}>
                          <Link
                            to={`/products/${e._id}`}
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
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    <i className="fas fa-info-circle"></i> About
                  </Link>
                </li>
              </ul>

              <form className="d-flex mx-auto">
                <input
                  className="form-control me-2"
                  type="search"
                  name="searched"
                  value={SearchStr.searched}
                  onChange={HandleSearchChange}
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success"
                  onClick={HandleSearch}
                  type="submit"
                >
                  <i className="fas fa-search"></i>
                </button>
              </form>

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {UserData.role === 1 ? (
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/admin/dashboard"
                      target="_blank"
                    >
                      <i className="fa-solid fa-gauge-high"></i> Dashboard
                    </Link>
                  </li>
                ) : (
                  ""
                )}
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <i className="fa-solid fa-cart-shopping">
                      <span className="position-absolute top-1 start-101 translate-middle badge rounded-pill bg-danger">
                        {Cart.length}
                      </span>
                    </i>
                    Cart
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdownProfile"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user"></i>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
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
                          <Link className="dropdown-item" to="/myprofile">
                            My profile
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/myorders">
                            My orders
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
