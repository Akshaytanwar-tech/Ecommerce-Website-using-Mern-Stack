import React, { useState, useEffect, useContext } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";
import EcomContext from "../../../context/EcomContext";

const SearchBar = () => {
  const navigate = useNavigate();
  const context = useContext(EcomContext);
  const { FetchallProducts, AllProduct } = context;

  // hook to handle the input box.
  const [input, setInput] = useState("");

  // hook to handle the filteration of suggestions.
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  // hook to handle the suggestions.
  const [showSuggestions, setShowSuggestions] = useState(false);

  // state to handle the throthlling in search button.
  const [searchButtonactive, setsearchButtonactive] = useState(false);

  //------------------------------------- Implement of throtling -------------------------------------------------
  function throttling(callback, time, state) {
    state(true);
    setTimeout(() => {
      callback();
    }, time);
  }
  // Implementation of debouncing to save function call
  const myDebounce = (callback, time) => {
    let timer;
    if (timer) {
      clearTimeout(timer);
    }
    // setting the timer using settimeout.
    timer = setTimeout(() => {
      callback();
    }, time);
  };

  // handle the changes of the input.
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value) {
      // calling debounce function to implement debouncing.
      myDebounce(() => {
        // mapping the products name for suggestion and filtering them.
        const filtered = AllProduct.map((e) => {
          return e.Product_Name;
        }).filter((item) => item.toLowerCase().includes(value.toLowerCase()));
        setFilteredSuggestions(filtered);
        setShowSuggestions(true);
      }, 1000);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // handle the click on the suggestions.
  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  // handle if the user click outside.
  const handleClickOutside = (e) => {
    if (!e.target.closest(".suggestion-container")) {
      setShowSuggestions(false);
    }
  };

  // use effect hook to handle the search suggestion and outside click.
  useEffect(() => {
    FetchallProducts();
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // handle the search click.
  const HandleSearchClick = (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    // implementing throtling
    throttling(
      () => {
        setsearchButtonactive(false);
      },
      2000,
      setsearchButtonactive
    );
    
    navigate(`/ProductSearch/${input}`);
    setInput("");

  };
  return (
    <form
      className="d-flex suggestion-container"
      style={{ position: "relative" }}
    >
      <input
        type="text"
        id="searchInput"
        className="form-control rounded-pill me-2"
        placeholder="Search..."
        value={input}
        onChange={handleInputChange}
        style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
      />
      <button
        className="btn btn-primary rounded-pill"
        type="button"
        style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
        onClick={HandleSearchClick}
        disabled={searchButtonactive}
      >
        Search
      </button>
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="suggestions">
          {filteredSuggestions.map((item, index) => (
            <div
              key={index}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
