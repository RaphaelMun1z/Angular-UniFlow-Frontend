import { Routes } from '@angular/router';

// Public
import { TermsOfUsePageComponent } from './pages/content_info/terms-of-use-page/terms-of-use-page.component';

// Activity
import { ActivityWallPageComponent } from './pages/content_activity/activity-wall-page/activity-wall-page.component';

// Auth
import { UserDataStepComponent } from './pages/content_auth/registration-container-page/steps/user-data-step/user-data-step.component';
import { PlanSelectionStepComponent } from './pages/content_auth/registration-container-page/steps/plan-selection-step/plan-selection-step.component';
import { RegistrationContainerPageComponent } from './pages/content_auth/registration-container-page/registration-container-page.component';
import { LoginComponent } from './pages/content_auth/login/login.component';

// Admin
import { DashboardPageComponent } from './pages/content_admin/dashboard-page/dashboard-page.component';
import { FinancePageComponent } from './pages/content_admin/finance-page/finance-page.component';

// Group
import { GroupPageComponent } from './pages/content_group/group-page/group-page.component';

// Payment
import { ConfirmedPaymentPageComponent } from './pages/content_payment/confirmed-payment-page/confirmed-payment-page.component';

// User
import { UserPlanPageComponent } from './pages/content_profile/user-plan-page/user-plan-page.component';
import { UserProfilePageComponent } from './pages/content_profile/user-profile-page/user-profile-page.component';
import { MessageBroadcastPageComponent } from './pages/content_admin/message-broadcast-page/message-broadcast-page.component';
import { PlanManagementPageComponent } from './pages/content_admin/plan-management-page/plan-management-page.component';
import { UserManagementPageComponent } from './pages/content_admin/user-management-page/user-management-page.component';
import { ForgotPasswordComponent } from './pages/content_auth/forgot-password/forgot-password.component';
import { GroupsPageComponent } from './pages/content_group/groups-page/groups-page.component';
import { ResetPasswordComponent } from './pages/content_auth/reset-password/reset-password.component';
import { AboutUsPageComponent } from './pages/content_info/about-us-page/about-us-page.component';
import { HomePageComponent } from './pages/content_info/home-page/home-page.component';
import { AuthGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';
import { ActivityDetailPageComponent } from './pages/content_activity/activity-page/activity-detail-page.component';
import { UserProfileInfoComponent } from './pages/content_profile/user-profile-info/user-profile-info.component';
import { UserPaymentHistoryComponent } from './pages/content_profile/user-payment-history/user-payment-history.component';
import { UserNotificationsComponent } from './pages/content_profile/user-notifications/user-notifications.component';
import { PlansPageComponent } from './pages/content_info/plans-page/plans-page.component';

export const routes: Routes = [
    
    // =====================================================================
    // == 1. ROTAS PÚBLICAS (Acessíveis por todos)
    // =====================================================================
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
    
    
    // =====================================================================
    // == 2. ROTAS DA APLICAÇÃO (Exigem login)
    // =====================================================================
    {
        path: 'app',
        canActivate: [AuthGuard],
        children: [
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
                path: 'pagamento/confirmacao',
                component: ConfirmedPaymentPageComponent
            },
        ]
    },
    
    
    // =====================================================================
    // == 3. ROTAS DO PAINEL DE ADMIN (Exigem login e papel de Admin)
    // =====================================================================
    {
        path: 'admin',
        canActivate: [AuthGuard, adminGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
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
        ]
    },
    {
        path: '**',
        redirectTo: '' // ou para uma página 'NotFoundComponent'
    }
];

/* export const routes: Routes = [
{
path: '',
component: HomePageComponent
},
{
path: 'test',
component: NestedDropdownComponent
},
{
path: 'register',
component: RegistrationContainerPageComponent,
children: [
{ path: '', redirectTo: 'user-data', pathMatch: 'full' },
{ path: 'user-data', component: UserDataStepComponent },
{ path: 'plan-selection', component: PlanSelectionStepComponent }
]
},
{
path: 'login',
component: LoginComponent
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
path: 'about-us',
component: AboutUsPageComponent
},
{
path: 'terms-of-use',
component: TermsOfUsePageComponent
},
{
path: 'payment',
children: [
{
path: '',
component: PaymentPageComponent
},
{
path: 'confirmed',
component: ConfirmedPaymentPageComponent
},
]
},
{
path: 'admin',
children: [
{
path: 'dashboard',
component: DashboardPageComponent
},
{
path: 'plan-management',
component: PlanManagementPageComponent
},
{
path: 'finance',
component: FinancePageComponent
},
{
path: 'message-broadcast',
component: MessageBroadcastPageComponent
},
{
path: 'logs',
component: SystemLogsPageComponent
},
{
path: 'content-moderation',
component: ContentModerationPageComponent
},
{
path: 'user-management',
component: UserManagementPageComponent
},
]
},
{
path: 'user',
children: [
{
path: 'profile',
children: [
{
path: '',
component: UserProfilePageComponent
},
{
path: 'plan',
component: UserPlanPageComponent
}
]
},
{
path: 'activities',
children: [
{
path: 'registered',
component: RegisteredActivitiesPageComponent
},
{
path: 'register',
component: ActivityRegistrationPageComponent
},
{
path: 'wall',
component: ActivityWallPageComponent
},
{
path: 'estudante/:id',
component: EstudanteActivityPageComponent
},
{
path: 'professor/:id',
component: ProfessorActivityPageComponent
},
]
},
{
path: 'dashboard',
children: [
{
path: 'estudante',
component: EstudanteDashboardPageComponent
},
{
path: 'professor',
component: ProfessorDashboardPageComponent
},
]
}
]
},
{
path: 'groups',
children: [
{
path: '',
component: GroupsPageComponent
},
{
path: ':id',
component: GroupPageComponent
}
]
}
];
*/