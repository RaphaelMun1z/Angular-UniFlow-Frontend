import { Routes } from '@angular/router';
import { AccessDeniedPageComponent } from './pages/no-auth/general-pages/access-denied-page/access-denied-page.component';
import { AboutUsPageComponent } from './pages/no-auth/landing-pages/about-us-page/about-us-page.component';
import { HomePageComponent } from './pages/no-auth/landing-pages/home-page/home-page.component';
import { PlansPageComponent } from './pages/no-auth/landing-pages/plans-page/plans-page.component';
import { TermsOfUsePageComponent } from './pages/no-auth/landing-pages/terms-of-use-page/terms-of-use-page.component';

export const PUBLIC_ROUTES: Routes = [
    {
        path: '',
        component: HomePageComponent
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
        path: 'acesso-negado', 
        component: AccessDeniedPageComponent
    },
];