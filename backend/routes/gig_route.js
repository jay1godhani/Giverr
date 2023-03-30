import express from "express";
import { verifyToken } from "../middleware/token_verification.js";
import { createGig,deleteGig,getGig,getGigs } from "../controllers/gig_controller.js";

const gigRoute = express.Router();

gigRoute.post("/",verifyToken,createGig);
gigRoute.delete("/:id",verifyToken,deleteGig);
gigRoute.get("/single/:id",getGig);
gigRoute.get("/",getGigs);


export default gigRoute;
