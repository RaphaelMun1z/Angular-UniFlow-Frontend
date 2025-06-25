import { Routes } from '@angular/router';

// Public
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TermsOfUsePageComponent } from './pages/terms-of-use-page/terms-of-use-page.component';

// Activity
import { ActivityPageComponent } from './pages/activity/activity-page/activity-page.component';
import { RegisteredActivitiesPageComponent } from './pages/activity/registered-activities-page/registered-activities-page.component';
import { ActivityRegistrationPageComponent } from './pages/activity/activity-registration-page/activity-registration-page.component';
import { ActivityWallPageComponent } from './pages/activity/activity-wall-page/activity-wall-page.component';

// Auth
import { UserDataStepComponent } from './pages/registration-container-page/steps/user-data-step/user-data-step.component';
import { PlanSelectionStepComponent } from './pages/registration-container-page/steps/plan-selection-step/plan-selection-step.component';
import { RegistrationContainerPageComponent } from './pages/registration-container-page/registration-container-page.component';
import { LoginComponent } from './pages/login/login.component';

// Admin
import { DashboardPageComponent } from './pages/admin/dashboard-page/dashboard-page.component';
import { FinancePageComponent } from './pages/admin/finance-page/finance-page.component';

// Group
import { GroupPageComponent } from './pages/group/group-page/group-page.component';

// Payment
import { PaymentPageComponent } from './pages/payment/payment-page/payment-page.component';
import { ConfirmedPaymentPageComponent } from './pages/payment/confirmed-payment-page/confirmed-payment-page.component';

// User
import { UserPlanPageComponent } from './pages/user/user-plan-page/user-plan-page.component';
import { UserDashboardPageComponent } from './pages/user/user-dashboard-page/user-dashboard-page.component';
import { UserProfilePageComponent } from './pages/user/user-profile-page/user-profile-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { MessageBroadcastPageComponent } from './pages/admin/message-broadcast-page/message-broadcast-page.component';
import { PlanManagementPageComponent } from './pages/admin/plan-management-page/plan-management-page.component';
import { SystemLogsPageComponent } from './pages/admin/system-logs-page/system-logs-page.component';
import { ContentModerationPageComponent } from './pages/admin/content-moderation-page/content-moderation-page.component';
import { UserManagementPageComponent } from './pages/admin/user-management-page/user-management-page.component';
import { NestedDropdownComponent } from './shared/components/nested-dropdown/nested-dropdown.component';

export const routes: Routes = [
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
        path: 'groups/:id',
        component: GroupPageComponent
    }
];
