import { Component } from '@angular/core';
import { NavbarAltTreeComponent } from "../../../shared/components/navbar-alt-tree/navbar-alt-tree.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-user-dashboard-page',
    imports: [NavbarAltTreeComponent, FooterComponent],
    templateUrl: './user-dashboard-page.component.html',
    styleUrl: './user-dashboard-page.component.scss'
})

export class UserDashboardPageComponent {
    
}
