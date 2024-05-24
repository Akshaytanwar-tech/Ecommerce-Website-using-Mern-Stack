const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/user");
let success = true;
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    //Check wheather the email already exists or not
    let user = await User.findOne({ email });
    if (!user) {
      success = false;
      return res.status(400).json({ error: "sorry user not  exists" });
    }
    // Using Bcrypt compare the password given by the user and saved password hash
    let passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false;
      return res.status(400).json({ error: "Wrong password" });
    }

    const data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(data, process.env.JWT_SECRET_KEY);
    success = true;
    res.json({ token, success });
  } catch (error) {
    console.log(error);
  }
};
module.exports = signin;
