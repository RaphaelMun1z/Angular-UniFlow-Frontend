import { Component, Input } from "@angular/core";
import { SafeHtmlPipe } from "../../../safe-html.pipe";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

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
    selector: 'app-tab-navigation-cards',
    imports: [RouterLink, CommonModule, SafeHtmlPipe],
    templateUrl: './tab-navigation-cards.component.html',
    styleUrl: './tab-navigation-cards.component.scss'
})

export class TabNavigationCardsComponent {
    @Input() tabs: ManagementTab[] = [];

    @Input() activeTabIndex!: number;
}
