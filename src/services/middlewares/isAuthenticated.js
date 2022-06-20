import { verifyJWT } from "../../utils";

export const isAuthenticated = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    const isVerified = verifyJWT(token);
    if (isVerified) return next();
    else {
      return res.json({
        data: {},
        success: false,
        message: "Unautherised",
      });
    }
  } catch (error) {
    return res.json({
      data: {},
      success: false,
      message: error.message,
    });
  }
};
