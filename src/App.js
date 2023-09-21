import "./App.css";
import React from "react";
import Home from "./component/UI/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/UI/About";
import Signin from "./component/UI/user/Signin";
import Signup from "./component/UI/user/Signup";
import EcomContext from "./context/Ecomstate";
import Products from "./component/UI/Product/Products";
import ProductDetails from "./component/UI/Product/ProductDetails";
import Dashboard from "./component/Admin/Dashboard";
import CreateCategory from "./component/Admin/CreateCategory";
import CreateProduct from "./component/Admin/CreateProduct";
import DeleteCategory from "./component/Admin/DeleteCategory";
import DeleteProduct from "./component/Admin/DeleteProduct";
import Cart from "./component/UI/Cart";
import Myprofile from "./component/UI/user/Myprofile";
import ProductSearch from "./component/UI/ProductSearch";
import VerifydetailsFP from "./component/UI/user/VerifydetailsFP";
import NewPassword from "./component/UI/user/NewPassword";
import Changepassword from "./component/UI/user/Changepassword";
import Myorders from "./component/UI/user/Myorders";
import Order from "./component/checkout/Order";
import Alert from "./component/UI/Alert";
import Success from "./component/checkout/StripePayment/Success";
import Cancel from "./component/checkout/StripePayment/Cancel";

function App() {
  return (
    <>
      <EcomContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/cart" element={<Cart />} exact />
            <Route path="/signin" element={<Signin />} exact />
            <Route
              path="/signin/VerifydetailsFP"
              element={<VerifydetailsFP />}
              exact
            />
            <Route
              path="/signin/VerifydetailsFP/forgotpassword/:id"
              element={<NewPassword />}
              exact
            />
            <Route path="/signup" element={<Signup />} exact />
            <Route path="/myprofile" element={<Myprofile />} exact />
            <Route path="/myorders" element={<Myorders />} />
            <Route
              path="/myprofile/changepassword"
              element={<Changepassword />}
              exact
            />
            <Route path="/products/:id" element={<Products />} exact />
            <Route
              path="/products/Category/:id"
              element={<ProductDetails />}
              exact
            />
            <Route
              path="/ProductSearch/:key"
              element={<ProductSearch />}
              exact
            />
            <Route path="/Admin/Dashboard" element={<Dashboard />} exact />
            <Route
              path="/Admin/CreateCategory"
              element={<CreateCategory />}
              exact
            />
            <Route
              path="/Admin/CreateProduct"
              element={<CreateProduct />}
              exact
            />
            <Route
              path="/Admin/DeleteProduct/:id"
              element={<DeleteProduct />}
              exact
            />
            <Route
              path="/Admin/DeleteCategory/:id"
              element={<DeleteCategory />}
              exact
            />
            <Route
              path={`/Order/${":id" ? ":id" : "CartitemBuy"}`}
              element={<Order />}
            />
            <Route path="/alert" element={<Alert />} />
            <Route path="/Ordersuccess" element={<Success />} />
            <Route path="/Ordercancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </EcomContext>
    </>
  );
}

export default App;
