import db from "../dbs/init.db.js";
const ProductModel = {
    getAllProducts: async (pagination = { page: 1, limit: 10 }) => {
        const { page, limit } = pagination;
        const offset = (page - 1) * limit;
        try {
            // Truy vấn tất cả các sản phẩm với phân trang
            const products = await db('products')
                .select('*')  // Chọn tất cả các trường hoặc chỉ chọn các trường bạn cần
                .limit(limit)  // Giới hạn số lượng sản phẩm theo limit
                .offset(offset);  // Bỏ qua số lượng sản phẩm ở phần trước dựa trên trang

            const totalProducts = await db('products').count('* as total');
            return {
                products,
                total: totalProducts[0].total,  // Tổng số sản phẩm trong cơ sở dữ liệu
                page,
                limit
            };
        }catch (error) {
            console.error("Error fetching products:", error);
            throw new Error("Error fetching products");
        }
    },
    filterProducts: async (filters) => {
        const { name, category } = filters;

        try {
            // Xây dựng câu truy vấn với các bộ lọc
            let query = db('products').select('*').join("genres", "products.genre", "=", "genres.id")

            if (name) {
                query = query.where('name', 'like', `%${name}%`);
            }
            if (category) {
                query = query.andWhere("genres.id", "like", `%${category}%`);
            }


            // Lấy kết quả sau khi áp dụng bộ lọc
            const products = await query;

            return products;
        } catch (error) {
            console.error("Error filtering products:", error);
            throw new Error("Error filtering products");
        }
    },
    getProductById: async (id) => {
        try {
            const product = await db('products')
                .where('id', id)

            return product
        } catch (error) {
            console.error("Error fetching product by ID:", error);
            throw new Error("Lỗi khi lấy sản phẩm theo ID");
        }
    },
    updateProduct: async (id, product) => {
        const { category, description, price, language, poster } = product;

        try {
            // Cập nhật sản phẩm chính (products)
            let updatedProduct  = await db('products')
                .where('id', id)
                .update({
                    category,
                    description,
                    price,
                    language,
                    poster,
                    updated_at: new Date()
                });
            if(!updatedProduct){
                updatedProduct = await db('products').select('.*')
            }
            if(category){
                await db('genres')
                    .where('id', updatedProduct.genres)
                    .update({
                        name: category
                    });
            }

            if(language){
                await db('languages')
                    .where('id',  updatedProduct .languages)
                    .update({
                        name: language
                    });
            }


            return { message: "Product updated successfully" };

        } catch (error) {
            console.error("Error updating product:", error);
            throw new Error("Error updating product");
        }
    },

}

export default ProductModel