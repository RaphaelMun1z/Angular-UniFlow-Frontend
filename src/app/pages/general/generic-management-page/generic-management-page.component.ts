import { Component, computed, OnInit, signal, WritableSignal } from '@angular/core';
import { GenericViewPageComponent } from "../generic-view-page/generic-view-page.component";
import { GenericPageHeaderComponent } from "../../../shared/components/general/generic-page-header/generic-page-header.component";
import { GenericTabNavigationComponent } from "../../../shared/components/general/generic-tab-navigation/generic-tab-navigation.component";
import { GenericNavigationCardComponent } from "../../../shared/components/general/generic-navigation-card/generic-navigation-card.component";
import { PagerComponent } from "../../../shared/components/general/pager/pager.component";
import { GenericFloatingPlusButtonComponent } from "../../../shared/components/general/generic-floating-plus-button/generic-floating-plus-button.component";

import { ADMIN_NAVIGATION_TABS, ADMIN_OPERATIONS } from '../../../shared/mocks/ADMIN_MANAGEMENT_TABS';
import { PROFESSOR_NAVIGATION_TABS, PROFESSOR_OPERATIONS } from '../../../shared/mocks/PROFESSOR_MANAGEMENT_TABS';
import { ESTUDANTE_NAVIGATION_TABS, ESTUDANTE_OPERATIONS } from '../../../shared/mocks/ESTUDANTE_MANAGEMENT_TABS';
import { CommonModule } from '@angular/common';
import { Operation, Tab } from '../../../shared/interfaces/User.model';

@Component({
    selector: 'app-generic-management-page',
    imports: [CommonModule, GenericViewPageComponent, GenericPageHeaderComponent, GenericTabNavigationComponent, GenericNavigationCardComponent, PagerComponent, GenericFloatingPlusButtonComponent],
    templateUrl: './generic-management-page.component.html',
    styleUrl: './generic-management-page.component.scss'
})

export class GenericManagementPageComponent implements OnInit {
    userLevel: 'admin' | 'professor' | 'estudante' = 'professor';
    
    // Signals para o estado da UI
    title = signal<string>('');
    subtitle = signal<string>('');
    tabs = signal<Tab[]>([]);
    
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
    
    // Signals para paginação
    currentPage: WritableSignal<number> = signal(1);
    itemsPerPage: WritableSignal<number> = signal(8);
    totalItems: number = 0; // Este valor deveria ser atualizado com base no total de 'filteredOperations'
    
    ngOnInit(): void {
        this.setupUserData();
    }
    
    // Método chamado pelo evento (tabSelected) do componente de abas
    onTabChange(tabId: string): void {
        this.activeTabId.set(tabId);
    }
    
    private setupUserData(): void {
        let currentTabs: Tab[] = [];
        let currentOps: Operation[] = [];
        
        switch (this.userLevel) {
            case 'admin':
            this.title.set('Painel do Administrador');
            this.subtitle.set('Gerencie usuários, grupos e configurações do sistema');
            currentTabs = ADMIN_NAVIGATION_TABS;
            currentOps = ADMIN_OPERATIONS;
            break;
            case 'professor':
            this.title.set('Painel do Professor');
            this.subtitle.set('Gerencie suas turmas, notas e conteúdos');
            currentTabs = PROFESSOR_NAVIGATION_TABS;
            currentOps = PROFESSOR_OPERATIONS;
            break;
            case 'estudante':
            this.title.set('Painel do Estudante');
            this.subtitle.set('Acesse suas disciplinas, notas e grupos');
            currentTabs = ESTUDANTE_NAVIGATION_TABS;
            currentOps = ESTUDANTE_OPERATIONS;
            break;
            default:
            this.title.set('Bem-vindo(a)');
            this.subtitle.set('Selecione uma opção para começar');
            break;
        }
        
        this.tabs.set(currentTabs);
        this.allOperations.set(currentOps);
        
        if (currentTabs.length > 0) {
            this.activeTabId.set(currentTabs[0].id);
        } else {
            this.activeTabId.set('');
        }
    }
}