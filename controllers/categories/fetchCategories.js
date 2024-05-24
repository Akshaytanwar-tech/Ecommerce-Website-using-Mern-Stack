const Category = require("../../models/category");
const fetchcategories = async (req, res) => {
  try {
    let categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = fetchcategories;
