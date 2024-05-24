const User = require("../../models/user");
var bcrypt = require("bcryptjs");
const SetNewPass = async (req, res) => {
  try {
    const { newPassword, confirmPassword } = req.body;

    if (newPassword !== confirmPassword) {
      success = false;
      return res
        .status(400)
        .json({ success, error: "Make sure both the password are same" });
    }
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(newPassword, salt);
    await User.findByIdAndUpdate(req.params.id, { password: hash });
    success = true;
    res.json({ success });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = SetNewPass;
