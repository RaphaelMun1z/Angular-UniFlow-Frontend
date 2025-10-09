import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TooltipDirective } from '../../../../core/directives/tooltip.directive';

@Component({
    selector: 'app-generic-page-header',
    imports: [CommonModule, TooltipDirective],
    templateUrl: './generic-page-header.component.html',
    styleUrl: './generic-page-header.component.scss'
})

export class GenericPageHeaderComponent {
    @Input() title!: string;
    textoDoTooltip = 'Clique para ver suas notificações!';
}
