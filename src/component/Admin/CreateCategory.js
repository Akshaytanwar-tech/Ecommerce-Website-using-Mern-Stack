import React, { useState, useContext } from "react";
import EcomContext from "../../context/EcomContext";
import Alert from "../UI/Alert";

const CreateCategory = (e) => {
  const context = useContext(EcomContext);
  const { CreateCategory } = context;
  const [category, setCategoy] = useState({ name: "", photo: null });

  //State to handle Alert
  const [AlertTriggered, setAlertTriggered] = useState("");

  const onChange = (e) => {
    const value =
      e.target.name === "photo" ? e.target.files[0] : e.target.value;

    setCategoy({ ...category, [e.target.name]: value });
  };

  const onSubmit = (e) => {
    let formData = new FormData();
    formData.append("name", category.name);
    formData.append("photo", category.photo);

    CreateCategory(formData)
      .then((json) => {
        setAlertTriggered(json);
      })
      .then(() => {
        setTimeout(() => {
          setAlertTriggered("");
        }, 5000);
      });
    setCategoy({ name: "", photo: null });
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
        <div className="input-group mb-3">
          <input
            type="file"
            name="photo"
            className="form-control"
            id="inputGroupFile01"
            onChange={onChange}
            accept="image/*"
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
