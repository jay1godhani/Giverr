// import mongoose from "mongoose";
<<<<<<< HEAD
const mongoose = require("mongoose");
=======
// const mongoose = require("mongoose");
import mongoose from "mongoose";
>>>>>>> 6ee63e9f372ae97c083fe4c2fb8522e89f8e20bb
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
    isSeller: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
