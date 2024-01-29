import React, { useState } from "react";
import EcomContext from "./EcomContext";
import { loadStripe } from "@stripe/stripe-js";
import RemoveAllItems from "../Api/Cart/RemoveAllItems";
import AddItemCart from "../Api/Cart/AddItemCart";
import HandleQty from "../Api/Cart/HandleQty";
import HandleCheckout from "../Api/Orders/HandleCheckout";
import Signup from "../Api/User/Auth/Signup";
import SignIn from "../Api/User/Auth/SignIn";
import forgotpassword from "../Api/User/ForgotPassword/forgotpassword";
import newPassword from "../Api/User/ForgotPassword/newPassword";
import changepassword from "../Api/User/ForgotPassword/changepassword";
import CreateCategory from "../Api/Admin/CreateCategory";
import CreateProduct from "../Api/Admin/CreateProduct";
import changeProfile from "../Api/User/changeProfile";

const Ecomstate = (props) => {
  const [Category, setCategory] = useState([]);
  const [users, setUsers] = useState();
  const [Product, setProduct] = useState([]);
  const [AllProduct, setAllProduct] = useState([]);
  const [Cart, setCart] = useState([]);
  const [DeleteCat, setDeleteCat] = useState("");
  const [Productdetails, setProductdetails] = useState([]);
  const [UserData, setUserData] = useState([]);
  const [SearchData, setSearchData] = useState([]);
  const [myOrders, setmyOrders] = useState([]);
  const [BestProducts, setBestProducts] = useState([]);

  // ---------------------------------------- APIs for the Category ------------------------------------ //

  // API :- 1 To fetch all the categories.
  const FetchCategories = async () => {
    const response = await fetch(
      `http://localhost:5000/api/Category/fetchcategories`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    setCategory(result);
  };

  // ------------------------------------------ APIs for the Product --------------------------------------------------- //

  // API :- 1 To fetch fetch all the products of a particular categories.
  const FetchProductbyCategories = async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/Product/Fetchallproductbycategory/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    setProduct(result);
  };
  // Api :- 2 To fetch product details with product id
  const FetchProductDetails = async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/Product//Fetchproductdetail/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    setProductdetails(result);
  };

  // API:- 3 To fetch all the PRODUCTS
  const FetchallProducts = async () => {
    const response = await fetch(
      `http://localhost:5000/api/Product/Fetchallproduct`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    setAllProduct(json);
  };

  //API:- 3- To search a product

  const SearchProduct = async (params) => {
    const response = await fetch(
      `http://localhost:5000/api/Product//Searchitem/${params}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    setSearchData(json);
  };

  //Api:- 4 :- api for the best product

  const BestProduct = async () => {
    const response = await fetch(`http://localhost:5000/api/Product/isBest`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    // console.log(json)
    setBestProducts(json);
  };
  //------------------------------------------- APIs for the Admin -------------------------------------------------//

  //API- 3:- To Delete a Category.
  const DeleteAcategory = async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/Category/deletecategory/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    setDeleteCat(json);
    if (json === "Category has been deleted") {
      const NewCategory = Category.filter((e) => {
        return e._id !== id;
      });
      setCategory(NewCategory);
    }

    return json;
  };

  //API-4 :- To delete a product.
  const DeleteAproduct = async (id) => {
    const res = await fetch(
      `http://localhost:5000/api/Product/deleteproduct/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = res.json();
    const changedProduct = Product.filter((e) => {
      return e._id !== id;
    });
    setProduct(changedProduct);
    return json;
  };

  // ----------------------------------------------- User APIs -----------------------------------------------------//

  //API:- 3 To find the user data from its token

  const FetchUserData = async () => {
    const response = await fetch(`http://localhost:5000/api/auth/fetchuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setUserData(json);
  };

  // API:-4 To find the length of all user present to show on the dashboard

  const fetchalluser = async () => {
    const response = await fetch(`http://localhost:5000/api/auth/alluser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setUsers(json.length);
  };

  
  // -----------------------------------------APIs for Orders------------------------------------------------- //

  // API :- 2 To fetch the cart item
  const FetchCartitem = async () => {
    const response = await fetch(
      `http://localhost:5000/api/Order/fetchCartitems`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    setCart(json);
  };

  // API :- 3 To remove the element from the cart

  const RemoveItemCart = async (id) => {
    await fetch(`http://localhost:5000/api/Order/removeItem/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const changedCartitem = Cart.filter((e) => {
      return e._id !== id;
    });
    setCart(changedCartitem);
  };

  //Api 4:- To handle the quantity

  // ---------------------------------- APIs to handle checkout ----------------------------------------

  // API 2:- To fetch orders done by the user
  const Myorders = async () => {
    const response = await fetch(
      `http://localhost:5000/api/checkout/fetchOrder`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      }
    );
    const data = await response.json();
    setmyOrders(data);
  };

  //API 3:- To cancel the order

  const CancelOrder = async (id) => {
    await fetch(`http://localhost:5000/api/checkout//cancelorder/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const changedOrders = myOrders.filter((e) => {
      return e._id !== id;
    });
    setmyOrders(changedOrders);
  };

  // ---------------------------------APIs for the payment----------------------------------------------

  const PaymentHandler = async (name, price, quantity) => {
    let isSuccess;
    const stripe = await loadStripe(
      "pk_test_51Mcs7PSIOxSRCSOkmYzOxH1bLmalJ0lK3XX5iM45USl5WpJjhyRDE36ollzX1NaNIky5RONIADKqzbujinnK4j3T00BVnYh1vp"
    );

    const response = await fetch(
      "http://localhost:5000/api/checkout/api/create-checkout-session",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          price: price,
          quantity: quantity,
        }),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      isSuccess = false;
      console.log(result.error);
    }
    isSuccess = true;
    return isSuccess;
  };
  return (
    <>
      <EcomContext.Provider
        value={{
          FetchCategories,
          FetchProductbyCategories,
          FetchProductDetails,
          CreateCategory,
          CreateProduct,
          DeleteAcategory,
          DeleteAproduct,
          FetchallProducts,
          FetchCartitem,
          RemoveItemCart,
          AddItemCart,
          FetchUserData,
          SearchProduct,
          Signup,
          SignIn,
          fetchalluser,
          forgotpassword,
          newPassword,
          changepassword,
          HandleCheckout,
          Myorders,
          CancelOrder,
          PaymentHandler,
          changeProfile,
          BestProduct,
          HandleQty,
          RemoveAllItems,
          BestProducts,
          myOrders,
          users,
          SearchData,
          Cart,
          UserData,
          AllProduct,
          DeleteCat,
          Productdetails,
          Category,
          Product,
        }}
      >
        {props.children}
      </EcomContext.Provider>
    </>
  );
};

export default Ecomstate;
