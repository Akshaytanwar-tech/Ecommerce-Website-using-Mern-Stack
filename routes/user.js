// Routes related to the User Operations like signup , signin etc
const express = require("express");
const router = express.Router();
const User = require("../models/user");
var bcrypt = require("bcryptjs");
const fetchuser = require("../middleware/fetchuser");
let success = true;
const multer = require("multer");
const signup = require("../controllers/auth/signup");
const signin = require("../controllers/auth/signin");
const fetchAllusers = require("../controllers/auth/fetchallusers");
const VerifyDetails = require("../controllers/auth/verifydetails");
const SetNewPass = require("../controllers/auth/SetNewPass");
const upload = multer({ dest: "uploads/" });
const cloudinary = require("cloudinary").v2;

// Auth Api-1 for sign up a user

router.post("/signup", upload.single("photo"), signup);

// Auth Api-2 for Sign In a user.

router.post("/signin", signin);

// Api-3:- for fetch the data of a particular user.

router.get("/fetchuser", fetchuser, async (req, res) => {
  try {
    //userId is coming from the middleware called fetchuser
    const user = await User.findById(userID).select("-password");
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

//  API 4:- To find total number of user

router.get("/alluser", fetchAllusers);

//  API 5:- To Forgot Password

router.post("/VerifydetailsForgotPassword", VerifyDetails);

// API 6:- To set new password.

router.put("/newpassword/:id", SetNewPass);

// API 7:- to Change password.

router.put("/changepassword", fetchuser, async (req, res) => {
  try {
    const { password, newPassword, confirmPassword } = req.body;
    const user = await User.findById(userID);
    const hashedpassword = user.password;

    const result = await bcrypt.compareSync(password, hashedpassword);
    console.log(result);
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
  } catch (error) {
    console.log(error);
  }
});

//Api - 8 :- To Edit the profile section

router.put("/editprofile", fetchuser, async (req, res) => {
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
  } catch (error) {
    console.log(error);
  }
});

router.post("/changeProfile", (req, res) => {
  const { photo } = req.files;
  let imageURL = "";
  cloudinary.uploader.upload(photo.tempFilePath, (err, resu) => {
    imageURL = resu;
  });
  res.json({ image: imageURL });
});

module.exports = router;