import React from "react";

const PriceFilter = () => {
  const HandlePriceFilter = (e) => {
    <div>{e.target.value}</div>;
  };
  return (
    <>
      <input
        type="range"
        className="form-range"
        min="0"
        max="100"
        id="customRange2"
        onChange={HandlePriceFilter}
      />
      <label htmlFor="customRange2" className="form-label">
        0
      </label>
      <span htmlFor="customRange2" className="top-0 start-155">
        100
      </span>
    </>
  );
};

export default PriceFilter;
