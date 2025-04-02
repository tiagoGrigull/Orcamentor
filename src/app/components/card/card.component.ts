import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { Pessoas } from '../container/container.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../container/container.component';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule, CommonModule, ContainerComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() pessoa!: Pessoas;
 
  @Output() addNewContact = new EventEmitter<void>();
  @Output() pessoaRemovida = new EventEmitter<Pessoas>();
  @Output() delete = new EventEmitter<number>();
  @Input() index!: number;

}

