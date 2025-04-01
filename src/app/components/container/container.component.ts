import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
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
