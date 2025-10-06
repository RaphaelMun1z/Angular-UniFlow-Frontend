import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { of, delay } from 'rxjs'; 

export interface PagamentoViewModel {
    id: string;
    dataPagamento: Date;
    descricao: string;
    valor: number;
    status: 'APROVADO' | 'RECUSADO' | 'PENDENTE';
    statusClass: string;
}

const mockApiResponse = {
    content: [
        { id: '1', dataPagamento: new Date('2025-09-15'), descricao: 'Assinatura Plano Professor PRO', valor: 99.90, status: 'APROVADO', statusClass: 'text-green-800 bg-green-100' },
        { id: '2', dataPagamento: new Date('2025-08-15'), descricao: 'Assinatura Plano Professor PRO', valor: 99.90, status: 'APROVADO', statusClass: 'text-green-800 bg-green-100' },
        { id: '3', dataPagamento: new Date('2025-07-15'), descricao: 'Assinatura Plano Básico', valor: 29.90, status: 'APROVADO', statusClass: 'text-green-800 bg-green-100' },
    ],
    currentPage: 0,
    totalPages: 3,
    totalElements: 15
};

@Component({
    selector: 'app-user-payment-history',
    imports: [CommonModule, FormsModule, CurrencyPipe, DatePipe],
    templateUrl: './user-payment-history.component.html',
    styleUrl: './user-payment-history.component.scss'
})

export class UserPaymentHistoryComponent implements OnInit {
    
    public pagamentos: PagamentoViewModel[] = [];
    public isLoading = true;
    
    // Variáveis de estado da Paginação
    public currentPage = 0;
    public totalPages = 0;
    public totalElements = 0;
    public pageSize = 5;
    
    // Injetar o ProfileService aqui no futuro
    constructor() { }
    
    ngOnInit(): void {
        this.buscarPagamentos(0);
    }
    
    buscarPagamentos(page: number): void {
        this.isLoading = true;
        
        of(mockApiResponse).pipe(delay(500)).subscribe({
            next: (response) => {
                this.pagamentos = response.content.map(item => ({
                    ...item,
                    status: item.status as 'APROVADO' | 'RECUSADO' | 'PENDENTE'
                }));
                this.currentPage = response.currentPage;
                this.totalPages = response.totalPages;
                this.totalElements = response.totalElements;
                this.isLoading = false;
            },
            error: (err) => {
                console.error("Erro ao buscar pagamentos:", err);
                this.isLoading = false;
            }
        });
    }
    
    proximaPagina(): void {
        if ((this.currentPage + 1) < this.totalPages) {
            this.buscarPagamentos(this.currentPage + 1);
        }
    }
    
    paginaAnterior(): void {
        if (this.currentPage > 0) {
            this.buscarPagamentos(this.currentPage - 1);
        }
    }
}