const express = require("express");
const connectToMongo = require("./database");
const { cloudnayFun } = require("./images");
const port = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
connectToMongo();
cloudnayFun();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Using routes to the server.
app.use("/api/auth", require("./routes/user"));
app.use("/api/Category", require("./routes/categories"));
app.use("/api/Product", require("./routes/product"));
app.use("/api/Order", require("./routes/order"));
app.use("/api/checkout", require("./routes/checkout"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
