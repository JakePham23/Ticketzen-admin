import path from "path";
import multer from "multer";
import bcrypt from "bcrypt";
import UserModel from "../models/user.model.js";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img/uploads/avatars/');
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

class UserController{
    uploadAvatar = upload.single('profilePicture');
    async updateProfile(req, res, next) {
        let { username, currentPassword, newPassword, confirmPassword } = req.body;



        if(username){
            const usernamePattern = /^[a-zA-Z0-9_]+$/; // Only letters, numbers, and underscores
            if (!usernamePattern.test(username)) {
                return next(new Error("Username can only contain letters, numbers, and underscores"));
            }
        }
        let user = req.user; // assuming user is already authenticated
        let userId = user.id
        let hashedPassword
        user = await UserModel.getUser(userId);
        console.log(user)
        if(currentPassword && newPassword && confirmPassword){
            console.log({
                password: user.password,
                currentPassword,
                newPassword,
                confirmPassword
            })
            if (newPassword !== confirmPassword) {
                return next(new Error("Password does not match"));
            }

            const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$/!%*?&]{8,}$/;
            if (!passwordPattern.test(newPassword)) {
                return next(new Error("Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character"));
            }


            const isMatch = await bcrypt.compare(currentPassword, user.password); // compare hashed password
            if (!isMatch) {
                return next(new Error("Current password is incorrect"));
            }
            // Hash the new password before saving it
            hashedPassword = await bcrypt.hash(newPassword, 10);
            // Update the user details
        }
        console.log(user)
        if(req.file){
            console.log(`Uploaded avatar path: /img/uploads/avatars/${req.file.filename}`);
            var avatar = `img/uploads/avatars/${req.file.filename}`;
            if (user.avatar) {
                const oldAvatarPath = path.join(__dirname, `/public/img/uploads/avatars/${user.avatar}`);
                if (fs.existsSync(oldAvatarPath)) {
                    fs.unlinkSync(oldAvatarPath); // Delete the old avatar file
                }
            }
        }
        try {
            // Update username and password (if needed) in the database
            const result = await UserModel.updateUser({ userId, username, newPassword: hashedPassword, avatar });
            if(result){
                res.status(500).json({message: 'successfully'})
            }
            // res.redirect("/profile"); // or whatever route you want to redirect to after successful update
        } catch (error) {
            next(error);
        }
    }
    async getProfilePage(req, res) {
        const user = await UserModel.getUser(req.user.id)
        console.log(user)
        res.render("profile", {user: user}); // Render profile page
    }
}



export default new UserController();
