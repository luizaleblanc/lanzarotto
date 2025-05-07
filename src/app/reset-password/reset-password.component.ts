import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styles: []
})
export class ResetPasswordComponent {
    newPassword = '';
    confirmPassword = '';
    hideNewPassword = true;
    hideConfirmPassword = true;

    constructor(private router: Router) { }

    handleSubmit() {
        if (this.newPassword.length === 0 || this.confirmPassword.length === 0) {
            alert('Por favor, preencha todos os campos');
            return;
        }

        if (this.newPassword !== this.confirmPassword) {
            alert('As senhas não coincidem');
            return;
        }

        // Simulação de redefinição de senha bem-sucedida
        alert('Senha redefinida com sucesso');
        this.router.navigate(['/']);
    }
} 