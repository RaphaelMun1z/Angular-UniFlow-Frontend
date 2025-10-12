import { Component, signal, WritableSignal } from "@angular/core";
import { GenericGroupCardComponent } from "../../../shared/components/general/generic-group-card/generic-group-card.component";
import { CommonModule } from "@angular/common";
import { GenericViewPageComponent } from "../generic-view-page/generic-view-page.component";
import { PagerComponent } from "../../../shared/components/general/pager/pager.component";
import { GenericFloatingPlusButtonComponent } from "../../../shared/components/general/generic-floating-plus-button/generic-floating-plus-button.component";
import { GenericPageHeaderComponent } from "../../../shared/components/general/generic-page-header/generic-page-header.component";

interface SidebarLink {
    id: string;
    label: string;
    link: string;
    icon: string; // SVG path data
}

interface Tab {
    id: string;
    label: string;
    route: string; // Caminho para o RouterLink
}

@Component({
    selector: 'app-generic-groups-page',
    imports: [CommonModule, GenericViewPageComponent, PagerComponent, GenericFloatingPlusButtonComponent, GenericPageHeaderComponent],
    templateUrl: './generic-groups-page.component.html',
    styleUrl: './generic-groups-page.component.scss'
})

export class GenericGroupsPageComponent {
    title = signal<string>('Grupos');
    
    totalDeItensDoSeuSignal = signal(157);
    paginaAtualSignal = signal(1);
    itensPorPaginaSignal = signal(10);
    
    tabs = signal<Tab[]>([
        { id: 'ativos', label: 'Ativos', route: '/app/grupos?status=ativo' },
        { id: 'inativos', label: 'Inativos', route: '/app/grupos?status=inativo' },
    ]);
}