import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TabNavigationOptionsComponent } from "./components/tab-navigation-options/tab-navigation-options.component";
import { TabNavigationCardsComponent } from "./components/tab-navigation-cards/tab-navigation-cards.component";

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
    selector: 'app-tab-navigation',
    imports: [TabNavigationOptionsComponent, TabNavigationCardsComponent],
    templateUrl: './tab-navigation.component.html',
    styleUrl: './tab-navigation.component.scss'
})

export class TabNavigationComponent {
    @Input() tabs: ManagementTab[] = [];
    @Input() activeTabIndex!: Number;
    
    @Output() activeTabIndexChange = new EventEmitter<number>();
    
    selectTab(index: number) {
        this.activeTabIndexChange.emit(index);
    }
}
