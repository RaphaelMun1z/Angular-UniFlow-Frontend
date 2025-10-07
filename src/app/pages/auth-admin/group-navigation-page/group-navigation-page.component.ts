import { Component, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-group-navigation-page',
    imports: [],
    templateUrl: './group-navigation-page.component.html',
    styleUrl: './group-navigation-page.component.scss'
})

export class GroupNavigationPageComponent {
    sanitizer = inject(DomSanitizer);
    
    // Lista de links de gerenciamento de grupo
    groupManagementLinks = signal([
        {
            title: 'Listar Todos os Grupos',
            description: 'Visualize, pesquise e filtre todos os grupos cadastrados no sistema.',
            link: '/admin/grupos/listar',
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>`
        },
        {
            title: 'Criar Novo Grupo',
            description: 'Configure e adicione um novo grupo à plataforma.',
            link: '/admin/grupos/cadastrar',
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0h-3m12-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>`
        },
        {
            title: 'Relatórios e Estatísticas',
            description: 'Acesse dados consolidados sobre o uso e crescimento dos grupos.',
            link: '/admin/grupos/estatistica',
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>`
        },
        {
            title: 'Configurações Globais',
            description: 'Defina regras e parâmetros que se aplicam a todos os grupos.',
            link: '/admin/grupos/configuracoes',
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>`
        },
        {
            title: 'Auditoria de Grupos',
            description: 'Revise o histórico de modificações, criações e exclusões de grupos.',
            link: '/admin/grupos/auditoria',
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>`
        },
        {
            title: 'Buscar Grupo por Convite',
            description: 'Encontre rapidamente um grupo específico inserindo seu código de convite único.',
            link: '/admin/grupos/buscar-por-convite',
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7H3m7 0a3 3 0 01-3 3V7m3 0a3 3 0 00-3-3V7m3 0h7M3 7h3m0 0v10m0-10V3"></path>`
        }
    ]);
    
    constructor() {
        // Adiciona a fonte 'Inter' do Google Fonts ao cabeçalho do documento
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }
}
