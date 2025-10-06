import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SafeHtmlPipe } from "../../safe-html.pipe";

export interface NavItemChild {
    label: string;
    description: string;
    path: string;
    icon: string; // Caminho do SVG
}

// Interface principal
export interface NavItem {
    label: string;
    path?: string;
    children?: NavItemChild[];
    requiredRole?: 'ADMIN' | 'PROFESSOR' | 'ESTUDANTE';
}

export interface CurrentUser {
    role: 'ADMIN' | 'PROFESSOR' | 'ESTUDANTE';
}

@Component({
    selector: 'app-navigation',
    imports: [RouterLink, CommonModule, RouterLinkActive, SafeHtmlPipe],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss'
})

export class NavigationComponent {
    @Input() currentUser: CurrentUser | null = null;
    
    // Array que define toda a estrutura da navegação
    public navItems: NavItem[] = [];
    
    ngOnInit(): void {
        this.currentUser = { role: 'PROFESSOR' }; // Exemplo: mude para 'ADMIN' ou 'ESTUDANTE' para testar
        
        this.navItems = [
            { label: 'Dashboard', path: '/app/dashboard' },
            { label: 'Meus Grupos', path: '/app/grupos' },
            {
                label: 'Recursos',
                children: [
                    { 
                        label: 'Blog', 
                        description: 'Artigos e novidades sobre educação e tecnologia.',
                        path: '/blog',
                        icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />'
                    },
                    { 
                        label: 'Tutoriais', 
                        description: 'Guias passo a passo para usar a plataforma.',
                        path: '/tutoriais',
                        icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z" />'
                    },
                    { 
                        label: 'FAQ', 
                        description: 'Respostas para as perguntas mais comuns.',
                        path: '/faq',
                        icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />'
                    }
                ]
            },
            { label: 'Painel Admin', path: '/admin', requiredRole: 'ADMIN' }
        ];
    }
}
