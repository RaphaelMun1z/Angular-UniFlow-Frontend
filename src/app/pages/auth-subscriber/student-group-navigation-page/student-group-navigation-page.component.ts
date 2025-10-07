import { Component, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-student-group-navigation-page',
    imports: [],
    templateUrl: './student-group-navigation-page.component.html',
    styleUrl: './student-group-navigation-page.component.scss'
})

export class StudentGroupNavigationPageComponent {
    sanitizer = inject(DomSanitizer);
    
    studentNavLinks = signal([
        {
            title: 'Meus Grupos',
            description: 'Acesse todas as suas turmas e grupos de estudo em um só lugar.',
            link: '/app/estudante/grupos/listar',
            icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.274-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.274.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path>`
        },
        {
            title: 'Entrar com Código',
            description: 'Use um código de convite para entrar em uma turma ou grupo específico.',
            link: '/app/estudante/grupos/ingressar',
            icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-4a6 6 0 017.743-5.743z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M7 15l-4-4m0 0l4-4m-4 4h18"></path>`
        },
        {
            title: 'Criar Grupo de Estudo',
            description: 'Inicie seu próprio grupo para colaborar com colegas em matérias e projetos.',
            link: '/app/estudante/grupos/cadastrar',
            icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path>`
        },
        {
            title: 'Convites Pendentes',
            description: 'Veja e responda aos convites para participar de novos grupos.',
            link: '/app/estudante/grupos/solicitacoes-acesso',
            icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>`
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
