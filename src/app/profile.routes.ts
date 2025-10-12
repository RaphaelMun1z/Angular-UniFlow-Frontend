import { Routes } from '@angular/router';
import { UserProfilePageComponent } from './pages/auth-subscriber/auth-pages/profile-pages/user-profile-page/user-profile-page.component';
import { UserNotificationsComponent } from './pages/auth-subscriber/auth-pages/profile-pages/user-notifications/user-notifications.component';
import { UserPaymentHistoryComponent } from './pages/auth-subscriber/auth-pages/profile-pages/user-payment-history/user-payment-history.component';
import { UserPlanPageComponent } from './pages/auth-subscriber/auth-pages/profile-pages/user-plan-page/user-plan-page.component';
import { UserProfileInfoComponent } from './pages/auth-subscriber/auth-pages/profile-pages/user-profile-info/user-profile-info.component';
import { GroupsListComponent } from './pages/general/generic-groups-page/components/groups-list/groups-list.component';
import { TasksListComponent } from './pages/general/generic-tasks-page/components/tasks-list/tasks-list.component';

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