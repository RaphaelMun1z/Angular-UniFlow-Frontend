import { Routes } from '@angular/router';
import { GroupTypeSelectionPageComponent } from './pages/generic-pages/group-type-selection-page/group-type-selection-page.component';
import { CreateClassPageComponent } from './pages/auth-subscriber/group-pages/create-class-page/create-class-page.component';
import { CreateStudyGroupPageComponent } from './pages/auth-subscriber/group-pages/create-study-group-page/create-study-group-page.component';
import { StudentGroupClassPageComponent } from './pages/generic-pages/student-group-class-page/student-group-class-page.component';
import { StudentGroupsAccessByInviteCodePageComponent } from './pages/generic-pages/student-groups-access-by-invite-code-page/student-groups-access-by-invite-code-page.component';
import { StudentGroupsPendingInvitationsPageComponent } from './pages/generic-pages/student-groups-pending-invitations-page/student-groups-pending-invitations-page.component';
import { NavigationPageComponent } from './shared/components/general/navigation-page/navigation-page.component';
import { GroupsOperationsComponent } from './pages/generic-pages/generic-management-page-template/components/groups-operations/groups-operations.component';

export const PANEL_GROUPS_ROUTES: Routes = [
    {
        path: '',
        component: GroupsOperationsComponent
    },
    {
        path: 'administrar',
        component: NavigationPageComponent
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
        path: 'ingressar',
        component: StudentGroupsAccessByInviteCodePageComponent
    },
    {
        path: 'solicitacoes-acesso',
        component: StudentGroupsPendingInvitationsPageComponent
    },
    {
        path: ':id',
        component: StudentGroupClassPageComponent
    },
];