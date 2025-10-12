import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

export interface ProfileViewModel {
    nome: string;
    email: string;
    papel: 'Professor' | 'Estudante' | 'Admin';
    areaAtuacao?: string;
    periodoDeIngresso?: {
        ano: number;
        semestre: number;
    };
}

@Component({
    selector: 'app-user-profile-info',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './user-profile-info.component.html',
    styleUrl: './user-profile-info.component.scss'
})

export class UserProfileInfoComponent implements OnInit {
    
    // O componente recebe os dados do usuário do componente pai
    @Input() usuario!: ProfileViewModel;
    
    public isEditing = false;
    public profileForm!: FormGroup;
    
    fb = inject(FormBuilder);
    
    ngOnInit(): void {
        // Inicializa o formulário com a estrutura e validações
        this.profileForm = this.fb.group({
            nome: ['', [Validators.required, Validators.minLength(3)]],
            email: [{ value: '', disabled: true }], // O email não pode ser editado
            areaAtuacao: [''],
            periodoDeIngresso: this.fb.group({
                ano: [null],
                semestre: [null]
            })
        });
    }
    
    iniciarEdicao(): void {
        // Preenche o formulário com os dados atuais do usuário
        this.profileForm.patchValue({
            nome: this.usuario.nome,
            email: this.usuario.email,
            areaAtuacao: this.usuario.areaAtuacao,
            periodoDeIngresso: this.usuario.periodoDeIngresso
        });
        this.isEditing = true;
    }
    
    cancelarEdicao(): void {
        this.isEditing = false;
    }
    
    salvarAlteracoes(): void {
        if (this.profileForm.invalid) {
            return; // Impede o envio se o formulário for inválido
        }
        
        console.log('Salvando dados:', this.profileForm.value);
        // Aqui você chamaria seu ProfileService para enviar os dados para o backend
        // this.profileService.atualizarPerfil(this.profileForm.getRawValue()).subscribe(
        //   (usuarioAtualizado) => {
        //     this.usuario = usuarioAtualizado; // Atualiza a visão com os novos dados
        //     this.isEditing = false;
        //   }
        // );
        
        // Simulação de sucesso
        this.isEditing = false;
        this.usuario.nome = this.profileForm.value.nome;
        this.usuario.areaAtuacao = this.profileForm.value.areaAtuacao;
        this.usuario.periodoDeIngresso = this.profileForm.value.periodoDeIngresso;
    }
}