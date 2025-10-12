import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { of, delay } from 'rxjs';
import { RouterLink } from '@angular/router';
import { mockApiResponse, NotificacaoViewModel } from '../../../../../shared/interfaces/User.model';

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
    
    ngOnInit(): void {
        this.buscarNotificacoes(0);
    }
    
    buscarNotificacoes(page: number): void {
        console.log(page)
        this.isLoading = true;
        
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