import express from "express";
const router = express.Router();

import accountController from "../controllers/account.controller.js";
router.get("/account", accountController.getAllAccount);
router.get("/account/filters", accountController.filter)
router.get('/account/sorts', accountController.sort)
router.get('/account/manage', accountController.manageUser)
export default router