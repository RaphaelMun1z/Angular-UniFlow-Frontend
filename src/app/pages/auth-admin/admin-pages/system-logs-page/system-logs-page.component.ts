import { Component } from '@angular/core';
import { NavbarAltTreeComponent } from "../../../shared/components/navbar-versions-components/navbar-alt-tree/navbar-alt-tree.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-system-logs-page',
  imports: [NavbarAltTreeComponent, FooterComponent],
  templateUrl: './system-logs-page.component.html',
  styleUrl: './system-logs-page.component.scss'
})
export class SystemLogsPageComponent {

}
