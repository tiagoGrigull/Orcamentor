import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { ContatoService } from '../../services/contato.service'; 
import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  dados: any;
  contatosApi: any;

  constructor( private contatoService: ContatoService, private router: Router) {  }

  ngOnInit(): void {
    this.obterContatos();
  }

  obterContatos() {
    this.contatoService.obterContatos().subscribe({
      next: (response) => {
        
        this.contatosApi = response;
      },
      error: (erro) => {
        alert('Ocorreu um erro ao buscar os contatos na api => /api/Contatos');
        console.log(`Ocorreu um erro ao realizar a requisição: ${erro}`);        
      },
    });
  }
  //Aki implementar a chamada no back com a service de contatos
  removeItem(index: number) {
    this.contatos.splice(index, 1);
  }

  filter(filtro: string) {
    this.contatosApi = this.contatos.filter((contato) =>
      contato.nome.toLowerCase().includes(filtro.toLowerCase())
    );
  }

  addItem() {
    this.router.navigate(['/contato-cadastro']);
   // this.contatos.push({ nome: 'Novo contato', email: ' ', telefone: ' ' });
  }

  @Input() titulo: string = 'Contatos';
  @Input() descricao: string = 'Contatos para realização de orçamentos';
  @Input() notaRodape: string = 'Nota de rodapé importante!';

  contatos: Array<CardComponent> = [];
}

interface Contato {
  nome: string;
  email: string;
  numero: string;
}