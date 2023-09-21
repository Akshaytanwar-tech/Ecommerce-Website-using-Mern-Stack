// Schema for the product CRUD operations.
const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },

  Brand_Name: {
    type: String,
    required: true,
  },
  Product_Name: {
    type: String,
    required: true,
  },
  Product_Name_Details: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Description_spec: [
    {
      Description_spec_title: {
        type: String,
        required: true,
      },
      Description_spec_desc: {
        type: String,
        required: true,
      },
      Description_spec_photo: {
        type: String,
        required: true,
      },
    },
  ],

  photo: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  tags: {
    type: String,
  },
  ProductHighlight: {
    type: Array,
  },
  specifications: {},
});
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
