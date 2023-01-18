import {Router} from "express";
import homeController from "../controller/HomeController";

export const productRouter = Router();
productRouter.get('/create',homeController.showFormCreate);
productRouter.post('/create',homeController.createProduct);
productRouter.get('/delete/:id',homeController.showFormDelete);
productRouter.get('/remove/:id',homeController.moveProductAd);
productRouter.get('/edit/:id',homeController.showFormEdit);
productRouter.post('/edit/:id',homeController.updateProduct);