// console.log("test");

<<<<<<< HEAD
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
=======
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user_route.js";
>>>>>>> 6ee63e9f372ae97c083fe4c2fb8522e89f8e20bb

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

<<<<<<< HEAD
=======
app.use("/api/user", userRoute); // using user router on /api/user path

>>>>>>> 6ee63e9f372ae97c083fe4c2fb8522e89f8e20bb
app.listen(8000, () => {
  connect();
  console.log("backend server is running ");
});
