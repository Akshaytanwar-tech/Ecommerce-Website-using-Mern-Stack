// Routes for the categories CRUD operations.
const express = require("express");
const router = express.Router();
const multer = require("multer");
const createCategory = require("../controllers/categories/createCategory");
const fetchcategories = require("../controllers/categories/fetchCategories");
const deleteCategories = require("../controllers/categories/deleteCategories");
const upload = multer({ dest: "uploads/" });


// Api-1 For category creation
router.post("/category", upload.single("photo"), createCategory);

// Api-2  For Fetch the categories
router.get("/fetchcategories", fetchcategories);

// Api-3:- To delete a category if that category does not have any product.
router.delete("/deletecategory/:id", deleteCategories);

module.exports = router;
