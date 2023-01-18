"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductService_1 = __importDefault(require("../service/ProductService"));
const UserService_1 = __importDefault(require("../service/UserService"));
class HomeController {
    constructor() {
        this.showHome = async (req, res) => {
            let products = await ProductService_1.default.getAll();
            res.render('home', { products: products });
        };
        this.showUserHome = async (req, res) => {
            let products = await ProductService_1.default.getAll();
            let user = req.session.User;
            res.render('userHome', { products: products, user: user });
        };
        this.showFormCreate = async (req, res) => {
            res.render('products/create');
        };
        this.createProduct = async (req, res) => {
            if (req.files) {
                let image = req.files.image;
                if ("mv" in image) {
                    await image.mv('./public/storage/' + image.name);
                    let product = req.body;
                    product.image = '/storage/' + image.name;
                    await ProductService_1.default.saveProduct(product);
                    res.redirect(301, '/home');
                }
            }
        };
        this.showFormDelete = async (req, res) => {
            let id = req.params.id;
            res.render('products/delete', { id: id });
        };
        this.moveProductAd = async (req, res) => {
            let id = req.params.id;
            await this.productService.moveProduct(id);
            res.redirect(301, '/home');
        };
        this.showFormEdit = async (req, res) => {
            let id = req.params.id;
            let product = await this.productService.findById(id);
            res.render('products/edit', { products: product });
        };
        this.updateProduct = async (req, res) => {
            if (req.files) {
                let image = req.files.image;
                if ("mv" in image) {
                    await image.mv('./public/storage/' + image.name);
                    let product = req.body;
                    let id = req.params.id;
                    product.image = '/storage/' + image.name;
                    await this.productService.update(id, product);
                    res.redirect(301, '/home');
                }
            }
        };
        this.searchName = async (req, res) => {
            let search = req.body;
            let products = await ProductService_1.default.findByName(search);
            res.render('home', { products: products });
        };
        this.productService = ProductService_1.default;
        this.userService = UserService_1.default;
    }
}
exports.default = new HomeController();
//# sourceMappingURL=HomeController.js.map