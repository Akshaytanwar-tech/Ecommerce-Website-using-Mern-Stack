const mongoose = require("mongoose");

const connectToMongo = async () => {
  await mongoose.connect(
    "mongodb+srv://new:akshay2574@cluster0.euy4ayz.mongodb.net/",

    () => {
      console.log("Server connected to Database");
    }
  );
};
connectToMongo().catch((err) => console.log(err));

module.exports = connectToMongo;
