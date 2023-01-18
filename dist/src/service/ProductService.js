"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const product_1 = require("../model/product");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let products = await this.productRepository.find();
            return products;
        };
        this.saveProduct = async (product) => {
            console.log(product);
            return this.productRepository.save(product);
        };
        this.findByName = async (search) => {
            let sql = `select *
                  from product
                  where name like '%${search.search}%'`;
            let products = await this.productRepository.query(sql);
            if (!products) {
                return null;
            }
            return products;
        };
        this.findById = async (id) => {
            let products = await this.productRepository.findOneBy({ id: id });
            return products;
        };
        this.moveProduct = async (id) => {
            let product = await this.productRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return this.productRepository.delete({ id: id });
        };
        this.update = async (id, newProduct) => {
            let product = await this.productRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return this.productRepository.update({ id: id }, newProduct);
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(product_1.Product);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=ProductService.js.map