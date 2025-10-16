import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    LucideAngularModule, 
    CreditCard,
    CalendarClock,
    ShieldCheck,
    Download,
    Plus,
    ChevronRight,
    ArrowRight,
    House,
    ChevronLeft,
    Search
} from 'lucide-angular';

interface Invoice {
    id: string;
    date: string;
    amount: number;
    status: 'Pago' | 'Pendente' | 'Atrasado';
}

// Interface para os cartões de resumo, agora com links de ação
interface SummaryCard {
    title: string;
    value: string;
    icon: any; // Usamos 'any' pois o ícone é um objeto da Lucide
    iconBgColor: string;
    iconTextColor: string;
    actionText: string;
    actionLink: string;
}

@Component({
    selector: 'app-user-payment-history',
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './user-payment-history.component.html',
    styleUrl: './user-payment-history.component.scss'
})

export class UserPaymentHistoryComponent {
    // --- Estado para Filtro e Paginação ---
    filterOptions: (Invoice['status'] | 'Todos')[] = ['Todos', 'Pago', 'Pendente', 'Atrasado'];
    filterStatus = signal<(Invoice['status'] | 'Todos')>('Todos');
    currentPage = signal(1);
    readonly itemsPerPage = 5;
    
    // --- Dados para os Cards de Resumo ---
    summaryCards = signal<SummaryCard[]>([
        { 
            title: 'Plano Atual', 
            value: 'Premium Anual', 
            icon: ShieldCheck,
            iconBgColor: 'bg-indigo-100',
            iconTextColor: 'text-indigo-600',
            actionText: 'Gerenciar Plano',
            actionLink: '#'
        },
        { 
            title: 'Próxima Fatura', 
            value: '15 de Nov, 2025', 
            icon: CalendarClock,
            iconBgColor: 'bg-green-100',
            iconTextColor: 'text-green-600',
            actionText: 'Ver detalhes',
            actionLink: '#'
        },
        { 
            title: 'Método de Pagamento', 
            value: 'Visa **** 4242', 
            icon: CreditCard,
            iconBgColor: 'bg-amber-100',
            iconTextColor: 'text-amber-600',
            actionText: 'Atualizar método',
            actionLink: '#'
        },
    ]);
    
    // --- Dados para o Histórico de Faturas ---
    invoices = signal<Invoice[]>([
        { id: '8923', date: '15 de Out, 2025', amount: 120.00, status: 'Pago' },
        { id: '8922', date: '15 de Set, 2025', amount: 120.00, status: 'Pago' },
        { id: '8921', date: '15 de Ago, 2025', amount: 120.00, status: 'Pendente' },
        { id: '8920', date: '15 de Jul, 2025', amount: 120.00, status: 'Pago' },
        { id: '8919', date: '15 de Jun, 2025', amount: 120.00, status: 'Atrasado' },
        { id: '8918', date: '15 de Maio, 2025', amount: 120.00, status: 'Pago' },
        { id: '8917', date: '15 de Abr, 2025', amount: 120.00, status: 'Pago' },
    ]);
    
    // --- Lógica Reativa com 'computed' ---
    filteredInvoices = computed(() => {
        const status = this.filterStatus();
        if (status === 'Todos') {
            return this.invoices();
        }
        return this.invoices().filter(invoice => invoice.status === status);
    });
    
    paginatedInvoices = computed(() => {
        const page = this.currentPage();
        const start = (page - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.filteredInvoices().slice(start, end);
    });
    
    // --- Métodos de Paginação ---
    nextPage() {
        if (this.currentPage() * this.itemsPerPage < this.filteredInvoices().length) {
            this.currentPage.update(page => page + 1);
        }
    }
    
    previousPage() {
        if (this.currentPage() > 1) {
            this.currentPage.update(page => page - 1);
        }
    }
    
    // --- Ícones para uso no Template ---
    readonly Download = Download;
    readonly Plus = Plus;
    readonly Home = House;
    readonly ChevronRight = ChevronRight;
    readonly ArrowRight = ArrowRight;
    readonly Search = Search;
    readonly ChevronLeft = ChevronLeft;
    readonly Math = Math;
}