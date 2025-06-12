export class OrderDetail {
  constructor(
    public productId: number,
    public productName: string,
    public unitPrice: number,
    public quantityPurchased: number
  ) {}
}
