import { Component } from '@angular/core';
import { NavbarComponent } from "./common/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./common/footer/footer.component";
import { GreetingsComponentComponent } from "./common/greetings-component/greetings-component.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, FooterComponent, GreetingsComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd';
}
