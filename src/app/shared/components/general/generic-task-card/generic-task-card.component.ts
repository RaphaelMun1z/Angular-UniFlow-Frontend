import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { CardHeaderComponent } from "./components/card-header/card-header.component";
import { CardBodyComponent } from "./components/card-body/card-body.component";
import { CardFooterComponent } from "./components/card-footer/card-footer.component";
import { Activity } from '../../../../core/services/activity.service';

@Component({
    selector: 'app-generic-task-card',
    imports: [CommonModule, CardHeaderComponent, CardBodyComponent, CardFooterComponent],
    templateUrl: './generic-task-card.component.html',
    styleUrl: './generic-task-card.component.scss'
})

export class GenericTaskCardComponent {
    @Input() activity!: Activity;
}
