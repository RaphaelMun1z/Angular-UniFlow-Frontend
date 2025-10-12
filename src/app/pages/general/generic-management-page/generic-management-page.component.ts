import { Component, computed, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { GenericViewPageComponent } from "../generic-view-page/generic-view-page.component";
import { GenericPageHeaderComponent } from "../../../shared/components/general/generic-page-header/generic-page-header.component";
import { GenericFloatingPlusButtonComponent } from "../../../shared/components/general/generic-floating-plus-button/generic-floating-plus-button.component";

import { ADMIN_NAVIGATION_TABS, ADMIN_OPERATIONS } from '../../../shared/mocks/ADMIN_MANAGEMENT_TABS';
import { PROFESSOR_NAVIGATION_TABS, PROFESSOR_OPERATIONS } from '../../../shared/mocks/PROFESSOR_MANAGEMENT_TABS';
import { ESTUDANTE_NAVIGATION_TABS, ESTUDANTE_OPERATIONS } from '../../../shared/mocks/ESTUDANTE_MANAGEMENT_TABS';
import { CommonModule } from '@angular/common';
import { Operation, Tab } from '../../../shared/interfaces/User.model';
import { RouterOutlet } from '@angular/router';
import { GenericTabNavigationComponent } from "../../../shared/components/general/generic-tab-navigation/generic-tab-navigation.component";

@Component({
    selector: 'app-generic-management-page',
    imports: [CommonModule, GenericViewPageComponent, GenericPageHeaderComponent, GenericFloatingPlusButtonComponent, RouterOutlet, GenericTabNavigationComponent],
    templateUrl: './generic-management-page.component.html',
    styleUrl: './generic-management-page.component.scss'
})

export class GenericManagementPageComponent implements OnInit {
    userLevel: 'admin' | 'professor' | 'estudante' = 'professor';
    
    // Signals para o estado da UI
    title = signal<string>('');
    subtitle = signal<string>('');
    
    // Signals para a lógica de filtragem
    private allOperations = signal<Operation[]>([]);
    activeTabId = signal<string>('');
    
    // Signal computado que filtra os cards com base na aba ativa
    filteredOperations = computed(() => {
        const tabId = this.activeTabId();
        const operations = this.allOperations();
        if (!tabId) {
            return []; // Retorna vazio se nenhuma aba estiver ativa
        }
        return operations.filter(op => op.tabId === tabId);
    });
    
    ngOnInit(): void {
        this.setupUserData();
    }
    
    // Método chamado pelo evento (tabSelected) do componente de abas
    onTabChange(tabId: string): void {
        this.activeTabId.set(tabId);
    }
    
    private setupUserData(): void {
        let currentOps: Operation[] = [];
        
        switch (this.userLevel) {
            case 'admin':
            this.title.set('Painel do Administrador');
            this.subtitle.set('Gerencie usuários, grupos e configurações do sistema');
            currentOps = ADMIN_OPERATIONS;
            break;
            case 'professor':
            this.title.set('Painel Administrativo do Professor');
            this.subtitle.set('Gerencie suas turmas, notas e conteúdos');
            currentOps = PROFESSOR_OPERATIONS;
            break;
            case 'estudante':
            this.title.set('Painel Administrativo do Estudante');
            this.subtitle.set('Acesse suas disciplinas, notas e grupos');
            currentOps = ESTUDANTE_OPERATIONS;
            break;
            default:
            this.title.set('Bem-vindo(a)');
            this.subtitle.set('Selecione uma opção para começar');
            break;
        }
        

        this.allOperations.set(currentOps);
    }
}