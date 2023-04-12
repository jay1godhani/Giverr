import express from "express";
import { verifyToken } from "../middleware/token_verification.js";
import {
  createMessage,
  getAllMessages,
} from "../controllers/message_controller.js";
const messageRoute = express.Router();

messageRoute.post("/", verifyToken, createMessage);
messageRoute.get("/:id", verifyToken, getAllMessages);

export default messageRoute;
