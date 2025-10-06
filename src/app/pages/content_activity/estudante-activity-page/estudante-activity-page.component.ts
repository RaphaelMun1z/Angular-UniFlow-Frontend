import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { NavbarAltTwoComponent } from "../../../shared/components/navbar-versions-components/navbar-alt-with-auth/navbar-alt-with-auth.component";

@Component({
    selector: 'app-estudante-activity-page',
    imports: [FooterComponent, NavbarAltTwoComponent],
    templateUrl: './estudante-activity-page.component.html',
    styleUrl: './estudante-activity-page.component.scss'
})

export class EstudanteActivityPageComponent {
    
}
