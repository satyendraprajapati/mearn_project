import express from "express";
import { signIn, signup } from "../controllers/userController.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signIn);

export default router;
