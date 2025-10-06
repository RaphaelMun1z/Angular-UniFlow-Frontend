import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface PlanoViewModel {
    nome: string;
    descricao: string;
    precoMensal: number;
    precoAnual: number;
    isPopular: boolean;
    features: { texto: string, incluso: boolean }[];
}

@Component({
    selector: 'app-plan-card',
    imports: [CommonModule, CurrencyPipe],
    templateUrl: './plan-card.component.html',
    styleUrl: './plan-card.component.scss'
})

export class PlanCardComponent {
    @Input() plano!: PlanoViewModel;
    @Input() billingCycle: 'mensal' | 'anual' = 'mensal';
}
