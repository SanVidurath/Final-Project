import { Injectable } from '@angular/core';
import { Client, Message } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private client!:Client;

  connect() {
    this.client = new Client({
      brokerURL: undefined,
      webSocketFactory: () => new SockJS('http://localhost:8080/greetings-ws'),
      reconnectDelay: 5000,
    });

    this.client.onConnect = () => {
      this.client.subscribe('/topic/greetings', (message: Message) => {
        Swal.fire('Seasonal Greeting', message.body, 'success');
      });
    };

    this.client.activate();
  }
}
