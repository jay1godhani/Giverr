import express from "express";

const orderRoute = express.Router();

orderRoute.get("/test", (req, res) => {
  res.send("hello sashank how are you");
});

export default orderRoute;
