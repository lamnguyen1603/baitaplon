"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const user_1 = require("../model/user");
class UserService {
    constructor() {
        this.getAll = async () => {
            let users = await this.userRepository.find();
            return users;
        };
        this.checkUser = async (user) => {
            let userCheck = await this.userRepository.findOneBy({ username: user.username, password: user.password });
            if (!userCheck) {
                return null;
            }
            return userCheck;
        };
        this.saveUser = async (user) => {
            console.log(user);
            return this.userRepository.save(user);
        };
        this.findById = async (id) => {
            let user = await this.userRepository.findOneBy({ id: id });
            return user;
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=UserService.js.map