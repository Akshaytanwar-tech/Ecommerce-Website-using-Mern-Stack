const bcrypt = require("bcryptjs");
const User = require("../../models/user");
let success = true;
const changePassword = async (req, res) => {
  try {
    const { password, newPassword, confirmPassword } = req.body;
    const user = await User.findById(userID);
    const hashedpassword = user.password;

    const result = await bcrypt.compareSync(password, hashedpassword);

    if (!result) {
      success = false;
      return res.status(400).json({ success, error: "Wrong Password" });
    }
    if (newPassword !== confirmPassword) {
      success = false;
      return res
        .status(400)
        .json({ success, error: "Make sure both the password" });
    }

    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(newPassword, salt);
    await User.findByIdAndUpdate(userID, { password: hash });
    success = true;
    res.json({ success });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = changePassword;
