import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-teacher-group-navigation-page',
    imports: [CommonModule],
    templateUrl: './teacher-group-navigation-page.component.html',
    styleUrl: './teacher-group-navigation-page.component.scss'
})

export class TeacherGroupNavigationPageComponent {
    sanitizer = inject(DomSanitizer);
    
    professorNavLinks = signal([
        {
            title: 'Minhas Turmas e Grupos',
            description: 'Visualize e gerencie todas as turmas e grupos que você lidera.',
            link: '/app/professor/grupos/listar', // Rota para a lista de grupos do professor
            icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.274-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.274.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path>`
        },
        {
            title: 'Criar Nova Turma',
            description: 'Configure uma nova turma ou grupo de estudo para seus alunos.',
            link: '/app/professor/grupos/cadastrar',
            icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path>`
        },
        {
            title: 'Gerenciar Solicitações',
            description: 'Aprove ou recuse os pedidos de entrada de alunos em seus grupos.',
            link: '/app/professor/grupos/gerenciar-solicitacoes', // Rota para a página de gerenciamento de solicitações
            icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962A3 3 0 013 10.5V12a3 3 0 013 3v.5a3 3 0 013 3m-3.75-9.08a3.001 3.001 0 00-2.923-2.185 3.001 3.001 0 00-2.923 2.185M12 6.75a3 3 0 116 0 3 3 0 01-6 0zM12 18.75a3 3 0 116 0 3 3 0 01-6 0z" />`
        },
        {
            title: 'Banco de Materiais',
            description: 'Faça upload e organize arquivos, links e materiais de apoio para suas turmas.',
            link: '#', // Rota para o banco de materiais
            icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>`
        }
    ]);
    
    constructor() {
        this.injectFonts();
    }
    
    private injectFonts() {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }
}
