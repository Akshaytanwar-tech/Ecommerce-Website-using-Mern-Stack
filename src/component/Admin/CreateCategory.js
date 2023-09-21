import React, { useState, useContext } from "react";
import EcomContext from "../../context/EcomContext";
import Alert from "../UI/Alert";

const CreateCategory = (e) => {
  const context = useContext(EcomContext);
  const { CreateCategory } = context;
  const [category, setCategoy] = useState({ name: "", photo: "" });
  //State to handle Alert
  const [AlertTriggered, setAlertTriggered] = useState("");
  const onChange = (e) => {
    setCategoy({ ...category, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    CreateCategory(category.name, category.photo)
      .then((json) => {
        setAlertTriggered(json);
      })
      .then(() => {
        setTimeout(() => {
          setAlertTriggered("");
        }, 5000);
      });
    setCategoy({ name: "", photo: "" });
  };

  return (
    <>
      {AlertTriggered && <Alert message={AlertTriggered} />}
      <div className="container h3 text-center"> Create Category </div>
      <div className="container my-3 py-3 ">
        <div className="input-group flex-nowrap my-3">
          <span className="input-group-text" id="addon-wrapping">
            Category Name
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name Here"
            aria-label="Username"
            name="name"
            aria-describedby="addon-wrapping"
            value={category.name}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Please enter photo link
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example input placeholder"
            name="photo"
            onChange={onChange}
            value={category.photo}
            required
          />
        </div>
        <button type="submit" onClick={onSubmit} className="btn btn-primary">
          Submit
        </button>
      </div>
    </>
  );
};

export default CreateCategory;
