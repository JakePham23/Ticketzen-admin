'use strict'
import UserModel from '../models/user.model.js';
class AccountController{
    async getAllAccount(req, res){
        let { page = 1, limit = 10 } = req.query; // Default to page 1 and 10 items per page
        let offset = (page - 1) * limit;

        try {
            let accounts = await UserModel.getAllUser({offset, limit});  // Pass the pagination params
            res.json(accounts);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching accounts' });
        }
    }
    async filter(req, res){
        let {username, email} = req.body

        let filters = {
            username: username || "",
            email: email || "",
        }
        try {
            // Lọc tài khoản theo điều kiện
            let accounts = await UserModel.filterUser(filters);
            res.json(accounts);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error filtering accounts' });
        }
    }
    async sort(req, res) {
        let { accounts, sortBy, order } = req.body;

        // Đảm bảo rằng order có giá trị hợp lệ, mặc định là 'asc'
        order = order === 'desc' ? -1 : 1;

        if (sortBy === "username") {
            accounts.sort((a, b) => {
                if (a.username < b.username) return -1 * order;
                if (a.username > b.username) return 1 * order;
                return 0;
            });
        } else if (sortBy === "email") {
            accounts.sort((a, b) => {
                if (a.email < b.email) return -1 * order;
                if (a.email > b.email) return 1 * order;
                return 0;
            });
        } else {
            accounts.sort((a, b) => {
                const createdAtA = new Date(a.created_at);  // Đảm bảo định dạng ngày tháng hợp lệ
                const createdAtB = new Date(b.created_at);
                if (createdAtA < createdAtB) return -1 * order;
                if (createdAtA > createdAtB) return 1 * order;

                // Nếu tất cả đều giống nhau, có thể sắp xếp theo email hoặc username nữa.
                if (a.email < b.email) return -1 * order;
                if (a.email > b.email) return 1 * order;

                return 0;
            });
        }

        res.json(accounts);  // Trả về kết quả đã sắp xếp
    }
    async manageUser(req, res){
        let {email, status} = req.body

        // if(email){
            let info = UserModel.manageUser(email, status)
            res.json(info)
        // }
        // else res.status(404).json("error when managing account")
    }
}

export default new AccountController()