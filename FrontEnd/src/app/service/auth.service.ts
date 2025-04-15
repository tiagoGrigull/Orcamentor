import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable , tap} from 'rxjs';

export interface LoginRequest {
    email: string;
    senha: string;
}

interface LoginResponse {
    token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private apiUrl = `${environment.apiUrl}/auth`;

    constructor(private hgttp: HttpClient) { }

    login(dados: LoginRequest) : Observable<LoginResponse> {
        return this.hgttp.post<LoginResponse>(this.apiUrl, dados).pipe(
            tap((response) => {
                localStorage.setItem('token', response.token);
            })
        );
    }
}