import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../components/section-header/section-header.component';
import { SectionLink, TableOfContentsComponent } from './components/table-of-contents/table-of-contents.component';
import { LegalTextComponent } from './components/legal-text/legal-text.component';

@Component({
    selector: 'app-terms-of-use-page',
    imports: [SectionHeaderComponent, TableOfContentsComponent, LegalTextComponent],
    templateUrl: './terms-of-use-page.component.html',
    styleUrl: './terms-of-use-page.component.scss'
})

export class TermsOfUsePageComponent {
    sections: SectionLink[] = [
        { id: 'aceitacao', title: '1. Aceitação dos Termos' },
        { id: 'cadastro', title: '2. Cadastro e Conta' },
        { id: 'condutas', title: '3. Condutas Proibidas' },
        { id: 'conteudo', title: '4. Conteúdo do Usuário' },
        { id: 'propriedade', title: '5. Propriedade Intelectual' },
        { id: 'privacidade', title: '6. Privacidade' },
        { id: 'modificacoes', title: '7. Modificações' },
        { id: 'rescisao', title: '8. Rescisão' }
    ];
}
