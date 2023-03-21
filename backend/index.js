// console.log("test");

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user_route.js";

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

app.use("/api/user", userRoute); // using user router on /api/user path

app.listen(8000, () => {
  connect();
  console.log("backend server is running ");
});
