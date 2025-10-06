import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { NavbarAltWithAuthComponent } from '../../../shared/components/navbar-versions-components/navbar-alt-with-auth/navbar-alt-with-auth.component';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../../../shared/components/navbar-versions-components/navbar-alt-with-auth/safe-html.pipe';

export interface AtividadeViewModel {
    id: string;
    titulo: string;
    contexto: string; // Ex: "Disciplina: Metodologia Científica"
    data: Date;
    status: 'PENDENTE' | 'CONCLUIDA' | 'ATRASADA';
    statusClass: string;
    icon: string;
    iconClass: string;
}

@Component({
    selector: 'app-activity-wall-page',
    imports: [NavbarAltWithAuthComponent, FooterComponent, CommonModule, SafeHtmlPipe],
    templateUrl: './activity-wall-page.component.html',
    styleUrl: './activity-wall-page.component.scss'
})

export class ActivityWallPageComponent implements OnInit {
    
    public todasAtividades: AtividadeViewModel[] = [];
    public atividadesFiltradas: AtividadeViewModel[] = [];
    public activeTab: 'todas' | 'pendentes' | 'concluidas' | 'atrasadas' = 'todas';
    
    constructor() { }
    
    ngOnInit(): void {
        // Em um app real, os dados viriam de um service
        this.todasAtividades = [
            {
                id: '1',
                titulo: 'Entrega do Projeto de Pesquisa',
                contexto: 'Disciplina: Metodologia Científica',
                data: new Date('2025-10-06T23:59:00'),
                status: 'PENDENTE',
                statusClass: 'text-red-800 bg-red-100',
                icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />',
                iconClass: 'text-red-600 bg-red-100'
            },
            {
                id: '2',
                titulo: 'Reunião do Grupo de Estudos de IA',
                contexto: 'Grupo: Pesquisa em Inteligência Artificial',
                data: new Date('2025-10-06T14:30:00'),
                status: 'PENDENTE',
                statusClass: 'text-yellow-800 bg-yellow-100',
                icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 015.25 0m-5.25 0a3.75 3.75 0 00-5.25 0M3 13.06l7.547 4.425A1.5 1.5 0 0012 16.5v8.25" />',
                iconClass: 'text-blue-600 bg-blue-100'
            },
            {
                id: '3' ,
                titulo: 'Prova de Química Orgânica',
                contexto: 'Disciplina: Química',
                data: new Date('2025-10-07T08:00:00'),
                status: 'PENDENTE',
                statusClass: 'text-yellow-800 bg-yellow-100',
                icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />',
                iconClass: 'text-purple-600 bg-purple-100'
            },
            {
                id: '4',
                titulo: 'Resumo Capítulo 3 de História',
                contexto: 'Disciplina: História do Brasil',
                data: new Date('2025-10-02T23:59:00'),
                status: 'CONCLUIDA',
                statusClass: 'text-green-800 bg-green-100',
                icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />',
                iconClass: 'text-green-600 bg-green-100'
            },
            {
                id: '5',
                titulo: 'Apresentação de Seminário',
                contexto: 'Disciplina: Comunicação e Expressão',
                data: new Date('2025-09-30T10:00:00'),
                status: 'ATRASADA',
                statusClass: 'text-red-800 bg-red-100',
                icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V5.25A2.25 2.25 0 0018 3H6.75M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V5.25A2.25 2.25 0 0018 3H6.75m-2.25 0h16.5m-16.5 0A2.25 2.25 0 015.25 1.5h13.5A2.25 2.25 0 0121 3.75m-16.5 0c.375.158.75.324 1.125.501m14.25 0c.375.158.75.324 1.125.501M3.75 21V9.75M21 21V9.75m0 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9.75m18 0v12A2.25 2.25 0 0118.75 24H5.25A2.25 2.25 0 013 21.75V9.75m18 0c0-1.664-1.336-3-3-3H6c-1.664 0-3 1.336-3 3" />',
                iconClass: 'text-pink-600 bg-pink-100'
            },
        ];
        
        this.filtrarAtividades('todas');
    }
    
    filtrarAtividades(filtro: 'todas' | 'pendentes' | 'concluidas' | 'atrasadas'): void {
        this.activeTab = filtro;
        switch (filtro) {
            case 'pendentes':
            this.atividadesFiltradas = this.todasAtividades.filter(a => a.status === 'PENDENTE');
            break;
            case 'concluidas':
            this.atividadesFiltradas = this.todasAtividades.filter(a => a.status === 'CONCLUIDA');
            break;
            case 'atrasadas':
            this.atividadesFiltradas = this.todasAtividades.filter(a => a.status === 'ATRASADA');
            break;
            default:
            this.atividadesFiltradas = [...this.todasAtividades];
            break;
        }
    }
}