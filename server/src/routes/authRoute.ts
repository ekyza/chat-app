import express from "express";

import { signUp, signIn } from "../controllers/authController";

const router = express.Router();

router.post("/auth/sign-up", signUp);
router.post("/auth/sign-in", signIn);

export default router;
