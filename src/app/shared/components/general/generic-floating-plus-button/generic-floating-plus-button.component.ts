import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-generic-floating-plus-button',
    imports: [CommonModule],
    templateUrl: './generic-floating-plus-button.component.html',
    styleUrl: './generic-floating-plus-button.component.scss'
})

export class GenericFloatingPlusButtonComponent {
    isMenuOpen = false;
    
    mainOptions = [
        { icon: 'blog', title: 'Blog', description: 'Artigos e novidades sobre educação e tecnologia.' },
        { icon: 'tutorials', title: 'Tutoriais', description: 'Guias passo a passo para usar a plataforma.' },
        { icon: 'faq', title: 'FAQ', description: 'Respostas para as perguntas mais comuns.' }
    ];
    
    openMenu(): void {
        this.isMenuOpen = true;
    }
    
    closeMenu(): void {
        this.isMenuOpen = false;
    }
    
    onItemClick(itemTitle: string): void {
        console.log(`${itemTitle} clicked`);
        this.isMenuOpen = false;
    }
}