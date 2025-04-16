import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { ContatoService } from '../../services/contato.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  protected pessoas: Array<Pessoas> = [];

  @Output() pessoaEditada = new EventEmitter<Pessoas>();

  isEditing = false;
  editIndex: number | null = null;

  constructor(private contatoService: ContatoService, private router: Router) {}

  ngOnInit(): void {
    this.contatoService.obterContatos().subscribe({
      next: (contatos) => {
        this.pessoas = contatos;
      },
      error: (err) => {
        console.error('Erro ao obter contatos:', err);
      }
    });
  }

  addNewCon() {
  this.router.navigate(['/contato-cadastro']);
  }

  removeItem(index: number) {
    this.pessoas.splice(index, 1);
  }

  alterCard(index: number) {
    this.isEditing = true;
    this.editIndex = index;
  }

  saveEdition() {
    if (this.editIndex !== null) {
      this.pessoaEditada.emit(this.pessoas[this.editIndex]);
    }
    this.isEditing = false;
    this.editIndex = null;
  }

  cancelEdit() {
    this.isEditing = false;
    this.editIndex = null;
  }
}

export interface Pessoas {
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
}
