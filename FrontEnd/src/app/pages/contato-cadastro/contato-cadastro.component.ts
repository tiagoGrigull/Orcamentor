import { Component } from '@angular/core';
import{  Router } from '@angular/router';

@Component({
  selector: 'app-contato-cadastro',
  standalone: true,
  imports: [],
  templateUrl: './contato-cadastro.component.html',
  styleUrl: './contato-cadastro.component.css'
})
export class ContatoCadastroComponent {


  constructor(private router: Router){}
  goCard(){
    this.router.navigate(['/Contatos']);
  }
}
