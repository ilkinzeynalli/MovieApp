import { SimpleDatasource } from "./datasource.model";
import { Product } from "./product.model";

export class ProductRepository{
    private products:Product[];

    constructor(){
        this.products = new SimpleDatasource().getProducts();
    }

    getProduts():Product[]{
        return this.products;
    }

    getProductById(id:Number): Product{
        return this.products.filter(p=>p.id === id)[0];
    }
}