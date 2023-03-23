import express from "express";

const gigRoute = express.Router();

gigRoute.get("/test", (req, res) => {
  res.send("hello sashank how are you");
});

export default gigRoute;
