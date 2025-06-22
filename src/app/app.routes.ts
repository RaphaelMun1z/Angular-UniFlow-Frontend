import { Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ActivityPageComponent } from './pages/activity-page/activity-page.component';
import { RegisteredActivitiesPageComponent } from './pages/registered-activities-page/registered-activities-page.component';
import { UserDataStepComponent } from './pages/registration-container-page/steps/user-data-step/user-data-step.component';
import { PlanSelectionStepComponent } from './pages/registration-container-page/steps/plan-selection-step/plan-selection-step.component';
import { RegistrationContainerPageComponent } from './pages/registration-container-page/registration-container-page.component';
import { ActivityRegistrationPageComponent } from './pages/activity-registration-page/activity-registration-page.component';
import { DashboardPageComponent } from './pages/admin/dashboard-page/dashboard-page.component';
import { UserPlanPageComponent } from './pages/user/user-plan-page/user-plan-page.component';
import { GroupPageComponent } from './pages/user/group-page/group-page.component';
import { UserDashboardPageComponent } from './pages/user/user-dashboard-page/user-dashboard-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ActivityWallPageComponent } from './pages/user/activity-wall-page/activity-wall-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { ConfirmedPaymentPageComponent } from './pages/confirmed-payment-page/confirmed-payment-page.component';
import { UserProfilePageComponent } from './pages/user/user-profile-page/user-profile-page.component';
import { FinancePageComponent } from './pages/admin/finance-page/finance-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
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
                path: 'finance',
                component: FinancePageComponent
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
                        path: ':id',
                        component: ActivityPageComponent
                    },
                ]
            },
            {
                path: 'dashboard',
                component: UserDashboardPageComponent
            }
        ]
    },
    {
        path: 'group',
        component: GroupPageComponent
    }
];
