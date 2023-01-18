import { Request, Response } from "express";
declare class HomeController {
    private productService;
    private userService;
    constructor();
    showHome: (req: Request, res: Response) => Promise<void>;
    showUserHome: (req: Request, res: Response) => Promise<void>;
    showFormCreate: (req: Request, res: Response) => Promise<void>;
    createProduct: (req: Request, res: Response) => Promise<void>;
    showFormDelete: (req: Request, res: Response) => Promise<void>;
    moveProductAd: (req: Request, res: Response) => Promise<void>;
    showFormEdit: (req: Request, res: Response) => Promise<void>;
    updateProduct: (req: Request, res: Response) => Promise<void>;
    searchName: (req: Request, res: Response) => Promise<void>;
}
declare const _default: HomeController;
export default _default;
