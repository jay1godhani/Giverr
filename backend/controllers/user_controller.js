import jwt from "jsonwebtoken";
import User from "../models/user_model.js";
import { createError } from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
  try {
    // console.log(req);

    // getting user which has to be deleted
    const user = await User.findById(req.params.id);

    if (req.userId != user._id.toString()) {
      //   res.status(403).send("You can delete only your account");
      return next(createError(403, "You can delete only your account"));
    }

    await User.findByIdAndDelete(req.params.id); // Deleting user

    res.status(200).send("User is Deleted !");

    // getting cookie from reqest
  } catch (err) {
    // res.send(500).send("something went wrong");
    next(err);
  }
};


export const getUser = async (req, res, next) => {
  try {
     console.log(req);

    // getting user which has to be deleted
    const user = await User.findById(req.params.id);

   

    res.status(200).send(user);

    
  } catch (err) {
    // res.send(500).send("something went wrong");
    next(err);
  }
};