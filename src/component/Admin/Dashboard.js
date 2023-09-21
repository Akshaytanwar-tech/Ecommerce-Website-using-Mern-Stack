import React, { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import EcomContext from "../../context/EcomContext";

const Dashboard = () => {
  const context = useContext(EcomContext);
  const {
    Category,
    FetchCategories,
    FetchallProducts,
    AllProduct,
    fetchalluser,
    users,
  } = context;
  useEffect(() => {
    FetchCategories();
    FetchallProducts();
    fetchalluser();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <Link
                to="/admin/dashboard"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline">Admin Dashboard</span>
              </Link>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <Link
                    to="/admin/createcategory"
                    className="nav-link align-middle px-0"
                  >
                    <i className="fs-4 bi-house"></i>
                    <span className="ms-1 d-none d-sm-inline text-warning">
                      Create Category
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/admin/createproduct"
                    className="nav-link align-middle px-0"
                  >
                    <i className="fs-4 bi-house"></i>
                    <span className="ms-1 d-none d-sm-inline text-warning">
                      Create Product
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/admin/DeleteProduct/id"
                    className="nav-link align-middle px-0"
                  >
                    <i className="fs-4 bi-house"></i>
                    <span className="ms-1 d-none d-sm-inline text-warning">
                      Delete Product
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/admin/DeleteCategory/id"
                    className="nav-link align-middle px-0"
                  >
                    <i className="fs-4 bi-house"></i>
                    <span className="ms-1 d-none d-sm-inline text-warning">
                      Delete Category
                    </span>
                  </Link>
                </li>
              </ul>
              <hr />
            </div>
          </div>
          <div className="col ">
            <p className="bg-dark text-white text-center h3 p-3">
              Website data
            </p>
            <div className="container">
              <div className="row g-2">
                <div className="col-6">
                  <div className="p-3 border bg-light text-center h4 ">
                    Total Users
                    <p className="p-3 border bg-light text-center h5 mt-2">
                      {users}
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 border bg-light text-center h4">
                    Total Categories
                    <p className="p-3 border bg-light text-center h5 mt-2">
                      {Category.length}
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 border bg-light text-center h4">
                    Total Products
                    <p className="p-3 border bg-light text-center h5 mt-2">
                      {AllProduct.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
