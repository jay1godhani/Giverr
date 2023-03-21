import express from "express";

const conversationRoute = express.Router();

conversationRoute.get("/test", (req, res) => {
  res.send("hello sashank how are you");
});

export default conversationRoute;
