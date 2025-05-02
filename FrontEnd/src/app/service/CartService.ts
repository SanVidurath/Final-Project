import { Injectable } from "@angular/core";
import { Product } from "../models/Product";

@Injectable({
    providedIn: 'root',
})
export class CartService{
    private cart:Product[]=[];

    addToCart(product: Product):boolean{
        const exists = this.cart.some((p)=>p.id===product.id);
        if(!exists){
            this.cart.push(product);
            return true;
        }
        return false;
    }

    removeFromCart(index:number):void{
        if(index !== -1){
            this.cart.splice(index, 1);
        }
    }

    emptyCart():void{
        this.cart.length=0;
    }

    getCart():Product[]{
        return this.cart;
    }
}