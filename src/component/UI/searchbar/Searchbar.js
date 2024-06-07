import React, { useState, useEffect, useContext } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchBar.css"; // Ensure this file is created and imported
import { useNavigate } from "react-router-dom";
import EcomContext from "../../../context/EcomContext";

const SearchBar = () => {
  const navigate = useNavigate();
  const context = useContext(EcomContext);
  const { FetchallProducts, AllProduct } = context;

  const [input, setInput] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value) {
      const filtered = AllProduct.map((e) => {
        return e.Product_Name;
      }).filter((item) => item.toLowerCase().includes(value.toLowerCase()));
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest(".suggestion-container")) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    FetchallProducts();
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const HandleSearchClick = (e) => {
    e.preventDefault();
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
