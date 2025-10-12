import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Aluno {
    id: string;
    nome: string;
    email: string;
}

@Component({
    selector: 'app-create-class-page',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './create-class-page.component.html',
    styleUrls: ['./create-class-page.component.scss']
})

export class CreateClassPageComponent implements OnInit {
    
    public currentStep = 1;
    public form!: FormGroup;
    
    // Dados mockados para a busca de alunos
    public alunosEncontrados: Aluno[] = [];
    public alunosSelecionados: Aluno[] = [];
    
    fb = inject(FormBuilder);    
    
    ngOnInit(): void {
        this.form = this.fb.group({
            disciplina: this.fb.group({
                nome: ['', Validators.required],
                periodo: [null, Validators.required],
                dificuldade: ['FACIL', Validators.required],
                anoLetivo: [new Date().getFullYear(), Validators.required],
                semestreLetivo: [1, Validators.required],
            }),
            turma: this.fb.group({
                titulo: ['', Validators.required],
                descricao: [''],
            }),
            alunos: this.fb.group({
                ids: [[]]
            })
        });
        
        // Simula uma busca inicial de alunos
        this.alunosEncontrados = [
            { id: 'uuid-aluno-1', nome: 'Ana Silva', email: 'ana.silva@email.com' },
            { id: 'uuid-aluno-2', nome: 'Bruno Costa', email: 'bruno.costa@email.com' },
            { id: 'uuid-aluno-3', nome: 'Carla Dias', email: 'carla.dias@email.com' },
            { id: 'uuid-aluno-4', nome: 'Daniel Martins', email: 'daniel.martins@email.com' },
        ];
    }
    
    // Getters para facilitar o acesso aos form groups no template
    get disciplinaForm(): FormGroup { return this.form.get('disciplina') as FormGroup; }
    get turmaForm(): FormGroup { return this.form.get('turma') as FormGroup; }
    
    nextStep(): void {
        if (this.currentStep === 1 && this.disciplinaForm.invalid) {
            this.disciplinaForm.markAllAsTouched();
            return;
        }
        if (this.currentStep === 2 && this.turmaForm.invalid) {
            this.turmaForm.markAllAsTouched();
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
    
    adicionarAluno(aluno: Aluno): void {
        if (!this.alunosSelecionados.some(a => a.id === aluno.id)) {
            this.alunosSelecionados.push(aluno);
        }
    }
    
    removerAluno(alunoId: string): void {
        this.alunosSelecionados = this.alunosSelecionados.filter(a => a.id !== alunoId);
    }
    
    isAlunoSelecionado(alunoId: string): boolean {
        return this.alunosSelecionados.some(a => a.id === alunoId);
    }
    
    criarTurma(): void {
        // Atualiza o form group de alunos com os IDs selecionados
        const ids = this.alunosSelecionados.map(a => a.id);
        this.form.get('alunos.ids')?.setValue(ids);
        
        if (this.form.invalid) {
            console.error("Formulário inválido! Verifique os campos.");
            // Exibe validações em todos os campos para o usuário
            this.form.markAllAsTouched();
            return;
        }
        
        // Monta o DTO final para enviar para a API
        const requestPayload = {
            titulo: this.form.value.turma.titulo,
            descricao: this.form.value.turma.descricao,
            tipoGrupo: 'TURMA',
            idsEstudantesInscritos: this.form.value.alunos.ids,
            disciplina: this.form.value.disciplina
        };
        
        console.log('Dados finais para enviar à API:', requestPayload);
        // Aqui você chamaria seu GrupoService para enviar os dados
        // this.grupoService.criarGrupo(requestPayload, usuarioLogado).subscribe(...)
    }
}