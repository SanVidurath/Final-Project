import { OrderDetail } from "./OrderDetail";

export class Order{
    id: number | null;
    date: string;
    employeeId: number;
    employeeName: string;
    customerId: number;
    customerName: string;
    total: number;
    paymentType: string;
    orderDetails: OrderDetail[];

    constructor(id: number | null, date: string, employeeId: number, employeeName: string, customerId: number, customerName: string, total: number, paymentMethod: string, orderDetails: OrderDetail[]) {
        this.id = id;
        this.date = date;
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.customerId = customerId;
        this.customerName = customerName;
        this.total = total;
        this.paymentType = paymentMethod;
        this.orderDetails = orderDetails;
    }
}