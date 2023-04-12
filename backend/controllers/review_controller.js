import { createError } from "../utils/createError.js";
import Gig from "../models/gig_model.js";
import Review from "../models/review_model.js";

export const createReview = async (req, res, next) => {
  if (req.isSeller) {
    return next(createError(403, "seller can't create a review"));
  }
  // console.log(req.body)
  const newReview = new Review({
    userId: req.userId,
    gigId: req.body.gigId,
    desc: req.body.desc,
    star: req.body.star,
  });

  try {
    const review = await Review.findOne({
      gigId: req.body.gigId,
      userId: req.userId,
    });

    if (review) {
      return next(
        createError(403, "you have alraedy created a review for this gig")
      );
    }
    const savedReview = await newReview.save();
    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, startNumber: 1 },
    });
    res.status(201).send(savedReview);
  } catch (err) {
    next(err);
  }
};

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ gigId: req.params.id });
    res.status(200).send(reviews);
  } catch (err) {
    next(err);
  }
};

export const deleteReview = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
