
import express from "express";
import { Register } from "../config/controllers/auth.js";
import Validate from "../middleware/valitate.js";
import { check } from "express-validator";
import { Login } from "../config/controllers/auth.js";

import { Verify } from "../middleware/verify.js";
import { Logout } from "../config/controllers/auth.js";
const router = express.Router();

// Register route -- POST request
router.post(
    "/register",
    check("email")
        .isEmail()
        .withMessage("Enter a valid email address")
        .normalizeEmail(),
    check("first_name")
        .not()
        .isEmpty()
        .withMessage("You first name is required")
        .trim()
        .escape(),
    check("last_name")
        .not()
        .isEmpty()
        .withMessage("You last name is required")
        .trim()
        .escape(),
    check("password")
        .notEmpty()
        .isLength({ min: 8 })
        .withMessage("Must be at least 8 chars long"),
    Validate,
    Register
);

router.post(
    "/login",
    check("email")
        .isEmail()
        .withMessage("Enter a valid email address")
        .normalizeEmail(),
    check("password").not().isEmpty(),
    Validate,
    Login
);

router.get('/logout', Logout);
export default router;