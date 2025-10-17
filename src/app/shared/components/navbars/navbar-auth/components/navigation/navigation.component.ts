import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideIconData, LucideAngularModule, ChevronDown, FileText, Gem, Info } from 'lucide-angular';

export interface NavItemChild {
    label: string;
    description: string;
    path: string;
    icon: LucideIconData; 
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
    imports: [RouterLink, CommonModule, RouterLinkActive, LucideAngularModule],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss'
})

export class NavigationComponent implements OnInit {
    @Input() currentUser: CurrentUser | null = null;
    
    readonly Gem = Gem;
    readonly Info = Info;
    readonly FileText = FileText;
    readonly ChevronDown = ChevronDown;
    
    // Array que define toda a estrutura da navegação
    public navItems: NavItem[] = [];
    
    ngOnInit(): void {
        this.currentUser = { role: 'PROFESSOR' }; // Exemplo: mude para 'ADMIN' ou 'ESTUDANTE' para testar
        
        this.navItems = [
            { label: 'Meus Grupos', path: '/app/me/grupos' },
            { label: 'Minhas Atividades', path: '/app/me/atividades' },
            {
                label: 'Saiba Mais',
                children: [
                    { 
                        label: 'Planos', 
                        description: 'Conheça os nossos planos e escolha o que melhor se adapta às suas necessidades.',
                        path: '/planos',
                        icon: this.Gem 
                    },
                    { 
                        label: 'Sobre Nós', 
                        description: 'Saiba mais sobre a nossa história, missão e a equipa por trás da plataforma.',
                        path: '/sobre-nos',
                        icon: this.Info
                    },
                    { 
                        label: 'Termos de Uso', 
                        description: 'Leia os nossos termos de serviço para entender os seus direitos e responsabilidades.',
                        path: '/termos-de-uso',
                        icon: this.FileText
                    }
                ]
            },
            { label: 'Painel Admin', path: '/admin', requiredRole: 'ADMIN' }
        ];
    }
}
