import { Component } from '@angular/core';
import { NavbarAltTreeComponent } from "../../../shared/components/navbar-alt-tree/navbar-alt-tree.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-registered-activities',
    imports: [RouterModule, NavbarAltTreeComponent],
    templateUrl: './registered-activities-page.component.html',
    styleUrl: './registered-activities-page.component.scss'
})

export class RegisteredActivitiesPageComponent {
    
}
