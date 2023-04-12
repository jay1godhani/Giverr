import User from "../models/user_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createError } from "../utils/createError.js";

export const register = async (req, res, next) => {
  try {
    // encypting password using bcrypt library
    const hash = bcrypt.hashSync(req.body.password, 5);

    // User object for saving it into the database
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    // console.log(newUser);

    await newUser.save(); // saving user to database

    res.status(201).send("user has been created");
  } catch (err) {
    // res.status(500).send(err);
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    // finding user by their username
    const user = await User.findOne({ username: req.body.username });

    // if no user is found
    if (!user) {
      return next(createError(404, "User not found"));
    }

    // console.log(user);

    // checking if entered password is correct or not
    const isCorrect = bcrypt.compareSync(req.body.password, user.password);

    // generating token for current user usinng id and isSeller field value
    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWTKEY
    );

    // console.log("token", token);

    if (!isCorrect) {
      return next(createError(404, "wrong passwrod or username"));
    }

    const { password, ...info } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (err) {
    // res.status(500).send(err);
    next(err);
  }
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out");
};
