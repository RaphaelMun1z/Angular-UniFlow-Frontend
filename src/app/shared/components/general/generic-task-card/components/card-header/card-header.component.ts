import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Activity } from '../../../../../../core/services/activity.service';

@Component({
    selector: 'app-card-header',
    imports: [CommonModule],
    templateUrl: './card-header.component.html',
    styleUrl: './card-header.component.scss'
})

export class CardHeaderComponent {
    @Input() activity!: Activity;
}
