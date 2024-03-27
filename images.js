const cloudinary = require("cloudinary").v2;

const cloudnayFun = () => {
  cloudinary.config({
    cloud_name: "dc4n1xm2i",
    api_key: "553819154881683",
    api_secret: "1ECt_-Twb2cAmWKLxnkntIzUaJE",
  });
};

module.exports = { cloudnayFun };
