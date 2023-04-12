import express from "express";
import { verifyToken } from "../middleware/token_verification.js";
import {
  createOrder,
  getOrders,
  intent,
  confirm,
} from "../controllers/order_controller.js";
const orderRoute = express.Router();

orderRoute.post("/:gigId", verifyToken, createOrder);
orderRoute.get("/", verifyToken, getOrders);
orderRoute.post("/createPaymentIntent/:id", verifyToken, intent);
orderRoute.put("/", verifyToken, confirm);

export default orderRoute;
