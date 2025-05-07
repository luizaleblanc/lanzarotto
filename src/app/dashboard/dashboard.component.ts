import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styles: []
})
export class DashboardComponent implements OnInit {
    dateRange = '1 de Mar de 2023 a 9 de Mar de 2023';
    mobileMenuOpen = false;

    constructor(private router: Router) { }

    ngOnInit(): void {
        // Código de inicialização, se necessário
    }

    handleNavigation(path: string): void {
        this.router.navigate([path]);
        this.mobileMenuOpen = false;
    }
} 