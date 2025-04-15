import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Orcamento';

  showNavBar = true;

  constructor(private router: Router) {
      this.router.events.subscribe(event =>{
        if(event instanceof NavigationEnd){
          this.showNavBar = !this.router.url.includes('login');
        }
      })
      }
    }