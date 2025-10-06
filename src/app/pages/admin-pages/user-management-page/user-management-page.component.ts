import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { FormsModule } from '@angular/forms';

export interface UsuarioViewModel {
    id: string;
    nome: string;
    email: string;
    avatarUrl: string;
    papel: string;
    papelClass: string;
    status: string;
    statusClass: string;
    dataCadastro: string;
}

const TODOS_OS_USUARIOS: UsuarioViewModel[] = [
    { id: '1', nome: 'Ana Silva', email: 'ana.silva@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=1', papel: 'Estudante', papelClass: 'text-gray-800 bg-gray-100', status: 'Ativo', statusClass: 'text-green-800 bg-green-100', dataCadastro: '2025-01-10' },
    { id: '2', nome: 'Bruno Costa', email: 'bruno.costa@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=2', papel: 'Professor', papelClass: 'text-blue-800 bg-blue-100', status: 'Ativo', statusClass: 'text-green-800 bg-green-100', dataCadastro: '2025-01-12' },
    { id: '3', nome: 'Carla Dias', email: 'carla.dias@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=3', papel: 'Admin', papelClass: 'text-red-800 bg-red-100', status: 'Ativo', statusClass: 'text-green-800 bg-green-100', dataCadastro: '2025-01-15' },
    { id: '4', nome: 'Daniel Martins', email: 'daniel.martins@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=4', papel: 'Estudante', papelClass: 'text-gray-800 bg-gray-100', status: 'Inativo', statusClass: 'text-yellow-800 bg-yellow-100', dataCadastro: '2025-02-01' },
    { id: '5', nome: 'Eduarda Ferreira', email: 'eduarda.ferreira@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=5', papel: 'Professor', papelClass: 'text-blue-800 bg-blue-100', status: 'Ativo', statusClass: 'text-green-800 bg-green-100', dataCadastro: '2025-02-05' },
    { id: '6', nome: 'Fábio Gomes', email: 'fabio.gomes@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=6', papel: 'Estudante', papelClass: 'text-gray-800 bg-gray-100', status: 'Ativo', statusClass: 'text-green-800 bg-green-100', dataCadastro: '2025-02-10' },
    { id: '7', nome: 'Gabriela Lima', email: 'gabriela.lima@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=7', papel: 'Estudante', papelClass: 'text-gray-800 bg-gray-100', status: 'Ativo', statusClass: 'text-green-800 bg-green-100', dataCadastro: '2025-03-11' },
    { id: '8', nome: 'Heitor Souza', email: 'heitor.souza@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=8', papel: 'Professor', papelClass: 'text-blue-800 bg-blue-100', status: 'Inativo', statusClass: 'text-yellow-800 bg-yellow-100', dataCadastro: '2025-03-14' },
    { id: '9', nome: 'Isabela Rocha', email: 'isabela.rocha@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=9', papel: 'Estudante', papelClass: 'text-gray-800 bg-gray-100', status: 'Ativo', statusClass: 'text-green-800 bg-green-100', dataCadastro: '2025-03-20' },
    { id: '10', nome: 'Juliano Nogueira', email: 'juliano.nogueira@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=10', papel: 'Estudante', papelClass: 'text-gray-800 bg-gray-100', status: 'Ativo', statusClass: 'text-green-800 bg-green-100', dataCadastro: '2025-04-01' },
    { id: '11', nome: 'Larissa Mendes', email: 'larissa.mendes@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=11', papel: 'Estudante', papelClass: 'text-gray-800 bg-gray-100', status: 'Ativo', statusClass: 'text-green-800 bg-green-100', dataCadastro: '2025-04-05' },
    { id: '12', nome: 'Marcos Andrade', email: 'marcos.andrade@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=12', papel: 'Professor', papelClass: 'text-blue-800 bg-blue-100', status: 'Ativo', statusClass: 'text-green-800 bg-green-100', dataCadastro: '2025-04-10' },
];

@Component({
    selector: 'app-user-management-page',
    imports: [CommonModule, FooterComponent, FormsModule],
    templateUrl: './user-management-page.component.html',
    styleUrl: './user-management-page.component.scss'
})

export class UserManagementPageComponent implements OnInit {
    public isAddUserModalOpen = false;
    public gerarSenha = true;
    public novoUsuario: any = { tipo: 'ESTUDANTE' };
    
    public usuarios: UsuarioViewModel[] = [];
    public openActionMenuId: string | null = null;
    public isLoading = false;
    
    public currentPage = 0;
    public totalPages = 0;
    public totalElements = 0;
    public pageSize = 5; // Diminuí para 5 para facilitar o teste da paginação
    
    // Removida a injeção do AdminService
    constructor() { }
    
    ngOnInit(): void {
        this.buscarUsuarios(this.currentPage);
    }
    
    buscarUsuarios(page: number): void {
        this.isLoading = true;
        
        // Simula uma pequena demora, como se fosse uma chamada de API
        setTimeout(() => {
            // Lógica de paginação manual
            const start = page * this.pageSize;
            const end = start + this.pageSize;
            
            this.usuarios = TODOS_OS_USUARIOS.slice(start, end);
            
            // Atualiza as variáveis de estado da paginação
            this.currentPage = page;
            this.totalElements = TODOS_OS_USUARIOS.length;
            this.totalPages = Math.ceil(this.totalElements / this.pageSize);
            
            this.isLoading = false;
        }, 500); // Atraso de 500ms
    }
    
    proximaPagina(): void {
        if ((this.currentPage + 1) < this.totalPages) {
            this.buscarUsuarios(this.currentPage + 1);
        }
    }
    
    paginaAnterior(): void {
        if (this.currentPage > 0) {
            this.buscarUsuarios(this.currentPage - 1);
        }
    }
    
    criarNovoUsuario(): void {
        console.log('Dados do novo usuário:', this.novoUsuario);
        // Lógica para chamar o AuthService.signup() aqui
        this.isAddUserModalOpen = false;
    }
}