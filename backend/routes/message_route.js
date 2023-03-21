import express from "express";

const messageRoute = express.Router();

messageRoute.get("/test", (req, res) => {
  res.send("hello sashank how are you");
});

export default messageRoute;
