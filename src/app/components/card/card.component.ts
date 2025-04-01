import { Component, Input, Output } from '@angular/core';
import { Pessoas } from '../container/container.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() pessoa!: Pessoas;
  
}

