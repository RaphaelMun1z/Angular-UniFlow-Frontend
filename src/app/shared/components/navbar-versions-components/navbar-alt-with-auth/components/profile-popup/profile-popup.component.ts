import { Component } from '@angular/core';
import { CurrentUserComponent } from "./components/current-user/current-user.component";
import { FastAccessComponent } from "./components/fast-access/fast-access.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { FooterButtonsComponent } from "./components/footer-buttons/footer-buttons.component";
import { CurrentPlanComponent } from "./components/current-plan/current-plan.component";

@Component({
  selector: 'app-profile-popup',
  imports: [CurrentUserComponent, FastAccessComponent, NavigationComponent, FooterButtonsComponent, CurrentPlanComponent],
  templateUrl: './profile-popup.component.html',
  styleUrl: './profile-popup.component.scss'
})
export class ProfilePopupComponent {

}
