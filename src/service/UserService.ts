import {AppDataSource} from "../data-source";
import {User} from "../model/user";

class UserService {
    private userRepository;
    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }
    getAll = async () => {
        let users = await this.userRepository.find();
        // console.log(users)
        return users
    }
    checkUser = async (user) => {
        // console.log(user)
        let userCheck = await this.userRepository.findOneBy({username: user.username, password: user.password});

        if (!userCheck) {
            return null;
        }
        return userCheck;
    }
    saveUser = async (user) => {
        console.log(user)
        return this.userRepository.save(user)
    }
    findById = async (id)=> {
        let user = await this.userRepository.findOneBy({id :id})
        return user
    }
}
export default new UserService();
