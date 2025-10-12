import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth-subscriber/auth-pages/login/login.component';
import { RegistrationContainerPageComponent } from './pages/auth-subscriber/auth-pages/registration-container-page/registration-container-page.component';
import { ForgotPasswordComponent } from './pages/auth-subscriber/auth-pages/forgot-password/forgot-password.component';
import { PlanSelectionStepComponent } from './pages/auth-subscriber/auth-pages/registration-container-page/steps/plan-selection-step/plan-selection-step.component';
import { UserDataStepComponent } from './pages/auth-subscriber/auth-pages/registration-container-page/steps/user-data-step/user-data-step.component';
import { ResetPasswordComponent } from './pages/auth-subscriber/auth-pages/reset-password/reset-password.component';

export const AUTH_ROUTES: Routes = [
    { 
        path: 'signin', 
        component: LoginComponent 
    },
    {
        path: 'signup',
        component: RegistrationContainerPageComponent,
        children: [
            { 
                path: '', 
                redirectTo: 'dados-pessoais', 
                pathMatch: 'full' 
            },
            { 
                path: 'dados-pessoais', 
                component: UserDataStepComponent
            },
            { 
                path: 'selecionar-plano', 
                component: PlanSelectionStepComponent 
            }
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
];