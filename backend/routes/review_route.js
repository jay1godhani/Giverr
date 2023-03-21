import express from "express";

const reviewRoute = express.Router();

reviewRoute.get("/test", (req, res) => {
  res.send("hello sashank how are you");
});

export default reviewRoute;
