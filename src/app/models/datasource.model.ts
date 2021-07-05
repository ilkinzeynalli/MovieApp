import { Product } from "./product.model";

export class SimpleDatasource{
    private products:Product[];

    constructor(){
        this.products = new Array<Product>(
            new Product(1,"Product 1",1000,"Description 1","1.jpg"),
            new Product(2,"Product 2",2000,"Description 2","2.jpg"),
            new Product(3,"Product 3",3000,"Description 3","3.jpg"),
            new Product(4,"Product 4",4000,"Description 4","4.jpg"),
            new Product(5,"Product 5",5000,"Description 5","5.jpg"),
            new Product(6,"Product 6",6000,"Description 6","6.jpg")
        );
    }

    getProducts(): Product[]{
        return this.products;
    }
}