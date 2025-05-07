import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: []
})
export class LoginComponent {
    hidePassword = true;
    email = '';
    password = '';

    constructor(private router: Router) { }

    handleLogin() {
        // Simulação de login bem-sucedido
        // Em um caso real, você faria uma validação e chamada de API aqui
        if (this.email.length > 0 && this.password.length > 0) {
            this.router.navigate(['/dashboard']);
        } else {
            alert('Por favor, preencha email e senha');
        }
    }
} 