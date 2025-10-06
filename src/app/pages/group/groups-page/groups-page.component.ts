import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarAltTwoComponent } from "../../../shared/components/navbar-versions-components/navbar-alt-with-auth/navbar-alt-with-auth.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { RouterLink } from '@angular/router';

export interface GrupoViewModel {
    id: string;
    titulo: string;
    descricao: string;
    status: string;
    statusClass: string;
    membros: number;
    novidades: number;
}

@Component({
    selector: 'app-groups-page',
    imports: [CommonModule, NavbarAltTwoComponent, FooterComponent, RouterLink],
    templateUrl: './groups-page.component.html',
    styleUrl: './groups-page.component.scss'
})

export class GroupsPageComponent implements OnInit {
    isJoinGroupModalOpen = false;
    isCreateGroupModalOpen = false;
    
    grupos: GrupoViewModel[] = []; 
    
    constructor() { }
    
    ngOnInit(): void {
        this.grupos = [
            { id: '1', titulo: 'Matemática Avançada', descricao: 'Grupo de estudo para a disciplina de Matemática Avançada, com foco em cálculo diferencial.', status: 'Ativo', statusClass: 'text-green-800 bg-green-100', membros: 12, novidades: 2 },
            { id: '2', titulo: 'Programação Web', descricao: 'Desenvolvimento de projetos web utilizando HTML, CSS, JavaScript e frameworks modernos.', status: 'Novo', statusClass: 'text-blue-800 bg-blue-100', membros: 8, novidades: 0 }
        ];
    }
}
