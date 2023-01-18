import { Request, Response } from "express";
declare class UserController {
    private userService;
    private productService;
    constructor();
    showFormLogin: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<void>;
    showFormRegister: (req: Request, res: Response) => Promise<void>;
    Register: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;
