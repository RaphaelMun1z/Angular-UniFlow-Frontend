import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Operation } from '../../../interfaces/User.model';

@Component({
    selector: 'app-generic-navigation-card',
    imports: [CommonModule, RouterLink],
    templateUrl: './generic-navigation-card.component.html',
    styleUrl: './generic-navigation-card.component.scss'
})

export class GenericNavigationCardComponent {
    @Input({ required: true }) operation!: Operation;
}
