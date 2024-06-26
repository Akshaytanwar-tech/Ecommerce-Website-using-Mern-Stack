const User = require("../../models/user");
const fetchAllusers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = fetchAllusers;
