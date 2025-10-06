import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { of, delay } from 'rxjs';
import { RouterLink } from '@angular/router';

export interface NotificacaoViewModel {
    id: string;
    mensagem: string;
    contexto: string;
    timestamp: string;
    lida: boolean;
    link: string;
}

const mockApiResponse = {
    content: [
        { id: '1', mensagem: 'Sua atividade <strong>Relatório de Física</strong> foi avaliada.', contexto: 'Turma: Física Quântica', timestamp: 'há 5 minutos', lida: false, link: '/atividades-entrega/uuid-1' },
        { id: '2', mensagem: 'Nova atividade: <strong>Trabalho de Cálculo III</strong>', contexto: 'Turma: Matemática Avançada', timestamp: 'há 2 horas', lida: false, link: '/atividades-avaliativas/uuid-2' },
        { id: '3', mensagem: '<strong>Professor Teste</strong> adicionou você ao grupo <strong>Projeto de Banco de Dados</strong>.', contexto: 'Grupo de Estudo', timestamp: 'Ontem', lida: true, link: '/grupos/uuid-3' },
        { id: '4', mensagem: 'O prazo para <strong>API de Pagamentos</strong> está se esgotando.', contexto: 'Grupo: Projeto de Banco de Dados', timestamp: 'há 2 dias', lida: true, link: '/atividades-colaborativas/uuid-4' },
    ],
    currentPage: 0,
    totalPages: 4,
    totalElements: 20
};

@Component({
    selector: 'app-user-notifications',
    imports: [CommonModule, FormsModule, RouterLink],
    templateUrl: './user-notifications.component.html',
    styleUrl: './user-notifications.component.scss'
})

export class UserNotificationsComponent implements OnInit {
    
    public notificacoes: NotificacaoViewModel[] = [];
    public isLoading = true;
    
    // Variáveis de Paginação
    public currentPage = 0;
    public totalPages = 0;
    public totalElements = 0;
    public pageSize = 10;
    
    // Injetar o ProfileService ou NotificacaoAssinanteService aqui
    constructor() { }
    
    ngOnInit(): void {
        this.buscarNotificacoes(0);
    }
    
    buscarNotificacoes(page: number): void {
        this.isLoading = true;
        
        // Simulação da chamada ao service
        // this.notificacaoService.buscarMinhasNotificacoes(page, this.pageSize).subscribe({ ... });
        of(mockApiResponse).pipe(delay(500)).subscribe({
            next: (response) => {
                this.notificacoes = response.content;
                this.currentPage = response.currentPage;
                this.totalPages = response.totalPages;
                this.totalElements = response.totalElements;
                this.isLoading = false;
            },
            error: (err) => {
                console.error("Erro ao buscar notificações:", err);
                this.isLoading = false;
            }
        });
    }
    
    proximaPagina(): void {
        if ((this.currentPage + 1) < this.totalPages) {
            this.buscarNotificacoes(this.currentPage + 1);
        }
    }
    
    paginaAnterior(): void {
        if (this.currentPage > 0) {
            this.buscarNotificacoes(this.currentPage - 1);
        }
    }
    
    marcarComoLida(notificationId: string): void {
        const notificacao = this.notificacoes.find(n => n.id === notificationId);
        if (notificacao && !notificacao.lida) {
            console.log(`Marcando notificação ${notificationId} como lida...`);
            // Lógica para chamar o service
            notificacao.lida = true;
        }
    }
    
    marcarTodasComoLidas(): void {
        console.log('Marcando todas as notificações como lidas...');
        // Lógica para chamar o service
        this.notificacoes.forEach(n => n.lida = true);
    }
    
    deletarNotificacao(notificationId: string): void {
        console.log(`Deletando notificação ${notificationId}...`);
        // Lógica para chamar o service
        this.notificacoes = this.notificacoes.filter(n => n.id !== notificationId);
    }
}