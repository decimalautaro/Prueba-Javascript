import express from "express";
import { login } from "../controllers/login.js";

const router = new express.Router();

router.post("/signIn", login)

export default router;