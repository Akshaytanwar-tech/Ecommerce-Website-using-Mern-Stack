import React from "react";

const PriceFilter = () => {
  return (
    <>
      <div class="filter-panel text-center">
        <h5>Filter Products</h5>

        <ul class="list-group list-group-flush mt-3 mb-3">
          <li class="list-group-item">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Less than ₹5000
              </label>
            </div>
          </li>
          <li class="list-group-item">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                ₹5000 - ₹10000
              </label>
            </div>
          </li>
          <li class="list-group-item">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                ₹10000 - ₹15000
              </label>
            </div>
          </li>
          <li class="list-group-item">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                ₹15000 - ₹20000
              </label>
            </div>
          </li>
          <li class="list-group-item">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                More than ₹20000
              </label>
            </div>
          </li>
        </ul>
        <div className="d-flex justify-content-center">
          <button class="btn btn-primary">Apply Filters</button>
        </div>
      </div>
    </>
  );
};

export default PriceFilter;
