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

    const Foundproduct = await Order.findOne({ product: id, user: userID });
    if (Foundproduct) {
      return;
    }
    // find all product details from the id.
    const product = await Product.findById(id);

    // If the product is already found
    // const IsFound = await Order.findOne({ product: id });

    // saving the details to the database.
    let cartItem = await Order.create({
      product: id,
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

router.post("/removeallItems", fetchuser, async (req, res) => {
  try {
    const user = await Order.deleteMany({ user: userID });
    res.json({ user });
  } catch (error) {
    console.log(error);
  }
});


//--------------------------This is only for testing-------------------------------//

router.get("/testApi", fetchuser, async (req, res) => {
  const { id } = req.body;
  const product = await Order.findOne({ product: id, user: userID });
  res.json(product);
});
module.exports = router;

//-------------------------This is only for testing-------------------------------//
