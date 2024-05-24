const fetchallproducts = async (req, res) => {
  try {
    let product = await Product.find();
    res.json(product);
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchallproducts;
