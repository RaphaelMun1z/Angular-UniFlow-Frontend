import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

// src/app/operation.model.ts
export interface Operation {
    id: number;
    title: string;
    description: string;
    icon: string;
    iconBgColor: string;
    iconColor: string;
    route: string; // <-- ADICIONADO: Caminho para o routerLink
}

@Component({
    selector: 'app-generic-navigation-card',
    imports: [CommonModule, RouterLink],
    templateUrl: './generic-navigation-card.component.html',
    styleUrl: './generic-navigation-card.component.scss'
})

export class GenericNavigationCardComponent {
    @Input({ required: true }) operation!: Operation;
}
