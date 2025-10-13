import { Routes } from '@angular/router';
import { FinancePageComponent } from './pages/auth-admin/finance-page/finance-page.component';
import { PlanManagementPageComponent } from './pages/auth-admin/plan-management-page/plan-management-page.component';
import { UserManagementPageComponent } from './pages/auth-admin/user-management-page/user-management-page.component';
import { AdminGroupsAuditPageComponent } from './pages/auth-admin/admin-groups-audit-page/admin-groups-audit-page.component';
import { AdminGroupsGlobalSettingsPageComponent } from './pages/auth-admin/admin-groups-global-settings-page/admin-groups-global-settings-page.component';
import { AdminGroupsReportsAndStatisticsPageComponent } from './pages/auth-admin/admin-groups-reports-and-statistics-page/admin-groups-reports-and-statistics-page.component';
import { AdminGroupsSearchPageComponent } from './pages/auth-admin/admin-groups-search-page/admin-groups-search-page.component';
import { GroupNavigationPageComponent } from './pages/auth-admin/group-navigation-page/group-navigation-page.component';
import { GroupTypeSelectionPageComponent } from './pages/auth-admin/group-type-selection-page/group-type-selection-page.component';
import { ListGroupsManagementComponent } from './pages/auth-admin/list-groups-management/list-groups-management.component';
import { MessageBroadcastPageComponent } from './pages/auth-admin/message-broadcast-page/message-broadcast-page.component';
import { CreateClassPageComponent } from './pages/auth-subscriber/group-pages/create-class-page/create-class-page.component';
import { CreateStudyGroupPageComponent } from './pages/auth-subscriber/group-pages/create-study-group-page/create-study-group-page.component';
import { AccessDeniedPageComponent } from './pages/public-pages/access-pages/access-denied-page/access-denied-page.component';
import { DashboardPageComponent } from './pages/generic-pages/dashboard-page/dashboard-page.component';

export const ADMIN_ROUTES: Routes = [
    {
        path: '',
        children: [
            { 
                path: '', 
                redirectTo: 'dashboard', 
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardPageComponent
            },
            {
                path: 'gerenciar',
                children: [
                    { 
                        path: '', 
                        redirectTo: 'usuarios', 
                        pathMatch: 'full'
                    },
                    {
                        path: 'usuarios',
                        component: UserManagementPageComponent
                    },
                    {
                        path: 'planos',
                        component: PlanManagementPageComponent
                    },
                    {
                        path: 'financeiro',
                        component: FinancePageComponent
                    },
                    {
                        path: 'notificacoes',
                        component: MessageBroadcastPageComponent
                    },
                    { 
                        path: 'grupos', 
                        children: [
                            { 
                                path: '', 
                                redirectTo: 'navegacao', 
                                pathMatch: 'full'
                            },
                            {
                                path: 'navegacao',
                                component: GroupNavigationPageComponent
                            },
                            {
                                path: 'listar',
                                component: ListGroupsManagementComponent
                            },
                            {
                                path: 'cadastrar',
                                children: [
                                    { 
                                        path: '', 
                                        redirectTo: 'tipo', 
                                        pathMatch: 'full'
                                    },
                                    {
                                        path: 'tipo',
                                        component: GroupTypeSelectionPageComponent
                                    },
                                    {
                                        path: 'turma',
                                        component: CreateClassPageComponent
                                    },
                                    {
                                        path: 'grupo-de-estudo',
                                        component: CreateStudyGroupPageComponent
                                    },
                                ]
                            },
                            {
                                path: 'estatistica',
                                component: AdminGroupsReportsAndStatisticsPageComponent
                            },
                            {
                                path: 'configuracoes',
                                component: AdminGroupsGlobalSettingsPageComponent
                            },
                            {
                                path: 'auditoria',
                                component: AdminGroupsAuditPageComponent
                            },
                            {
                                path: 'buscar-por-convite',
                                component: AdminGroupsSearchPageComponent
                            },
                        ]
                    },
                ]
            },
            { 
                path: 'acesso-negado', 
                component: AccessDeniedPageComponent
            } 
        ]
    },
];