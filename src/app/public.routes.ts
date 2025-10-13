import { Routes } from '@angular/router';
import { AboutUsPageComponent } from './pages/public-pages/about-us-page/about-us-page.component';
import { AccessDeniedPageComponent } from './pages/public-pages/access-pages/access-denied-page/access-denied-page.component';
import { HomePageComponent } from './pages/public-pages/home-page/home-page.component';
import { PlansPageComponent } from './pages/public-pages/plans-page/plans-page.component';
import { TermsOfUsePageComponent } from './pages/public-pages/terms-of-use-page/terms-of-use-page.component';
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