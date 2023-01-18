"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductService_1 = __importDefault(require("../service/ProductService"));
const UserService_1 = __importDefault(require("../service/UserService"));
class UserController {
    constructor() {
        this.showFormLogin = async (req, res) => {
            await this.userService.getAll();
            res.render('users/login');
        };
        this.login = async (req, res) => {
            let user = await this.userService.checkUser(req.body);
            if (user.role === 'Admin') {
                req.session.User = user;
                res.redirect(301, '/home');
            }
            else if (user.role === 'member') {
                req.session.User = user;
                res.redirect(301, '/userHome');
            }
            else {
                res.redirect(301, '/users/login');
            }
        };
        this.showFormRegister = async (req, res) => {
            res.render('users/register');
        };
        this.Register = async (req, res) => {
            let user = req.body;
            await this.userService.saveUser(user);
            res.render('users/login');
        };
        this.userService = UserService_1.default;
        this.productService = ProductService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map