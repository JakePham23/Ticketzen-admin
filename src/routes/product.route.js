import express from "express";
const router = express.Router();
import productController from "../controllers/product.controller.js";
router.get('/products', productController.getAllProducts)
router.get('/products/filters', productController.filterProducts)
router.post('/products/update', productController.updateProduct)
export default router