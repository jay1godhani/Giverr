import jwt from "jsonwebtoken";
import { createError } from "../utils/createError.js";

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.accessToken;

  // if there is no cookie means user is not logged in
  if (!token) {
    next(createError(401, "You are not authenticated"));
  }

  jwt.verify(token, process.env.JWTKEY, async (err, payload) => {
    //   res.send(payload);

    if (err) {
      return next(createError(403, "Token is not valid"));
    }

    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next();
  });
};
