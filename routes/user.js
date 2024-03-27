// Routes related to the User Operations like signup , signin etc
const express = require("express");
const router = express.Router();
const User = require("../models/user");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
let success = true;
const cloudinary = require("cloudinary").v2;

// Auth Api-1 for sign up a user

router.post(
  "/signup",
  [
    body("email").isEmail().withMessage("Email must be email"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be of 5 character"),
    body("username").not().isEmpty().withMessage("username can not be empty"),
    body("address").not().isEmpty().withMessage("Address not be empty"),
    body("mobile")
      .not()
      .isEmpty()
      .withMessage("Mobile number should not be empty"),
    body("photo").not().isEmpty().withMessage("Photo not be empty"),
  ],
  async (req, res) => {
    const { username, email, password, photo, address, mobile } = req.body;
    // Checking errors using express validator
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        success = false;
        return res.status(400).json({ error: "sorry user is already exists" });
      }
      // Creating hash and salt
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      user = await User.create({
        username: username,
        email: email,
        password: hash,
        photo: photo,
        address: address,
        mobile: mobile,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      // Creating token using jwt token
      const token = jwt.sign(data, process.env.JWT_SECRET_KEY);
      success = true;
      res.json({ token, success });
    } catch (error) {}
  }
);

// Auth Api-2 for Sign In a user.

router.post(
  "/signin",
  [
    body("email")
      .isEmail()
      .not()
      .isEmpty()
      .withMessage("Email should not be empty"),
    body("password")
      .not()
      .isEmpty()
      .withMessage("Password should not be empty"),
  ],
  async (req, res) => {
    const { email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
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
  }
);

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

router.get("/alluser", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
});

//  API 5:- To Forgot Password

router.post("/VerifydetailsForgotPassword", async (req, res) => {
  try {
    const { username, email, mobile } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) {
      success = false;
      return res
        .status(400)
        .json({ success, error: "sorry user does not found" });
    }
    if (user.username !== username) {
      success = false;
      return res
        .status(400)
        .json({ success, error: "sorry username not matched" });
    }
    if (user.email !== email) {
      success = false;
      return res
        .status(400)
        .json({ success, error: "sorry email not matched" });
    }
    if (user.mobile !== mobile) {
      success = false;
      return res
        .status(400)
        .json({ success, error: "sorry mobile number is not matched" });
    }
    id = user._id;
    success = true;
    res.json({ success, id });
  } catch (error) {
    console.log(error);
  }
});

// API 6:- To set new password.

router.put("/newpassword/:id", async (req, res) => {
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
  } catch (error) {
    console.log(error);
  }
});

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
module.exports = router;

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
