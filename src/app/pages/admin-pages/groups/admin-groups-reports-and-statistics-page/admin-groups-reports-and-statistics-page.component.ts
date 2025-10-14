import { Component, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-admin-groups-reports-and-statistics-page',
    imports: [],
    templateUrl: './admin-groups-reports-and-statistics-page.component.html',
    styleUrl: './admin-groups-reports-and-statistics-page.component.scss'
})

export class AdminGroupsReportsAndStatisticsPageComponent {
    sanitizer = inject(DomSanitizer);
    
    // Ícones para os formatos de arquivo
    private csvIcon = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>`;
    private pdfIcon = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"></path>`;
    
    availableReports = signal([
        {
            title: 'Relatório Geral de Grupos',
            description: 'Dados de todos os grupos, data de criação, nº de membros e status.',
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>`,
            formats: [ { type: 'CSV', link: '#', icon: this.csvIcon }, { type: 'PDF', link: '#', icon: this.pdfIcon } ]
        },
        {
            title: 'Relatório de Atividade',
            description: 'Métricas de postagens, comentários e interações dentro dos grupos.',
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.274-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.274.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path>`,
            formats: [ { type: 'CSV', link: '#', icon: this.csvIcon }, { type: 'PDF', link: '#', icon: this.pdfIcon } ]
        },
        {
            title: 'Relatório de Engajamento',
            description: 'Análise de participação, conclusão de tarefas e performance em turmas.',
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>`,
            formats: [ { type: 'CSV', link: '#', icon: this.csvIcon }, { type: 'PDF', link: '#', icon: this.pdfIcon } ]
        },
        {
            title: 'Relatório de Novos Membros',
            description: 'Lista de novos membros por grupo e data de entrada no período selecionado.',
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>`,
            formats: [ { type: 'CSV', link: '#', icon: this.csvIcon } ]
        },
        {
            title: 'Relatório de Moderação',
            description: 'Conteúdo reportado, ações de moderação e atividade dos moderadores.',
            icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />`,
            formats: [ { type: 'CSV', link: '#', icon: this.csvIcon }, { type: 'PDF', link: '#', icon: this.pdfIcon } ]
        }
    ]);
    
    constructor() {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }
}