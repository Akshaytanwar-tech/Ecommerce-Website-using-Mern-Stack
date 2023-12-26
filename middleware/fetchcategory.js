// This middleware is for to fetch the category by its name.

const Category = require("../models/category");
const fetchcategory = async (req, res, next) => {
  try {
    let categories = await Category.findOne({ name: req.body.Catname });
    category = categories;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchcategory;
