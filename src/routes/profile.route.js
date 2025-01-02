import express from "express";
const router = express.Router();

import profileController  from "../controllers/profile.controller.js";

router.post("/profile", profileController.uploadAvatar, profileController.updateProfile);

export default router