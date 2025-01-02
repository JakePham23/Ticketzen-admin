'use strict'
import passport from "passport";
// import transporter from "../../configs/nodemailer.js";
import UserModel from "../models/user.model.js";


class AccessController{
    async login(req, res, next){
        passport.authenticate("local-login", (err, user, info) => {
            if (err) return next(err);
            if (!user) {
                return res.render("login", { errorMessage: info.message });
            }
            req.logIn(user, (err) => {
                if (err) return next(err);
                return res.redirect("/?login=success");
            });
        })(req, res, next);
    }

    async logout (req, res, next) {
        req.logout((err) => {
            if (err) return next(err);

            req.session.destroy((err) => {
                if (err) return next(err);
            });
            res.redirect("/auth/login");
        });
    };

}

export default new AccessController()