import React from "react";
import { useNavigate } from "react-router-dom";

const PriceFilter = ({ CategoryId }) => {
  const navigate = useNavigate();

  const HandleFilter = (e) => {
    let price = e.target.value;
    navigate(`/products/${CategoryId}/Filter/${price}`);
  };
  return (
    <>
      <div className="filter-panel text-center">
        <h5>Filter Products</h5>

        <ul className="list-group list-group-flush mt-3 mb-3">
          <li className="list-group-item">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value={10000}
                onClick={HandleFilter}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Below ₹10000
              </label>
            </div>
          </li>
          <li className="list-group-item">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value={20000}
                onClick={HandleFilter}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Below ₹20000
              </label>
            </div>
          </li>
          <li className="list-group-item">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value={30000}
                onClick={HandleFilter}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Below ₹30000
              </label>
            </div>
          </li>
          <li className="list-group-item">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value={40000}
                onClick={HandleFilter}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Below ₹40000
              </label>
            </div>
          </li>
          <li className="list-group-item">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value={50000}
                onClick={HandleFilter}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Below ₹50000
              </label>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PriceFilter;
