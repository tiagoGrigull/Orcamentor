import { Component , Input,Output, EventEmitter} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule, ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  
  constructor(private http : HttpClient) {}
  dados:any;
  contatosApi:any;
  ngOnInit():void{
    this.obterPrevisoes();
    this.obterContatos();
  }

  obterContatos(){
    let url= "http://localhost:5248/api/Contatos";
    this.http.get(url).subscribe({
      next: (response) =>{
        this.contatosApi = response;  
        for (let pessoa of this.contatosApi)
        this.pessoas.push({
          nome: pessoa.nome,
          email: pessoa.email,
          telefone: pessoa.telefone,
          endereco: pessoa.endereco,
        });
      },
      error: (erro) =>{
        console.log(`Erro ao obter contatos: ${erro}`)
      },
    })
  }
  
  

  obterPrevisoes():void{
    let url = "http://localhost:5248/WeatherForecast";
    this.http.get(url).subscribe({
      next: (response) => {
        this.dados = response;
        console.log(this.dados);
      },
      error: (erro) => {
        alert("Deu Ruim");
        console.log(`Erro ao obter as previsões: ${erro}`)
      }
    })
  }


  protected pessoas: Array<Pessoas>=[
  ];
  
  addNewCon(){
    console.log("Adicionando novo contato");
    this.pessoas.push({ nome: 'Novo Contato',email:"novo.email@email.com", telefone: '0000-0000', endereco:'novo Endereco' });
  }
  
  removeItem(index: number){
    this.pessoas.splice(index,1);
  }

   @Output() pessoaEditada = new EventEmitter<Pessoas>();
  isEditing = false;
  
  editIndex: number | null = null;

  alterCard(index: number) {
    this.isEditing = true;
    this.editIndex = index;
    console.log("Alterando contato", this.pessoas[index]);
  }


  saveEdition() {
    if (this.editIndex !== null) {
      console.log("Salvando edição:", this.pessoas[this.editIndex]);
      this.pessoaEditada.emit(this.pessoas[this.editIndex]); // Emitindo o contato atualizado
    }
    this.isEditing = false;
    this.editIndex = null;
  }
  

  cancelEdit() {
    this.isEditing = false;
    this.editIndex = null;
  }
  
  
}

interface Pessoas {
  nome: string;
  email: string;
  telefone: string;
  endereco: string
}
