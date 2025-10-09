import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabNavigationComponent } from "../tab-navigation/tab-navigation.component";

interface ManagementCard {
    icon: string;
    title: string;
    description: string;
    route: string;
    iconBgColor: string;
    iconTextColor: string;
}

interface ManagementTab {
    label: string;
    cards: ManagementCard[];
}

@Component({
    selector: 'app-user-redirection-panel-page',
    imports: [CommonModule, RouterModule, TabNavigationComponent],
    templateUrl: './user-redirection-panel-page.component.html',
    styleUrl: './user-redirection-panel-page.component.scss'
})

export class UserRedirectionPanelPageComponent {
    @Input() title: string = 'Meu Painel';
    @Input() subtitle: string = 'Acesse as principais áreas administrativas da sua conta.';
    @Input() tabs: ManagementTab[] = [];

    activeTabIndex = 0;
    
    selectTab(index: number) {
        this.activeTabIndex = index;
    }
}
