import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Pessoas} from  '../components/container/container.component';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

     private apiUrl = `http://localhost:5248/Contatos`;

  contatosApi: any;
  dados: any;

  // Lista de contatos visíveis no frontend
  pessoas: Array<Pessoas> = [];

  constructor(private http: HttpClient) { }

  // Remove um contato da lista
  removeItem(index: number): void {
    this.pessoas.splice(index, 1);
  }

  // Obtém os contatos da API e popula a lista
  carregarContatos(): void {
    this.http.get<Pessoas[]>(this.apiUrl).subscribe({
      next: (response) => {
        this.contatosApi = response;
        for (let pessoa of this.contatosApi) {
          this.pessoas.push({
            nome: pessoa.nome,
            email: pessoa.email,
            telefone: pessoa.telefone,
            endereco: pessoa.endereco,
          });
        }
      },
      error: (erro) => {
        console.log(`Erro ao obter contatos: ${erro}`);
      }
    });
  }

  // Alternativamente, se você quiser apenas retornar o Observable:
  obterContatos(): Observable<Pessoas[]> {
    return this.http.get<Pessoas[]>(this.apiUrl);
  }
}
