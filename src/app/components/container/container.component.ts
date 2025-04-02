import { Component , Input} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  
  constructor(private http : HttpClient) {}
  dados:any;
  ngOnInit():void{
    this.obterPrevisoes();
  }

  obterPrevisoes():void{
    let url = "http://localhost:5248/WeatherForecast";
    this.http.get(url).subscribe({
      next: (response) => {
        this.dados = response;
        console.log("deu certo");
      },
      error: (erro) => {
        alert("Deu Ruim");
        console.log(`Erro ao obter as previsões: ${erro}`)
      }
    })
  }


  protected pessoas: Array<Pessoas>=[
    { 
      nome: 'teste',
      email: 'teste@gmail.com',
      telefone: '4002-8922',
      endereco: 'teste'
    },
    {
      nome:'teste2',
      email: 'oi',
      telefone: '12345',
      endereco: 'teste'
    }
  ]
  
  addNewCon(){
    console.log("Adicionando novo contato");
    this.pessoas.push({ nome: 'Novo Contato',email:"novo.email@email.com", telefone: '0000-0000', endereco:'novo Endereco' });
  }
  
  removeItem(index: number){
    this.pessoas.splice(index,1);
  }

}



export type Pessoas ={
  nome: string;
  email: string;
  telefone: string;
  endereco: string
}
