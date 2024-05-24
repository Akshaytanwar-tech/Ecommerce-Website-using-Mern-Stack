const User = require("../../models/user");
let success = true;

const VerifyDetails = async (req, res) => {
  try {
    const { username, email, mobile } = req.body;

    //Checking the email in the database.
    const user = await User.findOne({ email: email });
    if (!user) {
      success = false;
      return res
        .status(400)
        .json({ success, error: "sorry user does not found" });
    }

    // checking the username given by the user and saved in db.
    if (user.username !== username) {
      success = false;
      return res
        .status(400)
        .json({ success, error: "sorry username not matched" });
    }

    // checking the email for verify.
    if (user.email !== email) {
      success = false;
      return res
        .status(400)
        .json({ success, error: "sorry email not matched" });
    }

    // checking the mobile number with the saved db and the user given.
    if (user.mobile !== mobile) {
      success = false;
      return res
        .status(400)
        .json({ success, error: "sorry mobile number is not matched" });
    }
    id = user._id;
    success = true;
    res.json({ success, id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = VerifyDetails;
