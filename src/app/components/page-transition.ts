import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-page-transition',
    template: `
    <div [@fadeAnimation]="true" class="w-full h-full">
      <ng-content></ng-content>
    </div>
  `,
    animations: [
        trigger('fadeAnimation', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('300ms ease-in', style({ opacity: 1 })),
            ]),
        ]),
    ],
})
export class PageTransitionComponent {
    // Componente que adiciona animação de fade na transição de página
} 