import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

import { PlansPageComponent } from './pages/info-pages/plans-page/plans-page.component';
import { HomePageComponent } from './pages/info-pages/home-page/home-page.component';
import { LoginComponent } from './pages/auth-pages/login/login.component';
import { RegistrationContainerPageComponent } from './pages/auth-pages/registration-container-page/registration-container-page.component';
import { UserDataStepComponent } from './pages/auth-pages/registration-container-page/steps/user-data-step/user-data-step.component';
import { PlanSelectionStepComponent } from './pages/auth-pages/registration-container-page/steps/plan-selection-step/plan-selection-step.component';
import { ForgotPasswordComponent } from './pages/auth-pages/forgot-password/forgot-password.component';
import { AboutUsPageComponent } from './pages/info-pages/about-us-page/about-us-page.component';
import { TermsOfUsePageComponent } from './pages/info-pages/terms-of-use-page/terms-of-use-page.component';
import { ResetPasswordComponent } from './pages/auth-pages/reset-password/reset-password.component';
import { DashboardPageComponent } from './pages/admin-pages/dashboard-page/dashboard-page.component';
import { GroupsPageComponent } from './pages/group-pages/groups-page/groups-page.component';
import { GroupPageComponent } from './pages/group-pages/group-page/group-page.component';
import { ActivityWallPageComponent } from './pages/activity-pages/activity-wall-page/activity-wall-page.component';
import { ActivityDetailPageComponent } from './pages/activity-pages/activity-page/activity-detail-page.component';
import { UserProfilePageComponent } from './pages/profile-pages/user-profile-page/user-profile-page.component';
import { UserProfileInfoComponent } from './pages/profile-pages/user-profile-info/user-profile-info.component';
import { UserPlanPageComponent } from './pages/profile-pages/user-plan-page/user-plan-page.component';
import { UserPaymentHistoryComponent } from './pages/profile-pages/user-payment-history/user-payment-history.component';
import { UserNotificationsComponent } from './pages/profile-pages/user-notifications/user-notifications.component';
import { ConfirmedPaymentPageComponent } from './pages/payment-pages/confirmed-payment-page/confirmed-payment-page.component';
import { UserManagementPageComponent } from './pages/admin-pages/user-management-page/user-management-page.component';
import { PlanManagementPageComponent } from './pages/admin-pages/plan-management-page/plan-management-page.component';
import { FinancePageComponent } from './pages/admin-pages/finance-page/finance-page.component';
import { MessageBroadcastPageComponent } from './pages/admin-pages/message-broadcast-page/message-broadcast-page.component';
import { NotFoundPageComponent } from './pages/general-pages/not-found-page/not-found-page.component';
import { AccessDeniedPageComponent } from './pages/general-pages/access-denied-page/access-denied-page.component';
import { CheckoutPaymentPageComponent } from './pages/payment-pages/checkout-payment-page/checkout-payment-page.component';

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