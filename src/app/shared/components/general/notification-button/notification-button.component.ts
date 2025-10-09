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
    isNotificationsOpen: boolean = false;
    unreadNotificationsCount: any;
}
