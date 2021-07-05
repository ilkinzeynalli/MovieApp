import { Component } from "@angular/core";
import { Product } from "./models/product.model";
import { ProductRepository } from "./models/repository.model";

@Component({
    selector:"app",
    templateUrl:"./product.component.html",
    styleUrls: ["./product.component.css"]
})
export class ProductComponent{
    productRepository: ProductRepository;
    product: Product;
    disabled: boolean = true;

    constructor(){
        this.productRepository = new ProductRepository();
        this.product = this.productRepository.getProductById(1);
    }

    getClasses(id:number){
        let product = this.productRepository.getProductById(id);

        return ((product.price ?? 0) < 2000 ? "bg-primary":"bg-secondary" + " m-2 p-2")
    }

    getClassesMap(id: number) :Object{
        let product = this.productRepository.getProductById(id);

        return {
            "bg-primary": (product.price ?? 0) <= 2000,
            "bg-secondary": (product.price ?? 0) > 2000,
            "text-white": product.name == "Product 2"
        };
    }

}