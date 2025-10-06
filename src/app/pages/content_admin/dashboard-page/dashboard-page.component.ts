import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Metricas {
    usuariosAtivos: string;
    assinaturasAtivas: string;
    receitaMensal: string;
    novosGrupos: string;
}

export interface DadosGraficoLinhas {
    mes: string;
    lucro: number;
}

export interface DadosGraficoPizza {
    tipo: string;
    percentual: number;
    cor: string;
}

export interface UsuarioRecente {
    nome: string;
    papel: string;
    avatarUrl: string;
    tempo: string;
}

export interface TransacaoRecente {
    id: string;
    usuarioNome: string;
    usuarioEmail: string;
    planoNome: string;
    valor: number;
    status: 'Aprovado' | 'Pendente' | 'Recusado';
    data: Date;
}


@Component({
    selector: 'app-dashboard-page',
    imports: [CommonModule, RouterLink, CurrencyPipe, DatePipe],
    templateUrl: './dashboard-page.component.html',
    styleUrl: './dashboard-page.component.scss',
    providers: [
        { provide: LOCALE_ID, useValue: 'pt-BR' }
    ]
})

export class DashboardPageComponent implements OnInit {
    
    public metricas!: Metricas;
    public lucroGrafico!: DadosGraficoLinhas[];
    public novosUsuariosGrafico!: DadosGraficoPizza[];
    public ultimosUsuarios!: UsuarioRecente[];
    public ultimasTransacoes!: TransacaoRecente[];
    
    constructor() { }
    
    ngOnInit(): void {
        // Carrega todos os dados mockados ao iniciar o componente
        this.metricas = {
            usuariosAtivos: '2,543',
            assinaturasAtivas: '1,821',
            receitaMensal: 'R$ 15.480',
            novosGrupos: '+32'
        };
        
        this.lucroGrafico = [
            { mes: 'Jan', lucro: 6500 },
            { mes: 'Fev', lucro: 5900 },
            { mes: 'Mar', lucro: 8000 },
            { mes: 'Abr', lucro: 8100 },
            { mes: 'Mai', lucro: 10600 },
            { mes: 'Jun', lucro: 11500 },
            { mes: 'Jul', lucro: 15480 },
        ];
        
        this.novosUsuariosGrafico = [
            { tipo: 'Estudantes', percentual: 75, cor: 'text-indigo-600' },
            { tipo: 'Professores', percentual: 25, cor: 'text-sky-500' },
        ];
        
        this.ultimosUsuarios = [
            { nome: 'Ana Silva', papel: 'Estudante', avatarUrl: 'https://i.pravatar.cc/150?u=1', tempo: '2h atrás' },
            { nome: 'Bruno Costa', papel: 'Professor', avatarUrl: 'https://i.pravatar.cc/150?u=2', tempo: '5h atrás' },
            { nome: 'Carla Dias', papel: 'Estudante', avatarUrl: 'https://i.pravatar.cc/150?u=3', tempo: 'Ontem' },
            { nome: 'Daniel Martins', papel: 'Estudante', avatarUrl: 'https://i.pravatar.cc/150?u=4', tempo: 'Ontem' }
        ];
        
        this.ultimasTransacoes = [
            { id: '1', usuarioNome: 'Mariana Costa', usuarioEmail: 'mariana@email.com', planoNome: 'Professor PRO', valor: 79.90, status: 'Aprovado', data: new Date('2025-10-06T10:30:00') },
            { id: '2', usuarioNome: 'João Alves', usuarioEmail: 'joao@email.com', planoNome: 'Estudante Essencial', valor: 29.90, status: 'Aprovado', data: new Date('2025-10-06T09:15:00') },
            { id: '3', usuarioNome: 'Lucas Martins', usuarioEmail: 'lucas@email.com', planoNome: 'Estudante Essencial', valor: 29.90, status: 'Recusado', data: new Date('2025-10-05T21:45:00') },
            { id: '4', usuarioNome: 'Beatriz Lima', usuarioEmail: 'beatriz@email.com', planoNome: 'Professor PRO', valor: 79.90, status: 'Aprovado', data: new Date('2025-10-05T18:00:00') }
        ];
    }
}