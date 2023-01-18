import {Request, Response} from "express";
import productService from "../service/ProductService";
import userService from "../service/UserService";

class UserController {
    private userService;
    private productService;
    constructor() {
        this.userService = userService;
        this.productService =productService;
    }
   showFormLogin = async (req : Request, res : Response) => {
       await  this.userService.getAll();
       res.render('users/login')
   }
   login = async (req : Request, res : Response) => {
       let user = await this.userService.checkUser(req.body);
       if(user.role ==='Admin') {
           // @ts-ignore
           req.session.User = user
           res.redirect(301,'/home');
       }else if(user.role === 'member'){
           // @ts-ignore
           req.session.User = user
           res.redirect(301,'/userHome');
       }else{
           res.redirect(301,'/users/login');
       }
   }
   showFormRegister = async (req : Request, res : Response) => {
       res.render('users/register')
   }
   Register = async (req : Request, res : Response) => {
       let user = req.body;
       await this.userService.saveUser(user)
       res.render('users/login')
   }
}
export default new UserController()