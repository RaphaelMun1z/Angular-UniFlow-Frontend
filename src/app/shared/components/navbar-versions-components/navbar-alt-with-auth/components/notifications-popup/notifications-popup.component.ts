import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SafeHtmlPipe } from "../../safe-html.pipe";

@Component({
    selector: 'app-notifications-popup',
    imports: [RouterLink, CommonModule, SafeHtmlPipe],
    templateUrl: './notifications-popup.component.html',
    styleUrl: './notifications-popup.component.scss'
})

export class NotificationsPopupComponent {
    
    notifications = [
        { 
            lida: false,
            mensagem: 'Sua atividade <strong>Relatório de Física</strong> foi avaliada.',
            contexto: 'Turma: Física Quântica',
            timestamp: 'há 5 minutos',
            link: '/atividades-entrega/uuid-da-entrega',
            iconPath: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />',
            iconBgClass: 'bg-green-100',
            iconClass: 'text-green-600'
        },
        { 
            lida: false,
            mensagem: 'Nova atividade: <strong>Trabalho de Cálculo III</strong>',
            contexto: 'Turma: Matemática Avançada',
            timestamp: 'há 2 horas',
            link: '/atividades-avaliativas/uuid-da-atividade',
            iconPath: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />',
            iconBgClass: 'bg-orange-100',
            iconClass: 'text-orange-600'
        },
        { 
            lida: true,
            mensagem: '<strong>Professor Teste</strong> adicionou você ao grupo <strong>Projeto de Banco de Dados</strong>.',
            contexto: 'Grupo de Estudo',
            timestamp: 'Ontem',
            link: '/grupos/uuid-do-grupo',
            iconPath: '<path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 015.25 0m-5.25 0a3.75 3.75 0 00-5.25 0M3 13.06l7.547 4.425A1.5 1.5 0 0012 16.5v8.25" />',
            iconBgClass: 'bg-blue-100',
            iconClass: 'text-blue-600'
        }
    ];
    
    get unreadNotificationsCount(): number {
        return this.notifications.filter(n => !n.lida).length;
    }
}
