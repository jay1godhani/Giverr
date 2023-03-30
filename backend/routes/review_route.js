import express from "express";
import { verifyToken } from "../middleware/token_verification.js";
import {createReview,getReviews,deleteReview} from "../controllers/review_controller.js"
const reviewRoute = express.Router();

reviewRoute.post("/",verifyToken,createReview);
reviewRoute.get("/:id",getReviews);
reviewRoute.delete("/:id",deleteReview);

export default reviewRoute;
