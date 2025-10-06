import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SectionHeaderComponent } from '../components/section-header/section-header.component';
import { PlanCardComponent, PlanoViewModel } from './components/plan-card/plan-card.component';
import { FaqComponent } from './components/faq/faq.component';

@Component({
    selector: 'app-plans-page',
    imports: [CommonModule, SectionHeaderComponent, PlanCardComponent, FaqComponent],
    templateUrl: './plans-page.component.html',
    styleUrl: './plans-page.component.scss'
})

export class PlansPageComponent implements OnInit {
    public billingCycle: 'mensal' | 'anual' = 'mensal';
    public planos: PlanoViewModel[] = [];
    
    constructor() { }
    
    ngOnInit(): void {
        this.planos = [
            {
                nome: 'Estudante Essencial',
                descricao: 'Ideal para organização pessoal e pequenos grupos de estudo.',
                precoMensal: 29.90,
                precoAnual: 299.00,
                isPopular: false,
                features: [
                    { texto: 'Até 5 Grupos', incluso: true },
                    { texto: 'Até 20 Membros por grupo', incluso: true },
                    { texto: 'Atividades Colaborativas', incluso: true },
                    { texto: 'Criação de Subgrupos', incluso: false },
                    { texto: 'Templates de Atividade', incluso: false },
                ]
            },
            {
                nome: 'Professor PRO',
                descricao: 'Ferramentas completas para gerenciar turmas e avaliações.',
                precoMensal: 79.90,
                precoAnual: 799.00,
                isPopular: true,
                features: [
                    { texto: 'Até 50 Grupos', incluso: true },
                    { texto: 'Até 100 Membros por grupo', incluso: true },
                    { texto: 'Atividades Colaborativas', incluso: true },
                    { texto: 'Criação de Subgrupos', incluso: true },
                    { texto: 'Templates de Atividade', incluso: true },
                ]
            },
            {
                nome: 'Institucional',
                descricao: 'Solução completa para escolas e universidades.',
                precoMensal: 0, // Preço customizado
                precoAnual: 0,
                isPopular: false,
                features: [
                    { texto: 'Grupos Ilimitados', incluso: true },
                    { texto: 'Membros Ilimitados', incluso: true },
                    { texto: 'Analytics Avançado', incluso: true },
                    { texto: 'Suporte Prioritário', incluso: true },
                    { texto: 'Integrações LMS', incluso: true },
                ]
            }
        ];
    }
}