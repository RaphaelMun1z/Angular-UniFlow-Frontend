import { Routes } from '@angular/router';
import { CheckoutPaymentPageComponent } from './pages/public-pages/payment-pages/checkout-payment-page/checkout-payment-page.component';
import { ConfirmedPaymentPageComponent } from './pages/public-pages/payment-pages/confirmed-payment-page/confirmed-payment-page.component';

export const PAYMENT_ROUTES: Routes = [
    {
        path: '',
        children: [
            { 
                path: '', 
                redirectTo: 'checkout', 
                pathMatch: 'full' 
            },
            { 
                path: 'checkout', 
                component: CheckoutPaymentPageComponent
            },
            { 
                path: 'confirmacao', 
                component: ConfirmedPaymentPageComponent 
            },
        ]
    },
];