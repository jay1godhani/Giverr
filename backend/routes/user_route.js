import express from "express";

const userRoute = express.Router();

userRoute.get("/test", (req, res) => {
  res.send("hello sashank how are you");
});

export default userRoute;
