import {Router} from "express";
import homeController from "../controller/HomeController";
import {productRouter} from "./productRouter";
import {userRouter} from "./userRouter";

export const router = Router();
router.get('/home',homeController.showHome)
router.get('/userHome',homeController.showUserHome)
router.post('/home',homeController.searchName)
router.use('/products',productRouter);
router.use('/users',userRouter)