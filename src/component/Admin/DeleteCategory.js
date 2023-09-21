import React, { useContext, useState } from "react";
import { useEffect } from "react";
import EcomContext from "../../context/EcomContext";
import Alert from "../UI/Alert";

const DeleteCategory = () => {
  const context = useContext(EcomContext);
  const { FetchCategories, Category, DeleteAcategory } = context;
  //State to handle Alert
  const [AlertTriggered, setAlertTriggered] = useState("");
  useEffect(() => {
    FetchCategories();
    // eslint-disable-next-line
  }, []);
  // function to delete a category
  const handleDeleteCategory = (id) => {
    DeleteAcategory(id)
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
      <div className="container h3 text-center">
        Click on delete to remove Category
      </div>
      <ul className="list-group">
        {Category.map((e) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between bg-dark text-white border border-white"
              key={e._id}
            >
              {e.name}
              <i
                onClick={() => {
                  handleDeleteCategory(e._id);
                }}
                className="fa-solid fa-trash"
                style={{ cursor: "pointer" }}
              ></i>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DeleteCategory;
