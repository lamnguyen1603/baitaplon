import {AppDataSource} from "../data-source";
import {Product} from "../model/product";

class ProductService{
    private productRepository
    constructor() {
        this.productRepository = AppDataSource.getRepository(Product)
    }
    getAll = async () => {
        let products = await this.productRepository.find();
        return products
    }
    saveProduct = async (product) => {
        console.log(product)
        return this.productRepository.save(product)
    }
    findByName = async (search)=> {
        let sql =`select *
                  from product
                  where name like '%${search.search}%'`
        let products = await this.productRepository.query(sql);
        // console.log(products)
        if(!products){
            return null;
        }
        return products;
    }
    findById = async (id)=> {
        let products = await this.productRepository.findOneBy({id :id})
        return products
    }
    moveProduct = async (id) => {
        let product = await this.productRepository.findOneBy({id : id});
        if(!product){
            return null
        }
        return this.productRepository.delete({id : id});
    }
    update = async (id,newProduct) => {
        let product = await this.productRepository.findOneBy({id : id});
        if(!product){
            return null
        }
        return this.productRepository.update({id : id},newProduct);
    }
}
export default new ProductService();