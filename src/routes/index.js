import accessRoutes from './access.route.js';
import express from 'express';
const router = express.Router();
import profileRoutes from './profile.route.js'
import accountRoutes from "./account.route.js";
import productRoutes from "./product.route.js"
router.use('/auth', accessRoutes);
router.use(profileRoutes)
router.use(accountRoutes)
router.use(productRoutes)
export default router