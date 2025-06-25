import { Component, Input, OnInit } from '@angular/core';
import { AvatarDropdownComponent } from "../avatar-dropdown/avatar-dropdown.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TieredMenu } from 'primeng/tieredmenu';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-navbar-alt-tree',
    imports: [CommonModule, RouterModule, AvatarDropdownComponent, TieredMenu],
    templateUrl: './navbar-alt-tree.component.html',
    styleUrl: './navbar-alt-tree.component.scss'
})

export class NavbarAltTreeComponent implements OnInit{
    @Input() bgStyle: number = 0;
    items: MenuItem[] | undefined;
    
    ngOnInit() {
        this.items = [
            {
                label: 'Área do Usuário',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'fas fa-home',
                        routerLink: '/user/dashboard'
                    },
                    {
                        label: 'Grupos',
                        icon: 'fas fa-users',
                        routerLink: '/groups/1'
                    },
                    {
                        label: 'Mural de Atividades',
                        icon: 'fas fa-clipboard-list',
                        routerLink: '/user/activities/wall'
                    },
                    {
                        label: 'Atividades Registradas',
                        icon: 'fas fa-tasks',
                        routerLink: '/user/activities/registered'
                    }
                ]
            },
            { separator: true },
            {
                label: 'Administrativo',
                items: [
                    {
                        label: 'Painel Administrativo',
                        icon: 'fas fa-shield-alt',
                        routerLink: '/admin/dashboard'
                    },
                    {
                        label: 'Gerenciamento de Planos',
                        icon: 'fas fa-id-card',
                        routerLink: '/admin/plan-management'
                    },
                    {
                        label: 'Gerenciamento de Usuários',
                        icon: 'fas fa-file-shield',
                        routerLink: '/admin/user-management'
                    },
                    {
                        label: 'Moderação de Conteúdo',
                        icon: 'fas fa-file-shield',
                        routerLink: '/admin/content-moderation'
                    }
                ]
            },
            { separator: true },
            {
                label: 'Outros',
                items: [
                    {
                        label: 'Financeiro',
                        icon: 'fas fa-coins',
                        routerLink: '/admin/finance'
                    },
                    {
                        label: 'Transmissão',
                        icon: 'fas fa-wifi',
                        routerLink: '/admin/message-broadcast'
                    },
                    {
                        label: 'Logs do Sistema',
                        icon: 'fa-regular fa-circle-dot',
                        routerLink: '/admin/logs'
                    }
                ]
            }
        ];
    }
}
