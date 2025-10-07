import { Component, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-group-type-selection-page',
    imports: [],
    templateUrl: './group-type-selection-page.component.html',
    styleUrl: './group-type-selection-page.component.scss'
})

export class GroupTypeSelectionPageComponent {
    sanitizer = inject(DomSanitizer);
    
    // Lista de opções de tipo de grupo
    selectionOptions = signal([
        {
            title: 'Criar Turma',
            description: 'Ideal para classes com estrutura formal, professores e alunos. Inclui ferramentas de avaliação e materiais didáticos.',
            link: '/admin/grupos/cadastrar/turma', // Rota para criar turma
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v11.494m-9-5.747h18M5.47 5.47a.375.375 0 10-.53 0l-1.06 1.06a.375.375 0 000 .53l4.24 4.24a.375.375 0 00.53 0l1.06-1.06a.375.375 0 000-.53l-4.24-4.24zM18.53 5.47a.375.375 0 10-.53 0l-1.06 1.06a.375.375 0 000 .53l4.24 4.24a.375.375 0 00.53 0l1.06-1.06a.375.375 0 000-.53l-4.24-4.24zM5.47 18.53a.375.375 0 10-.53 0l-1.06-1.06a.375.375 0 000-.53l4.24-4.24a.375.375 0 00.53 0l1.06 1.06a.375.375 0 000 .53l-4.24 4.24zM18.53 18.53a.375.375 0 10-.53 0l-1.06-1.06a.375.375 0 000-.53l4.24-4.24a.375.375 0 00.53 0l1.06 1.06a.375.375 0 000 .53l-4.24 4.24z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 110-18 9 9 0 010 18z"></path>`
        },
        {
            title: 'Criar Grupo de Estudo',
            description: 'Perfeito para colaboração entre membros, discussões e compartilhamento de conhecimento sem uma hierarquia formal.',
            link: '/admin/grupos/cadastrar/grupo-de-estudo', // Rota para criar grupo de estudo
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.274-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.274.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path>`
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
