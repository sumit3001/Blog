import express from "express";
import { body, validationResult } from "express-validator";
import bcryptjs from "bcryptjs";
import { User } from "../services/mongoDB/schema";
import { signJWT } from "../utils/jwt";

const router = express.Router();

/*
type: POST
path: /user/signup
body: (firstName, lastName, email, password)
query: none
description: route for sign up a user
*/

router.post(
  "/signup",
  body("firstName").isLength({ min: 3 }), // validation
  body("lastName").isLength({ min: 3 }),
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  async (req, res) => {
    try {
      const { errors } = validationResult(req);
      console.log(errors);
      if (errors.length > 0)
        return res.json({
          data: {
            user: null,
          },
          success: false,
          message: "Validation failed",
        });

      const { firstName, lastName, email, password } = req.body;

      const salt = await bcryptjs.genSalt(5); // random string
      const hashedPasswoed = await bcryptjs.hash(password, salt); // hashing password

      const user = new User({
        firstName,
        lastName,
        email,
        password: hashedPasswoed,
      });

      await user.save();
      return res.json({
        data: {
          user,
        },
        success: true,
        message: "Sign up successfull",
      });
    } catch (error) {
      console.log(error);
      return res.json({
        data: {
          user: null,
        },
        success: false,
        message: error.message,
      });
    }
  }
);

/*
type: POST
path: /user/signin
body: (email, password)
query: none
description: route for sign in a user
*/

router.post(
  "/signin",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  async (req, res) => {
    try {
      const { errors } = validationResult(req);
      console.log(errors);
      if (errors.length > 0)
        return res.json({
          data: {
            user: null,
          },
          success: false,
          message: "Validation failed",
        });

      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.json({
          data: {
            user: null,
          },
          success: false,
          message: "User does not exist",
        });
      }

      const isVarified = await bcryptjs.compare(password, user.password);

      if (!isVarified) {
        return res.json({
          data: {
            user: null,
          },
          success: false,
          message: "Invalid password",
        });
      }

      const token = signJWT({
        id: user._id,
        email: user.email,
        role: user.role,
      });

      return res.json({
        data: {
          token,
          user: {
            id: user._id,
            email: user.email,
            role: user.role,
          },
        },
        success: true,
        message: "User sign in successfull",
      });
    } catch (error) {
      console.log(error);
      return res.json({
        data: {
          user: null,
        },
        success: false,
        message: error.message,
      });
    }
  }
);

export default router;