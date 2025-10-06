import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../../shared/components/footer/footer.component";

export interface PlanoViewModel {
    id: string;
    nome: string;
    descricao: string;
    preco: number;
    limiteDeGrupos: number | string; // Permitindo 'Ilimitado' como string
    limiteMembrosPorGrupo: number | string;
    status: 'ATIVO' | 'INATIVO';
    statusClass: string;
}

export interface NovoPlanoForm {
    nome: string;
    descricao: string;
    preco: number;
    duracaoEmMeses: number;
    limiteDeGrupos: number;
    limiteMembrosPorGrupo: number;
    permiteCriarSubgrupos: boolean;
    permiteTemplatesDeAtividade: boolean;
    status: 'ATIVO' | 'INATIVO';
}

@Component({
    selector: 'app-plan-management-page',
    imports: [CommonModule, FooterComponent],
    templateUrl: './plan-management-page.component.html',
    styleUrl: './plan-management-page.component.scss'
})

export class PlanManagementPageComponent implements OnInit {
    
    public planos: PlanoViewModel[] = [];
    public isLoading = false;
    
    // Controle do Modal
    public isCreateModalOpen = false;
    public novoPlano: NovoPlanoForm = this.getFormularioVazio();
    
    // Variáveis de Paginação
    public currentPage = 0;
    public totalPages = 0;
    public totalElements = 0;
    public pageSize = 10;
    
    private todosOsPlanos: PlanoViewModel[] = [
        { id: '1', nome: 'Plano Básico', descricao: 'Recursos essenciais para começar.', preco: 29.90, limiteDeGrupos: 5, limiteMembrosPorGrupo: 20, status: 'ATIVO', statusClass: 'text-green-800 bg-green-100' },
        { id: '2', nome: 'Plano Professor', descricao: 'Ferramentas avançadas para educadores.', preco: 79.90, limiteDeGrupos: 50, limiteMembrosPorGrupo: 100, status: 'ATIVO', statusClass: 'text-green-800 bg-green-100' },
        { id: '3', nome: 'Plano Institucional', descricao: 'Solução completa para escolas.', preco: 499.90, limiteDeGrupos: 'Ilimitado', limiteMembrosPorGrupo: 'Ilimitado', status: 'ATIVO', statusClass: 'text-green-800 bg-green-100' },
        { id: '4', nome: 'Plano Legado', descricao: 'Plano antigo, não mais disponível.', preco: 19.90, limiteDeGrupos: 2, limiteMembrosPorGrupo: 10, status: 'INATIVO', statusClass: 'text-yellow-800 bg-yellow-100' },
    ];
    
    constructor() { }
    
    ngOnInit(): void {
        this.buscarPlanos(0);
    }
    
    buscarPlanos(page: number): void {
        this.isLoading = true;
        // Simula uma chamada de API
        setTimeout(() => {
            const start = page * this.pageSize;
            const end = start + this.pageSize;
            
            this.planos = this.todosOsPlanos.slice(start, end);
            this.currentPage = page;
            this.totalElements = this.todosOsPlanos.length;
            this.totalPages = Math.ceil(this.totalElements / this.pageSize);
            
            this.isLoading = false;
        }, 500);
    }
    
    proximaPagina(): void {
        if ((this.currentPage + 1) < this.totalPages) {
            this.buscarPlanos(this.currentPage + 1);
        }
    }
    
    paginaAnterior(): void {
        if (this.currentPage > 0) {
            this.buscarPlanos(this.currentPage - 1);
        }
    }
    
    abrirModalCriacao(): void {
        this.novoPlano = this.getFormularioVazio(); // Reseta o formulário
        this.isCreateModalOpen = true;
    }
    
    criarNovoPlano(): void {
        console.log('Criando novo plano:', this.novoPlano);
        // Aqui viria a lógica para chamar o seu AdminService.criarPlano(this.novoPlano)
        this.isCreateModalOpen = false; // Fecha o modal
    }
    
    private getFormularioVazio(): NovoPlanoForm {
        return {
            nome: '',
            descricao: '',
            preco: 0,
            duracaoEmMeses: 1,
            limiteDeGrupos: 0,
            limiteMembrosPorGrupo: 0,
            permiteCriarSubgrupos: false,
            permiteTemplatesDeAtividade: false,
            status: 'ATIVO'
        };
    }
}
