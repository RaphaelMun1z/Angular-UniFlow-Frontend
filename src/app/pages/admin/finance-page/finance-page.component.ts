import { Component } from '@angular/core';
import { NavbarAltTreeComponent } from "../../../shared/components/navbar-alt-tree/navbar-alt-tree.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-finance-page',
  imports: [NavbarAltTreeComponent, FooterComponent],
  templateUrl: './finance-page.component.html',
  styleUrl: './finance-page.component.scss'
})
export class FinancePageComponent {

}
