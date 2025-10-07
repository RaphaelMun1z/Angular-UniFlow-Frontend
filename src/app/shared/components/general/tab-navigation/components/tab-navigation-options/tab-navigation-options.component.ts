import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

interface ManagementCard {
    icon: string;
    title: string;
    description: string;
    route: string; // Rota para onde o card irá redirecionar
    iconBgColor: string;
    iconTextColor: string;
}

interface ManagementTab {
    label: string;
    cards: ManagementCard[];
}

@Component({
    selector: 'app-tab-navigation-options',
    imports: [CommonModule],
    templateUrl: './tab-navigation-options.component.html',
    styleUrl: './tab-navigation-options.component.scss'
})

export class TabNavigationOptionsComponent {
    @Input() tabs: ManagementTab[] = [];
    @Input() activeTabIndex!: Number;

    @Output() activeTabIndexChange = new EventEmitter<number>();
    
    selectTab(index: number) {
        this.activeTabIndexChange.emit(index);
    }
}
