import {Request, Response} from "express";
import productService from "../service/ProductService";
import userService from "../service/UserService";

class HomeController {
    private productService;
    private userService;
    constructor() {
        this.productService = productService
        this.userService = userService
    }
    showHome = async (req: Request,res:Response) => {
        let products = await productService.getAll()
        // console.log(products)
        res.render('home',{products: products})
    }
    showUserHome = async (req: Request,res:Response) => {
        let products = await productService.getAll()
        // @ts-ignore
        let user = req.session.User
        res.render('userHome',{products: products,user : user})
    }
    showFormCreate = async (req: Request,res:Response) => {
        res.render('products/create');
    }
    createProduct = async (req: Request,res:Response) => {
        if (req.files) {
            let image = req.files.image;
            if ("mv" in image) {
                await image.mv('./public/storage/' + image.name);
                let product = req.body;
                product.image = '/storage/' + image.name;
                await productService.saveProduct(product)
                res.redirect(301, '/home');
            }
        }
    }
    showFormDelete  = async (req: Request,res:Response) => {
        let id = req.params.id;
        res.render('products/delete',{id : id});
    }
    moveProductAd = async (req: Request,res:Response) => {
        let id = req.params.id;
        await this.productService.moveProduct(id)
        res.redirect(301, '/home')
    }
    showFormEdit  = async (req: Request,res:Response) => {
        let id = req.params.id;
        let product = await this.productService.findById(id);
        res.render('products/edit',{products : product});
    }
    updateProduct = async (req: Request,res:Response) => {
        if (req.files) {
            let image = req.files.image;
            if ("mv" in image) {
                await image.mv('./public/storage/' + image.name);
                let product = req.body;
                let id = req.params.id
                product.image = '/storage/' + image.name;
                await this.productService.update(id,product)
                res.redirect(301, '/home');
            }
        }
    }

    searchName = async (req: Request, res: Response) => {
        let search = req.body
        let products = await productService.findByName(search)
        // console.log(products)
        res.render('home', {products: products})

    }
}
export default new HomeController();