import { Component } from '@angular/core';
import { NavbarAltTreeComponent } from "../../../shared/components/navbar-versions-components/navbar-alt-tree/navbar-alt-tree.component";
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-registered-activities',
    imports: [RouterModule, NavbarAltTreeComponent, FooterComponent],
    templateUrl: './registered-activities-page.component.html',
    styleUrl: './registered-activities-page.component.scss'
})

export class RegisteredActivitiesPageComponent {
    
}
