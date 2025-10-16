import { Routes } from '@angular/router';
import { FinancePageComponent } from './pages/admin-pages/finance-page/finance-page.component';
import { PlanManagementPageComponent } from './pages/admin-pages/plan-management-page/plan-management-page.component';
import { UserManagementPageComponent } from './pages/admin-pages/user-management-page/user-management-page.component';
import { AdminGroupsAuditPageComponent } from './pages/admin-pages/groups/admin-groups-audit-page/admin-groups-audit-page.component';
import { AdminGroupsGlobalSettingsPageComponent } from './pages/admin-pages/groups/admin-groups-global-settings-page/admin-groups-global-settings-page.component';
import { AdminGroupsReportsAndStatisticsPageComponent } from './pages/admin-pages/groups/admin-groups-reports-and-statistics-page/admin-groups-reports-and-statistics-page.component';
import { GroupsSearchModalComponent } from './shared/components/general/groups-search-modal/groups-search-modal.component';
import { GroupNavigationPageComponent } from './pages/admin-pages/groups/group-navigation-page/group-navigation-page.component';
import { ListGroupsManagementComponent } from './pages/admin-pages/groups/list-groups-management/list-groups-management.component';
import { MessageBroadcastPageComponent } from './pages/admin-pages/message-broadcast-page/message-broadcast-page.component';
import { AccessDeniedPageComponent } from './pages/public-pages/access-pages/access-denied-page/access-denied-page.component';
import { DashboardPageComponent } from './pages/current-user-pages/dashboard-page/dashboard-page.component';
import { ContentModerationPageComponent } from './pages/admin-pages/content-moderation-page/content-moderation-page.component';
import { SystemLogsPageComponent } from './pages/admin-pages/system-logs-page/system-logs-page.component';
import { CreateClassPageComponent } from './pages/group-pages/create-class-page/create-class-page.component';
import { CreateStudyGroupPageComponent } from './pages/group-pages/create-study-group-page/create-study-group-page.component';
import { GroupTypeSelectionPageComponent } from './pages/group-pages/group-type-selection-page/group-type-selection-page.component';

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
                path: 'auditoria',
                component: SystemLogsPageComponent
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
                        path: 'conteudo',
                        component: ContentModerationPageComponent
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
                                component: GroupsSearchModalComponent
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