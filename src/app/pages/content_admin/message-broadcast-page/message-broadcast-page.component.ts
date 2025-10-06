import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { NavbarAltWithAuthComponent } from '../../../shared/components/navbar-versions-components/navbar-alt-with-auth/navbar-alt-with-auth.component';

@Component({
  selector: 'app-message-broadcast-page',
  imports: [NavbarAltWithAuthComponent, FooterComponent],
  templateUrl: './message-broadcast-page.component.html',
  styleUrl: './message-broadcast-page.component.scss'
})
export class MessageBroadcastPageComponent {

}
