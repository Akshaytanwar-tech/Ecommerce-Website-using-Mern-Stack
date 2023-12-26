// Middleware to fetch the user id by its token.
var jwt = require("jsonwebtoken");

const fetchuser = (req, res, next) => {
  try {
    const token = req.header("token");
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    userID = decoded.user.id;
    next();
    // console.log(userID)
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchuser;
