import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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

export const Category = new mongoose.model("Category", CategorySchema);