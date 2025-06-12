import { Injectable } from '@angular/core';
import { env } from '../env/env.test';
import { OrderRequest } from '../models/OrderRequest';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = `${env.ORDER_SERVICE_URL}/cart`;

  placeOrder(orderRequest: OrderRequest): Observable<{ message: string }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<{ message: string }>(
      `${this.baseUrl}`,
      orderRequest,
      { headers }
    );
  }
}
