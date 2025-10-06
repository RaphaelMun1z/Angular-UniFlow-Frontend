import { Component } from '@angular/core';

@Component({
    selector: 'app-footer-buttons',
    imports: [],
    templateUrl: './footer-buttons.component.html',
    styleUrl: './footer-buttons.component.scss'
})

export class FooterButtonsComponent {
    logout(): void {
        console.log('Executando logout...');
    }
}
