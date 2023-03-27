import express from "express";
import { register, login, logout } from "../controllers/auth_controller.js";

const authRoute = express.Router();

authRoute.post("/register", register);
authRoute.post("/login", login);
authRoute.post("/logout", logout);

export default authRoute;
