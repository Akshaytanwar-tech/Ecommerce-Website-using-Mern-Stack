import React, { useContext, useState, useEffect, useRef } from "react";
import EcomContext from "../../context/EcomContext";
import Alert from "../UI/Alert";

const CreateProduct = () => {
  const context = useContext(EcomContext);
  const { FetchCategories, Category, CreateProduct } = context;

  // State to handle Alert.
  const [AlertTriggered, setAlertTriggered] = useState("");
  // State to manage best product list
  const [isBest, setisBest] = useState(false);
  const select = useRef();

  useEffect(() => {
    FetchCategories();
    // eslint-disable-next-line
  }, [Category]);

  // State for the all the entities of the product
  const [Product, setProduct] = useState({
    Brand_Name: "",
    Product_Name: "",
    Product_Name_Details: "",
    Description: "",
    photo: "",
    price: "",
    quantity: "",
    category: "",
    tags: "",
  });

  //States for the Descriptive Specification
  const [Description, SetDescription] = useState({
    Description_spec_title: "",
    Description_spec_desc: "",
    Description_spec_photo: "",
  });

  const [AddDes, SetAddDes] = useState([]);

  //States for the Product Hightlights

  const [ProductHighlight, setProductHighlight] = useState({
    Highlight: "",
  });
  const [AddProductHighlight, setAddProductHighlight] = useState([]);

  // On change function for the full form except descriptive Specification
  const onChange = (e) => {
    setProduct({ ...Product, [e.target.name]: e.target.value });
  };

  // Submit function for the full form
  const onSubmit = (e) => {
    e.preventDefault();
    CreateProduct(
      Product.Brand_Name,
      Product.Product_Name,
      Product.Product_Name_Details,
      Product.Description,
      Product.photo,
      Product.price,
      Product.quantity,
      Product.category,
      Product.tags,
      AddDes,
      AddProductHighlight,
      isBest
    )
      .then((json) => {
        setAlertTriggered(json);
      })
      .then(() => {
        setTimeout(() => {
          setAlertTriggered("");
        }, 5000);
      });
    setProduct({
      Brand_Name: "",
      Product_Name: "",
      Product_Name_Details: "",
      Description: "",
      photo: "",
      price: "",
      quantity: "",
      category: (select.current.value = ""),
      tags: "",
    });
    setisBest(false);
    SetAddDes([]);
    setAddProductHighlight([]);
  };

  // Onchange function for the Descriptve specification

  const HandleDescriptionChange = (e) => {
    SetDescription({ ...Description, [e.target.name]: e.target.value });
  };

  //ON click handle for the descriptive Specification
  const HandleOnClickDescription = async (e) => {
    e.preventDefault();
    SetAddDes([...AddDes, Description]);
    SetDescription({
      Description_spec_title: "",
      Description_spec_desc: "",
      Description_spec_photo: "",
    });
  };

  //Function for the product Highlights

  const Handle_Pro_High_Onchange = (e) => {
    // onchange
    setProductHighlight({
      ...ProductHighlight,
      [e.target.name]: e.target.value,
    });
  };

  const Handle_Pro_High_onclick = (e) => {
    // on click
    e.preventDefault();
    setAddProductHighlight([
      ...AddProductHighlight,
      ProductHighlight.Highlight,
    ]);
    setProductHighlight({ Highlight: "" });
  };

  // Function to handle the checkbox for the best product

  const handleBestProductCheckbox = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setisBest(!isBest);
      console.log(isBest);
    } else {
      setisBest(!isBest);
      console.log(isBest);
    }
  };
  return (
    <>
      {AlertTriggered && <Alert message={AlertTriggered} />}
      <div className="container h3 text-center my-3">Create Product</div>
      <div className="container">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Brand Name
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Brand Name Here"
            id="validationDefaultUsername"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="Brand_Name"
            onChange={onChange}
            value={Product.Brand_Name}
            required
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Product Name
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Product Name Here"
            id="validationDefaultUsername"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="Product_Name"
            onChange={onChange}
            value={Product.Product_Name}
            required
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Product Name Details
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Product Name in Details Here"
            id="validationDefaultUsername"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="Product_Name_Details"
            onChange={onChange}
            value={Product.Product_Name_Details}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Product Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1 validationTextarea"
            placeholder="Write Product Description Here"
            rows="3"
            name="Description"
            onChange={onChange}
            value={Product.Description}
            required
          ></textarea>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Give your photo url
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Enter url Here"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="photo"
            onChange={onChange}
            value={Product.photo}
            required
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Price
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Price Here"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="price"
            onChange={onChange}
            value={Product.price}
            required
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Quantity
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Quantity Here"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="quantity"
            value={Product.quantity}
            onChange={onChange}
            required
          />
        </div>
        <select
          className="form-select"
          name="category"
          onChange={onChange}
          ref={select}
          aria-label="select example"
        >
          <option defaultValue value={""}>
            Choose one Option
          </option>
          {Category.map((element) => {
            return (
              <option value={element._id} key={element._id}>
                {element.name}
              </option>
            );
          })}
        </select>
        <div className="container border mt-2 p-2">
          Add Product Highlights
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Product Highlights
            </span>
            <input
              type="text"
              name="Highlight"
              class="form-control"
              placeholder="Product Highlights"
              aria-label="Username"
              value={ProductHighlight.Highlight}
              onChange={Handle_Pro_High_Onchange}
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="d-flex container justify-content-end">
            <button
              type="button"
              class="btn btn-primary"
              onClick={Handle_Pro_High_onclick}
            >
              Add
            </button>
          </div>
          <div className="container">
            {AddProductHighlight &&
              AddProductHighlight.map((e) => {
                return <p>{e}</p>;
              })}
          </div>
        </div>
        <div className="container border my-2 py-2">
          Product Description Specification
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Title
            </span>
            <input
              type="text"
              class="form-control"
              name="Description_spec_title"
              value={Description.Description_spec_title}
              onChange={HandleDescriptionChange}
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Description
            </span>
            <input
              type="text"
              class="form-control"
              name="Description_spec_desc"
              value={Description.Description_spec_desc}
              onChange={HandleDescriptionChange}
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Photo
            </span>
            <input
              type="text"
              class="form-control"
              name="Description_spec_photo"
              value={Description.Description_spec_photo}
              onChange={HandleDescriptionChange}
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="d-flex container justify-content-end">
            <button
              type="button"
              class="btn btn-primary"
              onClick={HandleOnClickDescription}
            >
              Add
            </button>
          </div>
          <div className="container row row-cols-2 row-cols-lg-5 g-2 g-lg-3 pt-3">
            {AddDes &&
              AddDes.map((e) => {
                return (
                  <div className="col">
                    <div class="card p-3">
                      <img
                        src={e.Description_spec_photo}
                        class="card-img-top"
                        alt="..."
                        style={{ height: "100px" }}
                      />
                      <div class="card-body">
                        <h5 class="card-title">{e.Description_spec_title}</h5>
                        <p class="card-text">{e.Description_spec_desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label mt-3">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example input placeholder"
            name="tags"
            onChange={onChange}
            value={Product.tags}
            required
          />
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            onClick={handleBestProductCheckbox}
            checked={isBest ? true : false}
          />
          <label class="form-check-label" for="flexCheckChecked">
            Checked checkbox
          </label>
        </div>
        <button
          type="submit"
          value="submit"
          onClick={onSubmit}
          className="btn btn-primary my-3"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default CreateProduct;
