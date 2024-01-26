import React from "react";

const PriceFilter = () => {
  const HandlePriceFilter = (e) => {
    <div>{e.target.value}</div>;
  };
  return (
    <>
      <input
        type="range"
        class="form-range"
        min="0"
        max="100"
        id="customRange2"
        onChange={HandlePriceFilter}
      />
      <label for="customRange2" class="form-label">
        0
      </label>
      <span for="customRange2" class="top-0 start-155">
        100
      </span>
    </>
  );
};

export default PriceFilter;
