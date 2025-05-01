import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { env } from '../../env/env.test';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent{

  
  router = inject(Router);

  goToComponent(): void {
    this.router.navigate(['/products']);
  }

  
}
