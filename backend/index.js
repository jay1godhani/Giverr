// console.log("test");

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb");
  } catch (error) {
    console.error(error);
  }
};

app.listen(8000, () => {
  connect();
  console.log("backend server is running ");
});
