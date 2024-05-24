const Product = require("../../models/product");
const createProduct = async (req, res) => {
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
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = createProduct;
