import { Routes } from '@angular/router';
import { TasksListComponent } from './pages/generic-pages/generic-tasks-page/components/tasks-list/tasks-list.component';
import { UserNotificationsComponent } from './pages/current-user-pages/user-notifications/user-notifications.component';
import { UserPaymentHistoryComponent } from './pages/current-user-pages/user-payment-history/user-payment-history.component';
import { UserPlanPageComponent } from './pages/current-user-pages/user-plan-page/user-plan-page.component';
import { UserProfilePageComponent } from './pages/current-user-pages/user-profile-page/user-profile-page.component';
import { EstudanteActivityPageComponent } from './pages/activity-pages/estudante-activity-page/estudante-activity-page.component';
import { EstudanteDashboardPageComponent } from './pages/current-user-pages/estudante-dashboard-page/estudante-dashboard-page.component';
import { ProfessorActivityPageComponent } from './pages/activity-pages/professor-activity-page/professor-activity-page.component';
import { ProfessorDashboardPageComponent } from './pages/current-user-pages/professor-dashboard-page/professor-dashboard-page.component';
import { RegisteredActivitiesPageComponent } from './pages/activity-pages/registered-activities-page/registered-activities-page.component';
import { TeacherGroupsManageJoinRequestsPageComponent } from './pages/generic-pages/teacher-groups-manage-join-requests-page/teacher-groups-manage-join-requests-page.component';
import { GroupsListComponent } from './pages/group-pages/generic-groups-page/components/groups-list/groups-list.component';
import { GroupManagementPageComponent } from './pages/group-pages/group-management-page/group-management-page.component';
import { GroupPageComponent } from './pages/group-pages/group-page/group-page.component';

export const PROFILE_ROUTES: Routes = [
    {
        path: '',
        children: [
            { 
                path: '', 
                redirectTo: '', 
                pathMatch: 'full' 
            },
            { 
                path: '',
                component: UserProfilePageComponent,
            },
            { 
                path: 'assinaturas', 
                component: UserPlanPageComponent 
            },
            { 
                path: 'pagamentos', 
                component: UserPaymentHistoryComponent 
            },
            { 
                path: 'notificacoes', 
                component: UserNotificationsComponent
            },
            { 
                path: 'grupos', 
                children: [
                    { 
                        path: '', 
                        redirectTo: '', 
                        pathMatch: 'full' 
                    },
                    { 
                        path: '',
                        component: GroupsListComponent,
                    },
                    { 
                        path: ':id/gerenciar',
                        component: GroupManagementPageComponent,
                    },
                    { 
                        path: ':id/solicitacoes',
                        component: TeacherGroupsManageJoinRequestsPageComponent,
                    },
                    { 
                        path: ':id',
                        component: GroupPageComponent,
                    },
                ]
            },
            { 
                path: 'dashboard-estudante', 
                component: EstudanteDashboardPageComponent,
            },
            { 
                path: 'dashboard-professor', 
                component: ProfessorDashboardPageComponent,
            },
            { 
                path: 'atividades', 
                children: [
                    { 
                        path: '', 
                        redirectTo: '', 
                        pathMatch: 'full' 
                    },
                    { 
                        path: '',
                        component: TasksListComponent,
                    },
                    { 
                        path: 'entregas',
                        component: ProfessorActivityPageComponent,
                    },
                    { 
                        path: 'modelos',
                        component: RegisteredActivitiesPageComponent,
                    },
                    { 
                        path: ':id',
                        component: EstudanteActivityPageComponent,
                    },
                ]
            },
        ]
    }
];