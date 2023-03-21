import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    gigId: {
      type: String,
      requied: true,
    },
    userId: {
      type: String,
      requied: true,
    },
    star: {
      type: Number,
      requied: true,
      enum: [1, 2, 3, 4, 5],
    },
    desc: {
      type: String,
      requied: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Reviews", reviewSchema);
