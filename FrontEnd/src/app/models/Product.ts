import { Rating } from "./Rating";

export class Product {
  constructor(
    public id: number, 
    public title: string, 
    public category: string, 
    public description: string, 
    public image:string, 
    public price:number, 
    public rating:Rating
    ) {
  }
}
