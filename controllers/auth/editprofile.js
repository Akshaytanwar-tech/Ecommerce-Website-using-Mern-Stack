const User = require("../../models/user");
const editProfile = async (req, res) => {
  try {
    const { username, email, photo, address, mobile } = req.body;
    let user = await User.findById(userID);
    const NewUser = {};
    if (username) {
      NewUser.username = username;
    }
    if (email) {
      NewUser.email = email;
    }
    if (photo) {
      NewUser.photo = photo;
    }
    if (address) {
      NewUser.address = address;
    }
    if (mobile) {
      NewUser.mobile = mobile;
    }

    user = await User.findByIdAndUpdate(user._id, { $set: NewUser });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = editProfile;
