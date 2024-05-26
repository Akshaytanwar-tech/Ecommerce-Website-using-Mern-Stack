// Routes related to the User Operations like signup , signin etc
const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const multer = require("multer");
const signup = require("../controllers/auth/signup");
const signin = require("../controllers/auth/signin");
const fetchAllusers = require("../controllers/auth/fetchallusers");
const VerifyDetails = require("../controllers/auth/verifydetails");
const SetNewPass = require("../controllers/auth/SetNewPass");
const changeProfile = require("../controllers/auth/changeprofile");
const fetchuserDetails = require("../controllers/auth/fetchuserDetails");
const editProfile = require("../controllers/auth/editprofile");
const changePassword = require("../controllers/auth/changepassword");
const upload = multer({ dest: "uploads/" });

// Auth Api-1 for sign up a user
router.post("/signup", upload.single("photo"), signup);

// Auth Api-2 for Sign In a user.
router.post("/signin", signin);

// Api-3:- for fetch the data of a particular user.
router.get("/fetchuser", fetchuser, fetchuserDetails);

//  API 4:- To find total number of user
router.get("/alluser", fetchAllusers);

//  API 5:- To Forgot Password
router.post("/VerifydetailsForgotPassword", VerifyDetails);

// API 6:- To set new password.
router.put("/newpassword/:id", SetNewPass);

// API 7:- to Change password.

router.put("/changepassword", fetchuser, changePassword);

//Api - 8 :- To Edit the profile section
router.put("/editprofile", fetchuser, editProfile);

// Api 9:- to changethe profile photo
router.put(
  "/changeProfile",
  [upload.single("photo"), fetchuser],
  changeProfile
);

module.exports = router;
