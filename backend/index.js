import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user_route.js";
import gigRoute from "./routes/gig_route.js";
import messageRoute from "./routes/message_route.js";
import conversationRoute from "./routes/conversation_route.js";
import orderRoute from "./routes/order_route.js";
import reviewRoute from "./routes/review_route.js";
import authRoute from "./routes/auth_route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb");
  } catch (error) {
    console.error(error);
  }
};

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json()); // from this line we can take any json from client to backend side
app.use(cookieParser());

app.use("/api/users", userRoute); // using user router on /api/user path
app.use("/api/auth", authRoute);
app.use("/api/gigs",gigRoute);
app.use("/api/reviews", reviewRoute);


// last middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  res.status(errorStatus).send(errorMessage);
});

app.listen(8000, () => {
  connect();
  console.log("backend server is running ");
});
