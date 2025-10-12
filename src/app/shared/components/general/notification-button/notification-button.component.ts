import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NotificationsPopupComponent } from "../../navbars/navbar-auth/components/notifications-popup/notifications-popup.component";

@Component({
    selector: 'app-notification-button',
    imports: [CommonModule, NotificationsPopupComponent],
    templateUrl: './notification-button.component.html',
    styleUrl: './notification-button.component.scss'
})

export class NotificationButtonComponent {
    @Input() unreadNotificationsCount = 0;
    isNotificationsOpen = false;
    
    private closeTimer: any;
    
    openPopup(): void {
        // Cancela qualquer timer de fechamento que esteja pendente
        clearTimeout(this.closeTimer);
        this.isNotificationsOpen = true;
    }
    
    closePopup(): void {
        // Inicia um timer para fechar o menu após um breve delay (200ms)
        this.closeTimer = setTimeout(() => {
            this.isNotificationsOpen = false;
        }, 200);
    }
}
