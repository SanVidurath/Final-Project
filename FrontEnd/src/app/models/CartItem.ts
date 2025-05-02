import { Rating } from "./Rating";

export interface CartItem {
    id:number;
    title: string;
    category: string;
    description: string;
    image: string;
    unitPrice: number;
    quantity: number;
    finalPrice: number;
    rating: Rating;
}