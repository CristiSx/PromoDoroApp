import {getAllUsers} from "../config/controllers/admin.js";
import express from "express";
const router = express.Router();
router.get("/users", getAllUsers);
export default router;