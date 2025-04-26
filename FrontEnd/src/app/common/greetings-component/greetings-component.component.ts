import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../../service/WebSocketService';

@Component({
  selector: 'app-greetings-component',
  imports: [],
  templateUrl: './greetings-component.component.html',
  styleUrl: './greetings-component.component.css'
})
export class GreetingsComponentComponent implements OnInit{
  constructor(private wsService:WebSocketService){}
  ngOnInit(): void {
    this.wsService.connect();
  }


}
