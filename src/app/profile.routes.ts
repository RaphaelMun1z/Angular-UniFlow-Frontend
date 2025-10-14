import { Routes } from '@angular/router';
import { GroupsListComponent } from './pages/generic-pages/generic-groups-page/components/groups-list/groups-list.component';
import { TasksListComponent } from './pages/generic-pages/generic-tasks-page/components/tasks-list/tasks-list.component';
import { UserNotificationsComponent } from './pages/current-user-pages/user-notifications/user-notifications.component';
import { UserPaymentHistoryComponent } from './pages/current-user-pages/user-payment-history/user-payment-history.component';
import { UserPlanPageComponent } from './pages/current-user-pages/user-plan-page/user-plan-page.component';
import { UserProfilePageComponent } from './pages/current-user-pages/user-profile-page/user-profile-page.component';

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
                component: GroupsListComponent
            },
            { 
                path: 'atividades', 
                component: TasksListComponent
            },
        ]
    }
];