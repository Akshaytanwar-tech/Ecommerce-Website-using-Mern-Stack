const cloudinary = require("cloudinary").v2;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/user");

let success = true;
const signup = async (req, res) => {
  try {
    const { username, email, password, address, mobile } = req.body;

    // Checking the user found to the database on not
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      success = false;
      return res.status(400).json({ error: "sorry user is already exists" });
    }

    // Creating hash and salt
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    //Saving photo to the cloudnary
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result.secure_url)
    // Saving data to the database.
    user = await User.create({
      username: username,
      email: email,
      password: hash,
      photo: result.secure_url,
      address: address,
      mobile: mobile,
    });
    if (!user) {
      success = false;
      res.send({
        success: success,
        error: "User is not created",
      });
    }
    const data = {
      user: {
        id: user._id,
      },
    };

    // Creating token using jwt token
    const token = jwt.sign(data, process.env.JWT_SECRET_KEY);

    if (!token) {
      success = false;
      res.send({
        success: success,
        error: "Token error",
      });
    }

    success = true;

    res.json({ token: token, success: success });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = signup;
