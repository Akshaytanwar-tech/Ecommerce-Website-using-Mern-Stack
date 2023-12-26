// Routes related to the Cart operations.
const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const fetchuser = require("../middleware/fetchuser");

// API:- 1 To add item to cart
router.post("/AddCart", fetchuser, async (req, res) => {
  try {
    const { Brand_Name, Product_Name_Details, price, id, photo } = req.body;

    let cartItem = await Order.create({
      product: id,
      user: userID,
      Brand_Name: Brand_Name,
      Product_Name_Details: Product_Name_Details,
      photo: photo,
      price: price,
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

module.exports = router;
