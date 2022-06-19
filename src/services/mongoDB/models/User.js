import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlegnth: 1
    },
    lastName: {
      type: String,
      required: true,
      minlegnth: 1
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

export const User = new mongoose.model("User", UserSchema);