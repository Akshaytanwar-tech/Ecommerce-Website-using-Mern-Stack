const User = require("../../models/user");
const cloudinary = require("cloudinary").v2;

const changeProfile = async (req, res) => {
  try {
    const file = req.file.path;
    const result = await cloudinary.uploader.upload(file);
    await User.findByIdAndUpdate(userID, { photo: result.secure_url });
    res.send("Profile has been changed");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = changeProfile;
