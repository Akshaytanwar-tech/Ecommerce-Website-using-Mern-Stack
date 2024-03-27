// Routes for the categories CRUD operations.
const express = require("express");
const router = express.Router();
const Category = require("../models/category");
const Product = require("../models/product");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const cloudinary = require("cloudinary").v2;

// Api-1 For category creation
router.post("/category", upload.single("photo"), async (req, res) => {
  try {
    const { name } = req.body;

    //Checking if the category is already exists.
    let catergory = await Category.findOne({ name });
    if (catergory) {
      return res.status(400).json("sorry category is already exists");
    }

    cloudinary.uploader.upload(req.file.path, async (error, result) => {
      if (error) {
        return res.status(500).json({ error: "Error uploading file" });
      }
      // File uploaded successfully, return Cloudinary URL
      const category = await Category.create({
        name: name,
        photo: result.secure_url,
      });
      if (category) {
        res.json("category is created");
      } else {
        return res.status(500).json({ error: "Internal error" });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

// Api-2  For Fetch the categories
router.get("/fetchcategories", async (req, res) => {
  try {
    let categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.log(error);
  }
});

// Api-3:- To delete a category if that category does not have any product.
router.delete("/deletecategory/:id", async (req, res) => {
  try {
    let category = await Product.find({ category: req.params.id });

    if (category.length !== 0) {
      return res
        .status(404)
        .json(
          "First delete all the product on this category Or Category is not found"
        );
    }
    category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json("Category not found");
    }
    res.json("Category has been deleted");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
