// Routes related to the Product CRUD operation.
const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const { body, validationResult } = require("express-validator");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const cloudinary = require("cloudinary").v2;


//Api 1:- To create a product with its category.
router.post(
  "/Productcreate",
  [
    body("quantity")
      .isInt({ min: 0 })
      .withMessage("amount is not a number or amount is less than zero"),
    body("price")
      .isInt({ min: 0 })
      .withMessage("amount is not a number or amount is less than zero"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const {
        Brand_Name,
        photo,
        price,
        Product_Name,
        Product_Name_Details,
        Description,
        quantity,
        CategoryID,
        tags,
        ProductHighlight,
        specifications,
        Description_spec,
        isBest,
      } = req.body;

      let product = await Product.create({
        Brand_Name: Brand_Name,
        Product_Name: Product_Name,
        Product_Name_Details: Product_Name_Details,
        Description: Description,
        photo: photo,
        price: price,
        quantity: quantity,
        category: CategoryID,
        tags: tags,
        ProductHighlight: ProductHighlight,
        specifications: specifications,
        Description_spec: Description_spec,
        isBest: isBest,
      });
      res.json(`${product.Product_Name} has been created`);
    } catch (error) {
      console.log(error);
    }
  }
);

// Api- 2:- To fetch all the Products to find the number of products on the website.
router.get("/Fetchallproduct", async (req, res) => {
  try {
    let product = await Product.find();
    res.json(product);
  } catch (error) {
    console.log(error);
  }
});

// Api- 3:- To Fetch the details of a particular products using its id.
router.post("/Fetchproductdetail/:id", async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    console.log(error);
  }
});

// Api- 4:- To fetch the products of a particular category by its category id.
router.post("/Fetchallproductbycategory/:id", async (req, res) => {
  try {
    let product = await Product.find({ category: req.params.id });
    res.json(product);
  } catch (error) {
    console.log(error);
  }
});

//Api:- 5:- To delete product
router.delete("/deleteproduct/:id", async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send("product not found");
    }
    product = await Product.findByIdAndDelete(req.params.id);
    res.json("Product has been deleted");
  } catch (error) {
    console.log(error);
  }
});

//Api:- 6:- To Search particular product
router.get("/Searchitem/:key", async (req, res) => {
  try {
    let searchedResult = await Product.find({
      $or: [{ tags: { $regex: req.params.key } }],
    });
    res.json(searchedResult);
  } catch (error) {
    console.log(error);
  }
});

// API-7 :- To find the best product
router.get("/isBest", async (req, res) => {
  try {
    let bestPorducts = await Product.find({ isBest: true });
    res.json(bestPorducts);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
