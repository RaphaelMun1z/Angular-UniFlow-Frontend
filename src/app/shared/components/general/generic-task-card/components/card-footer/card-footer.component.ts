import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserInfoComponent } from "./components/user-info/user-info.component";
import { Activity } from '../../../../../../core/services/activity.service';

@Component({
    selector: 'app-card-footer',
    imports: [CommonModule, UserInfoComponent],
    templateUrl: './card-footer.component.html',
    styleUrl: './card-footer.component.scss'
})

export class CardFooterComponent {
    @Input() activity!: Activity; 
}
