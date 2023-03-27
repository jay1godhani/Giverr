import express from "express";
import { deleteUser } from "../controllers/user_controller.js";
import { verifyToken } from "../middleware/token_verification.js";

const userRoute = express.Router();

// here verifyToken is middleware
userRoute.delete("/:id", verifyToken, deleteUser);

export default userRoute;
