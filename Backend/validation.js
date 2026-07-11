import { body, validationResult } from "express-validator";

// Register Validation
export const registerValidation = [
  body("email")
    .isEmail()
    .withMessage("Please enter a valid email"),

  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
      });
    }

    next();
  },
];

// Login Validation
export const loginValidation = [
  body("email")
    .isEmail()
    .withMessage("Please enter a valid email"),

  body("password")
    .notEmpty()
    .withMessage("Password is required"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
      });
    }

    next();
  },
];