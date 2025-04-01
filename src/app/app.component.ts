import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ContainerComponent } from "./components/container/container.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { CardComponent } from "./components/card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContainerComponent, NavBarComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Orcamento';
  protected pessoas: Array<Pessoas>=[
    { 
      nome: 'teste',
      email: 'teste@gmail.com',
      telefone: '4002-8922'
    }
  ]
  
}

export type Pessoas ={
  nome: string;
  email: string;
  telefone: string;
}