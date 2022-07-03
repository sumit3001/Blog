import express from "express";
import { body, validationResult } from "express-validator";
import { Blog } from "../services/mongoDB/schema";
import { isAdmin } from "../services/middlewares/isAdmin";
import { isAuthenticated } from "../services/middlewares/isAuthenticated";

const router = express.Router();

/*
type: POST
body: (heading, image, blog)
path: /blog/add
query: none
description: Route for creating blog
*/

router.post(
  "/add",
  body("heading").isLength({ min: 4 }),
  body("description").isLength({ min: 5 }),
  isAuthenticated,
  isAdmin,
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

      const { heading, description, image } = req.body;
      const blog = new Blog({
        heading,
        image,
        description,
      });

      await blog.save();
      return res.json({
        data: {
          blog,
        },
        success: true,
        message: "Blog created successfully",
      });
    } catch (error) {
      return res.json({
        data: {
          blog: null,
        },
        success: false,
        message: error.message,
      });
    }
  }
);

/*
type: GET
body: none
path: /blog/all
query: none
description: Route for fetching all blog
*/

router.get(
  "/all",
  async (req, res) => {
    try {
      const blogs = await Blog.find({ });

      return res.json({
        data: {
          blogs,
        },
        success: true,
        message: "Blog fetched successfully",
      });
    } catch (error) {
      return res.json({
        data: {
          blog: null,
        },
        success: false,
        message: error.message,
      });
    }
  }
);

export default router;