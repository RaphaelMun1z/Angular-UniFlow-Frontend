import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-checkout-payment-page',
    imports: [CommonModule],
    templateUrl: './checkout-payment-page.component.html',
    styleUrl: './checkout-payment-page.component.scss'
})

export class CheckoutPaymentPageComponent {
    
    public pixKey = '00020126...'; // Chave Pix viria da sua API
    public isKeyCopied = false;
    public metodoPagamento: 'pix' | 'cartao' = 'pix';

    copyPixKey(): void {
        navigator.clipboard.writeText(this.pixKey).then(() => {
            this.isKeyCopied = true;
            // Reseta o estado do botão após 2 segundos
            setTimeout(() => {
                this.isKeyCopied = false;
            }, 2000);
        }).catch(err => {
            console.error('Erro ao copiar a chave Pix:', err);
        });
    }
}
