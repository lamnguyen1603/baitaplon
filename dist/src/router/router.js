"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const HomeController_1 = __importDefault(require("../controller/HomeController"));
const productRouter_1 = require("./productRouter");
const userRouter_1 = require("./userRouter");
exports.router = (0, express_1.Router)();
exports.router.get('/home', HomeController_1.default.showHome);
exports.router.get('/userHome', HomeController_1.default.showUserHome);
exports.router.post('/home', HomeController_1.default.searchName);
exports.router.use('/products', productRouter_1.productRouter);
exports.router.use('/users', userRouter_1.userRouter);
//# sourceMappingURL=router.js.map