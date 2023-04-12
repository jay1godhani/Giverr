import express from "express";
import { verifyToken } from "../middleware/token_verification.js";
import {
  getConversations,
  createConversation,
  updateConversation,
  getSingleConversation,
} from "../controllers/conversation_controller.js";

const conversationRoute = express.Router();

conversationRoute.get("/", verifyToken, getConversations);
conversationRoute.post("/", verifyToken, createConversation);

// To get a single conversation
conversationRoute.get("/single/:id", verifyToken, getSingleConversation);
conversationRoute.put("/:id", verifyToken, updateConversation);

export default conversationRoute;
