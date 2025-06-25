import { Component } from '@angular/core';
import { NavbarAltTreeComponent } from "../../shared/components/navbar-alt-tree/navbar-alt-tree.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-about-us-page',
  imports: [NavbarAltTreeComponent, FooterComponent],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.scss'
})
export class AboutUsPageComponent {

}
