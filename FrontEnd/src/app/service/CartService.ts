import { Injectable } from "@angular/core";
import { Product } from "../models/Product";
import { Customer } from "../models/Customer";
import { HttpClient } from "@angular/common/http";
import { env } from "../env/env.test";

@Injectable({
    providedIn: 'root',
})
export class CartService{
    constructor(private http:HttpClient){}
    private cart:Product[]=[];
    private baseUrl = `${env.ORDER_SERVICE_URL}`

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

    addCustomer(customer: Customer) {
    return this.http.post(`${this.baseUrl}/cart/customer`, customer, {
      responseType: 'text',
    });
  }
}