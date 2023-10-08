const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const customerRoutes = require("./routes/customerRoutes");
const app = express();
const port = 3000; // Your chosen port

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/customer")
  .then(() => {
    console.log("connection to mongodb successfull");
  })
  .catch((error) => {
    console.log(error);
  });
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// Use the customer routes
app.use("/api/customer", customerRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
