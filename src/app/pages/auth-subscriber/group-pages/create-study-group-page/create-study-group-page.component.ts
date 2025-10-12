import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface Aluno {
    id: string;
    nome: string;
    email: string;
    avatarUrl: string; 
}

@Component({
    selector: 'app-create-study-group-page',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './create-study-group-page.component.html',
    styleUrl: './create-study-group-page.component.scss'
})

export class CreateStudyGroupPageComponent implements OnInit {
    
    public form!: FormGroup;
    public currentStep = 1; 
    public activeTab: 'basico' | 'topico' | 'membros' = 'basico';
    
    public alunosEncontrados: Aluno[] = [];
    public alunosSelecionados: Aluno[] = [];
    
    fb = inject(FormBuilder);
    
    ngOnInit(): void {
        this.form = this.fb.group({
            disciplina: this.fb.group({
                nome: ['', Validators.required],
                dificuldade: ['MEDIO', Validators.required]
            }),
            grupo: this.fb.group({
                titulo: ['', Validators.required],
                descricao: [''],
            }),
            alunos: this.fb.group({
                ids: [[]]
            })
        });
        
        // Simula uma busca inicial de alunos para convidar
        this.alunosEncontrados = [
            { id: 'uuid-aluno-1', nome: 'Ana Silva', email: 'ana.silva@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=1' },
            { id: 'uuid-aluno-2', nome: 'Bruno Costa', email: 'bruno.costa@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=2' },
            { id: 'uuid-aluno-3', nome: 'Carla Dias', email: 'carla.dias@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=3' },
            { id: 'uuid-aluno-4', nome: 'Daniel Martins', email: 'daniel.martins@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=4' },
        ];
    }
    
    get disciplinaForm(): FormGroup { return this.form.get('disciplina') as FormGroup; }
    get grupoForm(): FormGroup { return this.form.get('grupo') as FormGroup; }
    
    nextStep(): void {
        if (this.currentStep === 1 && this.disciplinaForm.invalid) {
            this.disciplinaForm.markAllAsTouched();
            return;
        }
        if (this.currentStep === 2 && this.grupoForm.invalid) {
            this.grupoForm.markAllAsTouched();
            return;
        }
        if (this.currentStep < 4) {
            this.currentStep++;
        }
    }
    
    prevStep(): void {
        if (this.currentStep > 1) {
            this.currentStep--;
        }
    }
    
    goToStep(step: number): void {
        if (step < this.currentStep) {
            this.currentStep = step;
        }
    }
    
    adicionarAluno(aluno: Aluno): void {
        if (!this.isAlunoSelecionado(aluno.id)) {
            this.alunosSelecionados.push(aluno);
        }
    }
    
    removerAluno(alunoId: string): void {
        this.alunosSelecionados = this.alunosSelecionados.filter(a => a.id !== alunoId);
    }
    
    isAlunoSelecionado(alunoId: string): boolean {
        return this.alunosSelecionados.some(a => a.id === alunoId);
    }
    
    criarGrupo(): void {
        const ids = this.alunosSelecionados.map(a => a.id);
        this.form.get('alunos.ids')?.setValue(ids);
        
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        
        const requestPayload = {
            titulo: this.form.value.grupo.titulo,
            descricao: this.form.value.grupo.descricao,
            tipoGrupo: 'GRUPO_ESTUDO',
            idsEstudantesInscritos: this.form.value.alunos.ids,
            disciplina: {
                nome: this.form.value.disciplina.nome,
                dificuldade: this.form.value.disciplina.dificuldade,
                periodo: 1,
                anoLetivo: new Date().getFullYear(),
                semestreLetivo: 1
            }
        };
        console.log('Dados finais para enviar à API:', requestPayload);
    }
}