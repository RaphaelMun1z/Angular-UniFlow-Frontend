import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { of, delay } from 'rxjs';

export interface GrupoAdminViewModel {
    id: string;
    titulo: string;
    tipo: 'Turma' | 'Grupo de Estudo';
    criadorNome: string;
    criadorEmail: string;
    criadorAvatarUrl: string;
    numMembros: number;
    disciplinaNome: string;
    dataCriacao: Date;
    status: 'Ativo' | 'Inativo';
    statusClass: string;
}

// Resposta simulada da API
const mockApiResponse = {
    content: [
        { id: '1', titulo: 'Turma de Cálculo I', tipo: 'Turma', criadorNome: 'Prof. Bruno Costa', criadorEmail: 'bruno.costa@email.com', criadorAvatarUrl: 'https://i.pravatar.cc/150?u=2', numMembros: 35, disciplinaNome: 'Cálculo I', dataCriacao: new Date('2025-08-01'), status: 'Ativo', statusClass: 'text-green-800 bg-green-100' },
        { id: '2', titulo: 'Estudos para P1 de Física', tipo: 'Grupo de Estudo', criadorNome: 'Ana Silva', criadorEmail: 'ana.silva@email.com', criadorAvatarUrl: 'https://i.pravatar.cc/150?u=1', numMembros: 8, disciplinaNome: 'Física Quântica', dataCriacao: new Date('2025-09-10'), status: 'Ativo', statusClass: 'text-green-800 bg-green-100' },
        { id: '3', titulo: 'Projeto Final de IA', tipo: 'Grupo de Estudo', criadorNome: 'Carla Dias', criadorEmail: 'carla.dias@email.com', criadorAvatarUrl: 'https://i.pravatar.cc/150?u=3', numMembros: 4, disciplinaNome: 'Inteligência Artificial', dataCriacao: new Date('2025-09-22'), status: 'Ativo', statusClass: 'text-green-800 bg-green-100' },
        { id: '4', titulo: 'Turma de Algoritmos (2024)', tipo: 'Turma', criadorNome: 'Prof. Heitor Souza', criadorEmail: 'heitor.souza@email.com', criadorAvatarUrl: 'https://i.pravatar.cc/150?u=8', numMembros: 28, disciplinaNome: 'Algoritmos e Estrutura de Dados', dataCriacao: new Date('2024-02-15'), status: 'Inativo', statusClass: 'text-yellow-800 bg-yellow-100' },
    ],
    currentPage: 0,
    totalPages: 5,
    totalElements: 50
};

@Component({
    selector: 'app-list-groups-management',
    imports: [CommonModule],
    templateUrl: './list-groups-management.component.html',
    styleUrl: './list-groups-management.component.scss'
})

export class ListGroupsManagementComponent implements OnInit {
    
    public grupos: GrupoAdminViewModel[] = [];
    public isLoading = true;
    
    // Controle de UI
    public openActionMenuId: string | null = null;
    public currentView: 'table' | 'grid' = 'table';
    public isDeleteModalOpen = false;
    public selectedGroup: GrupoAdminViewModel | null = null;
    public selectedGroups = new Set<string>();
    
    // Paginação
    public currentPage = 0;
    public totalPages = 0;
    public totalElements = 0;
    public pageSize = 10;
    
    // Injetar o AdminService aqui
    constructor() { }
    
    ngOnInit(): void {
        this.buscarGrupos(0);
    }
    
    buscarGrupos(page: number): void {
        this.isLoading = true;
        this.openActionMenuId = null;
        this.selectedGroups.clear();
        
        // Simulação da chamada ao AdminService
        of(mockApiResponse).pipe(delay(500)).subscribe({
            next: (response) => {
                this.grupos = response.content.map((grupo: any) => ({
                    ...grupo,
                    tipo: grupo.tipo as 'Turma' | 'Grupo de Estudo'
                }));
                this.currentPage = response.currentPage;
                this.totalPages = response.totalPages;
                this.totalElements = response.totalElements;
                this.isLoading = false;
            },
            error: (err) => {
                console.error("Erro ao buscar grupos:", err);
                this.isLoading = false;
            }
        });
    }
    
    proximaPagina(): void {
        if ((this.currentPage + 1) < this.totalPages) {
            this.buscarGrupos(this.currentPage + 1);
        }
    }
    
    paginaAnterior(): void {
        if (this.currentPage > 0) {
            this.buscarGrupos(this.currentPage - 1);
        }
    }
    
    toggleSelect(groupId: string): void {
        if (this.selectedGroups.has(groupId)) {
            this.selectedGroups.delete(groupId);
        } else {
            this.selectedGroups.add(groupId);
        }
    }
    
    toggleSelectAll(event: Event): void {
        const isChecked = (event.target as HTMLInputElement).checked;
        if (isChecked) {
            this.grupos.forEach(grupo => this.selectedGroups.add(grupo.id));
        } else {
            this.selectedGroups.clear();
        }
    }
    
    areAllSelected(): boolean {
        return this.grupos.length > 0 && this.selectedGroups.size === this.grupos.length;
    }
    
    abrirModalExclusao(grupo: GrupoAdminViewModel): void {
        this.selectedGroup = grupo;
        this.isDeleteModalOpen = true;
        this.openActionMenuId = null;
    }
    
    fecharModalExclusao(): void {
        this.isDeleteModalOpen = false;
        this.selectedGroup = null;
    }
    
    confirmarExclusao(): void {
        if (!this.selectedGroup) return;
        console.log(`Excluindo grupo: ${this.selectedGroup.id}`);
        this.fecharModalExclusao();
    }
    
}