import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export const Blog = new mongoose.model("Blog", BlogSchema);