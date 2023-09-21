import React, { useContext, useEffect, useRef, useState } from "react";
import EcomContext from "../../context/EcomContext";
import Alert from "../UI/Alert";

const DeleteProduct = () => {
  const context = useContext(EcomContext);
  //State to handle Alert
  const [AlertTriggered, setAlertTriggered] = useState("");
  const {
    FetchCategories,
    Category,
    FetchProductbyCategories,
    Product,
    DeleteAproduct,
  } = context;
  const select = useRef();
  useEffect(() => {
    FetchCategories();
    // eslint-disable-next-line
  }, []);
  const onChange = (e) => {
    const id = e.target.value;
    FetchProductbyCategories(id);
    select.current.value = "";
  };
  // Funtion to handle delete product

  const HandledelteProduct = (id) => {
    DeleteAproduct(id)
      .then((json) => {
        setAlertTriggered(json);
      })
      .then(() => {
        setTimeout(() => {
          setAlertTriggered("");
        }, 5000);
      });
  };

  return (
    <>
      {AlertTriggered && <Alert message={AlertTriggered} />}
      <div className="text-center h3 mt-3">Delete a product</div>
      <div className="container">
        <select
          className="form-select"
          name="category"
          ref={select}
          aria-label="Default select example"
          onChange={onChange}
        >
          <option defaultValue>Select the category</option>
          {Category.map((e) => {
            return (
              <option value={e._id} key={e._id}>
                {e.name}
              </option>
            );
          })}
        </select>
        <p className="text-center h3 mt-3" value={""}>
          Click on the delete button to delete the product
        </p>
        <ul className="list-group">
          {Product.map((e) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between bg-dark text-white border border-white"
                key={e._id}
              >
                {e.Product_Name}
                <i
                  onClick={() => {
                    HandledelteProduct(e._id);
                  }}
                  className="fa-solid fa-trash"
                  style={{ cursor: "pointer" }}
                ></i>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default DeleteProduct;
