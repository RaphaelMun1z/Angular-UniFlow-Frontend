import { Component } from '@angular/core';
import { NavbarAltTreeComponent } from "../../../shared/components/navbar-alt-tree/navbar-alt-tree.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-message-broadcast-page',
  imports: [NavbarAltTreeComponent, FooterComponent],
  templateUrl: './message-broadcast-page.component.html',
  styleUrl: './message-broadcast-page.component.scss'
})
export class MessageBroadcastPageComponent {

}
