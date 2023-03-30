import express from "express";
import { deleteUser,getUser } from "../controllers/user_controller.js";
import { verifyToken } from "../middleware/token_verification.js";

const userRoute = express.Router();

// here verifyToken is middleware
userRoute.delete("/:id", verifyToken, deleteUser);
userRoute.get("/:id", verifyToken, getUser);

export default userRoute;
