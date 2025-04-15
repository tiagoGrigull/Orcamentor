import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { LoginRequest } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginRequest: LoginRequest = {
    email: '',
    senha: ''
  }  


constructor(private router: Router, private authService: AuthService) {}

login(form: any) {
  if (form.invalid) {
    alert('Preencha todos os campos');
    return;
  }

  this.authService.login(this.loginRequest).subscribe(
    response => {
      // Redireciona para a página de home após o login bem-sucedido
      this.router.navigate(['/home']);
    },
    error => {
      alert('Email ou senha incorretos');
    }
  );
}
}
