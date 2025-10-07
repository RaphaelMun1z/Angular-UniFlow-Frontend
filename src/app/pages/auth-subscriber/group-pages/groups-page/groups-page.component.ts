import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface GrupoViewModel {
    bannerUrl: any;
    typeClass: string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined;
    type: any;
    id: string;
    titulo: string;
    descricao: string;
    status: string;
    statusClass: string;
    membros: number;
    novidades: number;
}

@Component({
    selector: 'app-groups-page',
    imports: [CommonModule, RouterLink],
    templateUrl: './groups-page.component.html',
    styleUrl: './groups-page.component.scss'
})

export class GroupsPageComponent {
    grupos = [
        {
            id: 1,
            titulo: 'Cálculo I - Turma A',
            descricao: 'Discussões e materiais para a disciplina de Cálculo I, ministrada pelo Prof. Alan Turing.',
            membros: 45,
            novidades: 3,
            status: 'Ativo',
            type: 'Turma',
            statusClass: 'bg-green-100 text-green-800',
            typeClass: 'bg-blue-100 text-blue-800',
            bannerUrl: 'https://placehold.co/600x400/06b6d4/ffffff?text=Cálculo'
        },
        {
            id: 2,
            titulo: 'Grupo de Estudos - Física Quântica',
            descricao: 'Grupo para aprofundar os conhecimentos em física quântica e resolver exercícios complexos.',
            membros: 12,
            novidades: 0,
            status: 'Ativo',
            type: 'Estudo',
            statusClass: 'bg-green-100 text-green-800',
            typeClass: 'bg-purple-100 text-purple-800',
            bannerUrl: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Física'
        },
        {
            id: 3,
            titulo: 'Projeto de TCC em IA',
            descricao: 'Desenvolvimento do projeto de conclusão de curso com foco em redes neurais convolucionais.',
            membros: 4,
            novidades: 1,
            status: 'Ativo',
            type: 'Estudo',
            statusClass: 'bg-green-100 text-green-800',
            typeClass: 'bg-purple-100 text-purple-800',
            bannerUrl: 'https://placehold.co/600x400/ec4899/ffffff?text=IA'
        },
        {
            id: 4,
            titulo: 'Algoritmos e Estruturas de Dados',
            descricao: 'Turma do semestre passado. O conteúdo permanece disponível para consulta.',
            membros: 52,
            novidades: 0,
            status: 'Arquivado',
            type: 'Turma',
            statusClass: 'bg-gray-100 text-gray-800',
            typeClass: 'bg-blue-100 text-blue-800',
            bannerUrl: 'https://placehold.co/600x400/f59e0b/ffffff?text=Algo'
        },
    ];
    
    constructor() {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }
}
