import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CardComponent } from '../components/card/card.component';


export interface ContatoRequest {
  id: string;
  nome: string;
  email: string;
  numero: string;
}

export interface ContatoResponse {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private apiUrl = `${environment.apiUrl}/contatos`;
  constructor(private http: HttpClient ) { }

 obterContatos(): Observable<CardComponent[]> {
    return this.http.get<CardComponent[]>(this.apiUrl);
  }


  salvar(contato: ContatoRequest): Observable<ContatoResponse> {
    return this.http.post<ContatoResponse>(this.apiUrl, contato);
  }

}