import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface AlunoEntrega {
    alunoNome: string;
    status: 'AVALIADO' | 'ENTREGUE' | 'PENDENTE';
    statusClass: string;
    dataEnvio: string | null;
    nota: string | null;
}

@Component({
    selector: 'app-professor-activity-page',
    imports: [CommonModule],
    templateUrl: './professor-activity-page.component.html',
    styleUrl: './professor-activity-page.component.scss'
})

export class ProfessorActivityPageComponent implements OnInit {
    
    public activeTab = 'todos';
    
    // Lista completa de todas as entregas (viria do service)
    public todasEntregas: AlunoEntrega[] = [];
    
    // Lista que será exibida na tela, após a filtragem
    public entregasFiltradas: AlunoEntrega[] = [];
    
    ngOnInit(): void {
        // Exemplo de dados (em um app real, viria do AtividadeAvaliativaDetalhadaResponseDTO)
        this.todasEntregas = [
            { alunoNome: 'Ana Silva', status: 'AVALIADO', statusClass: 'text-blue-800 bg-blue-100', dataEnvio: '20/10/2025', nota: '8.5' },
            { alunoNome: 'Carlos Pereira', status: 'ENTREGUE', statusClass: 'text-green-800 bg-green-100', dataEnvio: '22/10/2025', nota: null },
            { alunoNome: 'Mariana Costa', status: 'PENDENTE', statusClass: 'text-orange-800 bg-orange-100', dataEnvio: null, nota: null },
            { alunoNome: 'João Alves', status: 'ENTREGUE', statusClass: 'text-green-800 bg-green-100', dataEnvio: '23/10/2025', nota: null },
        ];
        
        // Inicia a lista filtrada com todos os resultados
        this.entregasFiltradas = [...this.todasEntregas];
    }
    
    // Getters para as contagens exibidas nas abas
    get entreguesCount(): number {
        return this.todasEntregas.filter(e => e.status === 'ENTREGUE').length;
    }
    
    get pendentesCount(): number {
        return this.todasEntregas.filter(e => e.status === 'PENDENTE').length;
    }
    
    get avaliadosCount(): number {
        return this.todasEntregas.filter(e => e.status === 'AVALIADO').length;
    }
    
    // Método que executa a filtragem
    filtrarEntregas(status: string): void {
        this.activeTab = status;
        if (status === 'todos') {
            this.entregasFiltradas = [...this.todasEntregas];
        } else {
            this.entregasFiltradas = this.todasEntregas.filter(e => e.status.toLowerCase() === status);
        }
    }
}