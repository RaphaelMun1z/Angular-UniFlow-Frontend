import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

import { DashboardPageComponent } from './pages/auth-admin/dashboard-page/dashboard-page.component';
import { FinancePageComponent } from './pages/auth-admin/finance-page/finance-page.component';
import { MessageBroadcastPageComponent } from './pages/auth-admin/message-broadcast-page/message-broadcast-page.component';
import { PlanManagementPageComponent } from './pages/auth-admin/plan-management-page/plan-management-page.component';
import { UserManagementPageComponent } from './pages/auth-admin/user-management-page/user-management-page.component';
import { ActivityDetailPageComponent } from './pages/auth-subscriber/activity-pages/activity-page/activity-detail-page.component';
import { ActivityWallPageComponent } from './pages/auth-subscriber/activity-pages/activity-wall-page/activity-wall-page.component';
import { ForgotPasswordComponent } from './pages/auth-subscriber/auth-pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/auth-subscriber/auth-pages/login/login.component';
import { UserNotificationsComponent } from './pages/auth-subscriber/auth-pages/profile-pages/user-notifications/user-notifications.component';
import { UserPaymentHistoryComponent } from './pages/auth-subscriber/auth-pages/profile-pages/user-payment-history/user-payment-history.component';
import { UserPlanPageComponent } from './pages/auth-subscriber/auth-pages/profile-pages/user-plan-page/user-plan-page.component';
import { UserProfileInfoComponent } from './pages/auth-subscriber/auth-pages/profile-pages/user-profile-info/user-profile-info.component';
import { UserProfilePageComponent } from './pages/auth-subscriber/auth-pages/profile-pages/user-profile-page/user-profile-page.component';
import { RegistrationContainerPageComponent } from './pages/auth-subscriber/auth-pages/registration-container-page/registration-container-page.component';
import { PlanSelectionStepComponent } from './pages/auth-subscriber/auth-pages/registration-container-page/steps/plan-selection-step/plan-selection-step.component';
import { UserDataStepComponent } from './pages/auth-subscriber/auth-pages/registration-container-page/steps/user-data-step/user-data-step.component';
import { ResetPasswordComponent } from './pages/auth-subscriber/auth-pages/reset-password/reset-password.component';
import { GroupPageComponent } from './pages/auth-subscriber/group-pages/group-page/group-page.component';
import { GroupsPageComponent } from './pages/auth-subscriber/group-pages/groups-page/groups-page.component';
import { AccessDeniedPageComponent } from './pages/no-auth/general-pages/access-denied-page/access-denied-page.component';
import { NotFoundPageComponent } from './pages/no-auth/general-pages/not-found-page/not-found-page.component';
import { AboutUsPageComponent } from './pages/no-auth/landing-pages/about-us-page/about-us-page.component';
import { HomePageComponent } from './pages/no-auth/landing-pages/home-page/home-page.component';
import { PlansPageComponent } from './pages/no-auth/landing-pages/plans-page/plans-page.component';
import { TermsOfUsePageComponent } from './pages/no-auth/landing-pages/terms-of-use-page/terms-of-use-page.component';
import { CheckoutPaymentPageComponent } from './pages/no-auth/payment-pages/checkout-payment-page/checkout-payment-page.component';
import { ConfirmedPaymentPageComponent } from './pages/no-auth/payment-pages/confirmed-payment-page/confirmed-payment-page.component';
import { CreateClassPageComponent } from './pages/auth-subscriber/group-pages/create-class-page/create-class-page.component';
import { CreateStudyGroupPageComponent } from './pages/auth-subscriber/group-pages/create-study-group-page/create-study-group-page.component';
import { ListGroupsManagementComponent } from './pages/auth-admin/list-groups-management/list-groups-management.component';
import { GroupNavigationPageComponent } from './pages/auth-admin/group-navigation-page/group-navigation-page.component';
import { GroupTypeSelectionPageComponent } from './pages/auth-admin/group-type-selection-page/group-type-selection-page.component';
import { AdminGroupsReportsAndStatisticsPageComponent } from './pages/auth-admin/admin-groups-reports-and-statistics-page/admin-groups-reports-and-statistics-page.component';
import { AdminGroupsGlobalSettingsPageComponent } from './pages/auth-admin/admin-groups-global-settings-page/admin-groups-global-settings-page.component';
import { AdminGroupsAuditPageComponent } from './pages/auth-admin/admin-groups-audit-page/admin-groups-audit-page.component';
import { AdminGroupsSearchPageComponent } from './pages/auth-admin/admin-groups-search-page/admin-groups-search-page.component';
import { StudentGroupNavigationPageComponent } from './pages/auth-subscriber/student-group-navigation-page/student-group-navigation-page.component';
import { StudentGroupsAccessByInviteCodePageComponent } from './pages/auth-subscriber/student-groups-access-by-invite-code-page/student-groups-access-by-invite-code-page.component';
import { StudentGroupsPendingInvitationsPageComponent } from './pages/auth-subscriber/student-groups-pending-invitations-page/student-groups-pending-invitations-page.component';
import { TeacherGroupNavigationPageComponent } from './pages/auth-subscriber/teacher-group-navigation-page/teacher-group-navigation-page.component';
import { TeacherGroupsManageJoinRequestsPageComponent } from './pages/auth-subscriber/teacher-groups-manage-join-requests-page/teacher-groups-manage-join-requests-page.component';
import { TeacherGroupsManagementPageComponent } from './pages/auth-subscriber/teacher-groups-management-page/teacher-groups-management-page.component';
import { TeacherGroupClassPageComponent } from './pages/auth-subscriber/teacher-group-class-page/teacher-group-class-page.component';
import { StudentGroupClassPageComponent } from './pages/auth-subscriber/student-group-class-page/student-group-class-page.component';


export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegistrationContainerPageComponent,
        children: [
            { path: '', redirectTo: 'dados-pessoais', pathMatch: 'full' },
            { path: 'dados-pessoais', component: UserDataStepComponent },
            { path: 'selecionar-plano', component: PlanSelectionStepComponent }
        ]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent
    },
    {
        path: 'planos',
        component: PlansPageComponent
    },
    {
        path: 'sobre-nos',
        component: AboutUsPageComponent
    },
    {
        path: 'termos-de-uso',
        component: TermsOfUsePageComponent
    },
    {
        path: 'app',
        canActivate: [AuthGuard],
        children: [
            {
                path: 'professor',
                children: [
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
                                component: TeacherGroupNavigationPageComponent
                            },
                            {
                                path: 'listar',
                                component: TeacherGroupsManagementPageComponent
                            },
                            {
                                path: ':id',
                                component: TeacherGroupClassPageComponent
                            },
                            {
                                path: 'gerenciar-solicitacoes',
                                component: TeacherGroupsManageJoinRequestsPageComponent
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
                        ]
                    },
                ]
            },
            {
                path: 'estudante',
                children: [
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
                                component: StudentGroupNavigationPageComponent
                            },
                            {
                                path: 'listar',
                                component: GroupsPageComponent
                            },
                            {
                                path: ':id',
                                component: StudentGroupClassPageComponent
                            },
                            {
                                path: 'cadastrar',
                                component: CreateStudyGroupPageComponent
                            },
                            {
                                path: 'ingressar',
                                component: StudentGroupsAccessByInviteCodePageComponent
                            },
                            {
                                path: 'solicitacoes-acesso',
                                component: StudentGroupsPendingInvitationsPageComponent
                            },
                        ]
                    },
                ]
            },
            {
                path: 'dashboard',
                component: DashboardPageComponent
            },
            {
                path: 'grupos',
                component: GroupsPageComponent
            },
            {
                path: 'grupos/:id',
                component: GroupPageComponent
            },
            {
                path: 'atividades',
                component: ActivityWallPageComponent
            },
            {
                path: 'atividades/:id',
                component: ActivityDetailPageComponent
            },
            {
                path: 'me',
                component: UserProfilePageComponent,
                children: [
                    { path: '', redirectTo: 'info', pathMatch: 'full' },
                    { path: 'info', component: UserProfileInfoComponent },
                    { path: 'assinaturas', component: UserPlanPageComponent },
                    { path: 'pagamentos', component: UserPaymentHistoryComponent },
                    { path: 'notificacoes', component: UserNotificationsComponent }
                ]
            },
            {
                path: 'pagamento/checkout/:planoId',
                component: CheckoutPaymentPageComponent
            },
            {
                path: 'pagamento/confirmacao',
                component: ConfirmedPaymentPageComponent
            },
            { 
                path: 'acesso-negado', 
                component: AccessDeniedPageComponent
            } 
        ]
    },
    {
        path: 'admin',
        canActivate: [AuthGuard, adminGuard],
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
            { 
                path: 'acesso-negado', 
                component: AccessDeniedPageComponent
            } 
        ]
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];