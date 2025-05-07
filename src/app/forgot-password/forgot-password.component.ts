import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styles: []
})
export class ForgotPasswordComponent {
    email = '';

    constructor(private router: Router) { }

    handleSubmit() {
        if (this.email.length > 0) {
            // Simulação de envio de e-mail
            alert('Instruções de redefinição de senha enviadas para ' + this.email);
            this.router.navigate(['/']);
        } else {
            alert('Por favor, insira seu endereço de e-mail');
        }
    }

    goBack() {
        this.router.navigate(['/']);
    }
} 