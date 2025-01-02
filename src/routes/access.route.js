import express from "express";
import passport from "passport";

const router = express.Router();
import accessController from "../controllers/access.controller.js";

router.post("/login", accessController.login);
router.post("/logout", accessController.logout);

export default router;
