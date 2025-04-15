import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
email: string = '';
senha: string = '';


constructor(private router: Router) {}

login(form: any) {
  if (form.invalid) {
    alert('Preencha todos os campos');
    return;
  }

  if (this.email == 'admin' && this.senha == 'admin') {
    this.router.navigate(['/home']);
  } else {
    alert('Email ou senha incorretos');
  }
}
}
