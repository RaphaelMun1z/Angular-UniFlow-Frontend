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
    
    openPopup(): void {
        this.isNotificationsOpen = true;
    }
    
    closePopup(): void {
        this.isNotificationsOpen = false;
    }
}
