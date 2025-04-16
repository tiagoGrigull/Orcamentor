import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../services/auth.service';

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
      this.router.navigate(['/Contatos']);
    },
    error => {
      alert('Email ou senha incorretos');
    }
  );
}
}
