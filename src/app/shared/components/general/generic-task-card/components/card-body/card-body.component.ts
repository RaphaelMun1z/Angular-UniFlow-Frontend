import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Activity } from '../../../../../../core/services/activity.service';

@Component({
    selector: 'app-card-body',
    imports: [CommonModule],
    templateUrl: './card-body.component.html',
    styleUrl: './card-body.component.scss'
})

export class CardBodyComponent {
    @Input() activity!: Activity;
}
