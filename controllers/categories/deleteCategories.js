const Product = require("../../models/product");
const Category = require("../../models/category");

const deleteCategories = async (req, res) => {
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
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = deleteCategories;
