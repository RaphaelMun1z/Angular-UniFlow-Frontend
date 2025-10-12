import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
    selector: 'app-generic-floating-plus-button',
    imports: [CommonModule],
    templateUrl: './generic-floating-plus-button.component.html',
    styleUrl: './generic-floating-plus-button.component.scss'
})

export class GenericFloatingPlusButtonComponent {
    isMenuOpen = false;
    
    // Variável para guardar o timer
    private closeTimer: any;
    
    mainOptions = [
        { icon: 'blog', title: 'Blog', description: 'Artigos e novidades sobre educação e tecnologia.' },
        { icon: 'tutorials', title: 'Tutoriais', description: 'Guias passo a passo para usar a plataforma.' },
        { icon: 'faq', title: 'FAQ', description: 'Respostas para as perguntas mais comuns.' }
    ];
    
    openMenu(): void {
        // Cancela qualquer timer de fechamento que esteja pendente
        clearTimeout(this.closeTimer);
        this.isMenuOpen = true;
    }
    
    closeMenu(): void {
        // Em vez de fechar imediatamente, inicia um timer.
        // 200ms é tempo suficiente para mover o mouse sobre o gap.
        this.closeTimer = setTimeout(() => {
            this.isMenuOpen = false;
        }, 200);
    }
    
    onItemClick(itemTitle: string): void {
        console.log(`${itemTitle} clicked`);
        this.isMenuOpen = false;
    }
}