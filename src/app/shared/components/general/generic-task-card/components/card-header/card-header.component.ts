import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Activity } from '../../../../../../core/services/activity.service';
import { SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-card-header',
    imports: [CommonModule],
    templateUrl: './card-header.component.html',
    styleUrl: './card-header.component.scss'
})

export class CardHeaderComponent {
    @Input({ required: true }) set activity(value: Activity) {
        this._activity = value;
    }

    get activity(): Activity {
        return this._activity;
    }

    private _activity!: Activity;
    
    public safeIcon: SafeHtml = '';
}
