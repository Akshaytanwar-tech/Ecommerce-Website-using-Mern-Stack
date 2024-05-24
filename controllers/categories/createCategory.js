const Category = require('../../models/category');
const cloudinary = require("cloudinary").v2;

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    //Checking if the category is already exists.
    let catergory = await Category.findOne({ name });
    if (catergory) {
      return res.status(400).json("sorry category is already exists");
    }

    cloudinary.uploader.upload(req.file.path, async (error, result) => {
      if (error) {
        return res.status(500).json({ error: "Error uploading file" });
      }
      // File uploaded successfully, return Cloudinary URL
      const category = await Category.create({
        name: name,
        photo: result.secure_url,
      });
      if (category) {
        res.json("category is created");
      } else {
        return res.status(500).json({ error: "Internal error" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = createCategory;
