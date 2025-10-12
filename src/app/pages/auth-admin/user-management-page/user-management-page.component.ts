import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NovoUsuario, TODOS_OS_USUARIOS, UsuarioViewModel } from '../../../shared/interfaces/User.model';

@Component({
    selector: 'app-user-management-page',
    imports: [CommonModule, FormsModule],
    templateUrl: './user-management-page.component.html',
    styleUrl: './user-management-page.component.scss'
})

export class UserManagementPageComponent implements OnInit {
    public isAddUserModalOpen = false;
    public gerarSenha = true;
    public novoUsuario: NovoUsuario = {
        tipo: 'ESTUDANTE',
        id: 0,
        nome: '',
        email: '',
        avatarUrl: '',
        papel: 'Estudante',
        status: 'Ativo',
        dataCadastro: '',
        papelClass: '',
        statusClass: '',
        semestreIngresso: '',
        senha: '',
        anoIngresso: '',
        areaAtuacao: ''
    };
    
    public usuarios: UsuarioViewModel[] = [];
    public openActionMenuId: string | null = null;
    public isLoading = false;
    
    public currentPage = 0;
    public totalPages = 0;
    public totalElements = 0;
    public pageSize = 5; // Diminuí para 5 para facilitar o teste da paginação
    
    
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