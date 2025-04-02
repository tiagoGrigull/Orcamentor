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
  @Output() pessoaEditada = new EventEmitter<Pessoas>();
  @Output() addNewContact = new EventEmitter<void>();
  @Output() pessoaRemovida = new EventEmitter<Pessoas>();
  @Output() delete = new EventEmitter<number>();
  @Input() index!: number;

  isEditing = false;

  addNewCon(){
    console.log("novo contato adicionado");
    this.addNewContact.emit();
  }

  alterCard(){
    this.isEditing = true;
    console.log("alterando contato");
  }

  saveEdition(){
    this.isEditing = false;
    this.pessoaEditada.emit(this.pessoa);
  }

  deleteCard(){
    console.log("Deletando contato");
  }

  removeItem() {
    this.delete.emit(this.index); // Emite o índice para o ContainerComponent
  }

}

