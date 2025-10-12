import { Component, Input } from '@angular/core';
import { Activity } from '../../../../../../../../core/services/activity.service';

@Component({
    selector: 'app-user-info',
    imports: [],
    templateUrl: './user-info.component.html',
    styleUrl: './user-info.component.scss'
})

export class UserInfoComponent {
    @Input() activity!: Activity; 
}
