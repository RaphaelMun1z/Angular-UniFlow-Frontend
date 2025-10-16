import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { House, ChevronRight, CircleCheck, Trash2, LoaderCircle, Bell, CircleAlert, MessageSquare, BadgeCheck, LucideAngularModule } from 'lucide-angular';

type NotificationType = 'security' | 'update' | 'comment' | 'default';

interface Notification {
    id: string;
    type: NotificationType;
    message: string;
    timestamp: string;
    isRead: boolean;
    link: string;
}

// Interface para as abas de filtro, garantindo a tipagem correta
interface FilterTab {
    label: string;
    filter: 'all' | 'unread';
    count: number;
}

@Component({
    selector: 'app-user-notifications',
    imports: [CommonModule, FormsModule, LucideAngularModule],
    templateUrl: './user-notifications.component.html',
    styleUrl: './user-notifications.component.scss'
})

export class UserNotificationsComponent {
    // --- Estado do Componente ---
    isLoading = signal(false);
    activeFilter = signal<'all' | 'unread'>('all');
    
    // --- Dados Fictícios (Mock) ---
    notifications = signal<Notification[]>([
        { id: '1', type: 'security', message: '<b>Novo login detectado</b> na sua conta de um dispositivo em São Paulo, SP.', timestamp: 'há 5 minutos', isRead: false, link: '#' },
        { id: '2', type: 'comment', message: '<b>Ana Paula</b> comentou na sua atividade: "Ótimo trabalho!".', timestamp: 'há 2 horas', isRead: false, link: '#' },
        { id: '3', type: 'update', message: 'Sua assinatura do <b>Plano Premium</b> foi renovada com sucesso.', timestamp: 'há 1 dia', isRead: true, link: '#' },
        { id: '4', type: 'default', message: 'A atividade "Pesquisa de Campo" vence em <b>3 dias</b>.', timestamp: 'há 2 dias', isRead: true, link: '#' },
    ]);
    
    // --- Ícones para uso no Template ---
    readonly Home = House;
    readonly ChevronRight = ChevronRight;
    readonly CheckCircle2 = CircleCheck;
    readonly Trash2 = Trash2;
    readonly LoaderCircle = LoaderCircle;
    readonly Bell = Bell;
    
    // --- Lógica Reativa com 'computed' ---
    
    // Contagem de notificações não lidas
    unreadCount = computed(() => this.notifications().filter(n => !n.isRead).length);
    
    // Filtra as notificações com base na aba ativa
    filteredNotifications = computed(() => {
        if (this.activeFilter() === 'unread') {
            return this.notifications().filter(n => !n.isRead);
        }
        return this.notifications();
    });
    
    filterTabs = computed<FilterTab[]>(() => [
        { label: 'Todas', filter: 'all', count: this.notifications().length },
        { label: 'Não Lidas', filter: 'unread', count: this.unreadCount() }
    ]);
    
    // --- Métodos de Ação ---
    
    // Mapeia o tipo de notificação para um ícone e cores específicas
    getNotificationIcon(type: NotificationType) {
        switch (type) {
            case 'security': return { icon: CircleAlert, bgColor: 'bg-red-100', iconColor: 'text-red-600' };
            case 'comment': return { icon: MessageSquare, bgColor: 'bg-blue-100', iconColor: 'text-blue-600' };
            case 'update': return { icon: BadgeCheck, bgColor: 'bg-green-100', iconColor: 'text-green-600' };
            default: return { icon: Bell, bgColor: 'bg-gray-100', iconColor: 'text-gray-600' };
        }
    }
    
    markAsRead(id: string) {
        this.notifications.update(notifications => 
            notifications.map(n => n.id === id ? { ...n, isRead: true } : n)
        );
    }
    
    markAllAsRead() {
        this.notifications.update(notifications => 
            notifications.map(n => ({ ...n, isRead: true }))
        );
    }
    
    deleteNotification(id: string) {
        this.notifications.update(notifications => 
            notifications.filter(n => n.id !== id)
        );
    }
}