import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoLinkComponent } from "../../general/logo-link/logo-link.component";
import { SafeHtmlPipe } from '../navbar-alt-with-auth/safe-html.pipe';

// Interfaces para a navegação
export interface NavItemChild {
    label: string;
    description: string;
    path: string;
    icon: string;
}

export interface NavItem {
    label: string;
    path?: string;
    children?: NavItemChild[];
}

@Component({
    selector: 'app-navbar-alt-no-auth',
    imports: [RouterModule, CommonModule, LogoLinkComponent, SafeHtmlPipe],
    templateUrl: './navbar-alt-no-auth.component.html',
    styleUrl: './navbar-alt-no-auth.component.scss'
})

export class NavbarAltNoAuthComponent implements OnInit {
    public isMobileMenuOpen = false;
    public navItems: NavItem[] = [];
    
    ngOnInit(): void {
        this.navItems = [
            { label: 'Início', path: '/' },
            { label: 'Planos', path: '/planos' },
            {
                label: 'Empresa',
                children: [
                    { 
                        label: 'Sobre Nós', 
                        description: 'Conheça nossa história e nossa equipe.',
                        path: '/sobre-nos',
                        icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 015.25 0m-5.25 0a3.75 3.75 0 00-5.25 0M3 13.06l7.547 4.425A1.5 1.5 0 0012 16.5v8.25" />'
                    },
                    { 
                        label: 'Blog', 
                        description: 'Artigos e novidades sobre educação e tecnologia.',
                        path: '/blog',
                        icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />'
                    },
                    { 
                        label: 'Carreiras', 
                        description: 'Faça parte da nossa equipe.',
                        path: '/carreiras',
                        icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.976 5.39c-.393.53-.823.99-1.295 1.422l-2.121 2.121A15.002 15.002 0 002.25 18z" />'
                    }
                ]
            }
        ];
    }
}
