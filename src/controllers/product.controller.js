'use strict';
import ProductModel from "../models/product.model.js";
import path from 'path'
import multer from "multer";
import bcrypt from "bcrypt";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img/uploads/movies/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/;
        const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimeType = fileTypes.test(file.mimetype);
        if (extName && mimeType) {
            return cb(null, true);
        }
        cb(new Error("Only images are allowed!"));
    }
});
class ProductController {
    uploadPoster = upload.single('moviePoster');
    async updateProduct(req, res){
        const {id, category, description, price, language} = req.body
        let posterUrl = req.file ? req.file.path : null;

        try {
            const product = await ProductModel.getProductById(id);

            if (!product) {
                return res.status(404).json({ message: "Sản phẩm không tồn tại" });
            }
            // Xử lý ảnh poster (nếu có ảnh mới)
            if (posterUrl && product.poster) {
                // Nếu có ảnh mới, xóa ảnh cũ (nếu có)
                fs.unlinkSync(product.poster);
            }

            const updatedProduct = await ProductModel.updateProduct(id, {
                category,
                description,
                price,
                language,
                poster: posterUrl || product.poster
            });
            res.json(updatedProduct)
        } catch (error) {
            console.error("Lỗi khi cập nhật sản phẩm:", error);
            res.status(500).json({ error: error.message });
        }
    }
    async getAllProducts(req, res) {
        const { page, limit } = req.query;
        const pagination = {
            page: parseInt(page) || 1,
            limit: parseInt(limit) || 10
        };

        try {
            const result = await ProductModel.getAllProducts(pagination);

            res.json(result);
        } catch (error) {
            console.error("Error fetching products:", error);
            res.status(500).json({ error: error.message }); // Trả về lỗi nếu có
        }
    }
    async filterProducts(req, res){
        const {title, category} = req.body

        try{
            const result = await ProductModel.filterProducts(title, category)
            res.json(result)
        } catch(error){
            console.error("Error fetching products:", error);
            res.status(500).json({ error: error.message });
        }
    }
    async sortProducts(req, res) {
        let { products, sortBy, order } = req.body;

        order = order === 'desc' ? -1 : 1;

        if (sortBy === "price") {
            products.sort((a, b) => {
                if (a.price < b.price) return -1 * order;  // So sánh giá (price)
                if (a.price > b.price) return 1 * order;
                return 0;
            });
        }
        // Sắp xếp sản phẩm theo trường 'created_at'
        else if (sortBy === "created_at") {
            products.sort((a, b) => {
                const createdAtA = new Date(a.created_at);
                const createdAtB = new Date(b.created_at);
                if (createdAtA < createdAtB) return -1 * order;
                if (createdAtA > createdAtB) return 1 * order;
                return 0;
            });
        }
        else if (sortBy === "rating") {
            products.sort((a, b) => {
                if (a.rating < b.rating) return -1 * order;
                if (a.rating > b.rating) return 1 * order;
                return 0;
            });
        }
        else {
            products.sort((a, b) => {
                const createdAtA = new Date(a.created_at);
                const createdAtB = new Date(b.created_at);
                if (createdAtA < createdAtB) return -1 * order;
                if (createdAtA > createdAtB) return 1 * order;
                return 0;
            });
        }

        res.json({ products });
    }

}

export default new ProductController();
