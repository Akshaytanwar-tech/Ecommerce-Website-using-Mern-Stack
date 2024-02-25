// Schema for the Cart Operations.
const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  Brand_Name: {
    type: String,
  },

  Product_Name_Details: {
    type: String,
  },
  photo: {
    type: String,
  },
  price: {
    type: Number,
  },
  Quantity: {
    type: Number,
    default: 1,
  },
  
});
const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
