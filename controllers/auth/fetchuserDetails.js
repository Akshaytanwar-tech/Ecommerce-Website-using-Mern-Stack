const User = require("../../models/user");
const fetchuserDetails = async (req, res) => {
  try {
    //userId is coming from the middleware called fetchuser
    const user = await User.findById(userID).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = fetchuserDetails;
