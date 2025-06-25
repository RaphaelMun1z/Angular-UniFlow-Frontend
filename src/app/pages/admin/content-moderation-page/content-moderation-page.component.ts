import { Component } from '@angular/core';
import { NavbarAltTreeComponent } from "../../../shared/components/navbar-alt-tree/navbar-alt-tree.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-content-moderation-page',
  imports: [NavbarAltTreeComponent, FooterComponent],
  templateUrl: './content-moderation-page.component.html',
  styleUrl: './content-moderation-page.component.scss'
})
export class ContentModerationPageComponent {

}
