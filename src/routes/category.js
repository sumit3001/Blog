import express from "express";
import { body, validationResult } from "express-validator";
import { Category } from "../services/mongoDB/schema";
import { isAdmin } from "../services/middlewares/isAdmin";
import { isAuthenticated } from "../services/middlewares/isAuthenticated";

const router = express.Router();

/*
type: POST
path: /category/add
body: (name, description)
query: none
description: route for add category
*/

router.post(
  "/add",
  isAuthenticated,
  isAdmin,
  body("name").isLength({ min: 3 }), // validation
  body("description").isLength({ min: 3 }),
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

      const { name, description } = req.body;
      const category = new Category({
        name,
        description,
      });

      await category.save();
      return res.json({
        data: {
          category,
        },
        success: true,
        message: "Category added successfully",
      });
    } catch (error) {
      console.log(error);
      return res.json({
        data: {
          category: null,
        },
        success: false,
        message: error.message,
      });
    }
  }
);

/*
type: GET
path: /category/get
body: none
query: none
description: route for get category
*/

router.get("/all", async (req, res) => {
  try {
    const categories = await Category.find({});
    console.log(categories);
    return res.json({
      data: {
        categories,
      },
      success: true,
      message: "Category fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      data: {
        categories: null,
      },
      success: false,
      message: error.message,
    });
  }
});

export default router;
