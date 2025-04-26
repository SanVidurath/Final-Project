import { Component } from '@angular/core';
import { ProductsComponent } from "./pages/products/products.component";
import { GreetingsComponentComponent } from "./common/greetings-component/greetings-component.component";
import { NavbarComponent } from "./common/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ProductsComponent, GreetingsComponentComponent, NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd';
}
