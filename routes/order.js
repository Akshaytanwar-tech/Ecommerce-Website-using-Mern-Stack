// Routes related to the Cart operations.
const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const Product = require("../models/product");
const fetchuser = require("../middleware/fetchuser");

// API:- 1 To add item to cart
router.post("/AddCart", fetchuser, async (req, res) => {
  try {
    const { id } = req.body;

    // find all product details from the id.
    const product = await Product.findById(id);

    // If the product is already found
    const IsFound = await Order.findOne({ product: id });
    if(IsFound){
      return
    }
    // saving the details to the database.
    let cartItem = await Order.create({
      product: product._id,
      user: userID,
      Brand_Name: product.Brand_Name,
      Product_Name_Details: product.Product_Name_Details,
      photo: product.photo,
      price: product.price,
    });

    res.json(cartItem);
  } catch (error) {
    console.log(error);
  }
});

// API:- 2 To fetch all items to the cart according to the user
router.get("/fetchCartitems", fetchuser, async (req, res) => {
  try {
    let cart = await Order.find({ user: userID });
    res.json(cart);
  } catch (error) {
    console.log(error);
  }
});

// API:- 3 To remove the item from the cart
router.get("/removeItem/:id", async (req, res) => {
  try {
    await Order.findByIdAndRemove(req.params.id);
    res.json(" Item has been removed");
  } catch (error) {
    console.log(error);
  }
});

// API:- 5 To manage the quanitity of the product

router.post("/quantity/:id", async (req, res) => {
  try {
    const { Quantity } = req.body;

    const product = await Product.findById(req.params.id);

    let updates = {
      Quantity: Quantity,
      price: product.price * Quantity,
    };
    const Orderproduct = await Order.findOne({ product: req.params.id });
    await Order.findByIdAndUpdate(Orderproduct._id, {
      $set: updates,
    });

    res.json(Orderproduct);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
