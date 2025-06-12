import { Order } from './Order';
import { OrderDetail } from './OrderDetail';

export class OrderRequest {
  constructor(public order: Order, public orderDetails: OrderDetail[]) {}
}
