import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/Product";
import { env } from "../env/env.test";

@Injectable({
    providedIn: 'root',
})
export class ProductService{
    constructor(private http:HttpClient){}

    private baseUrl:string = `${env.PRODUCT_SERVICE_URL}/product`

    getAll(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.baseUrl}/all`);
    }
}