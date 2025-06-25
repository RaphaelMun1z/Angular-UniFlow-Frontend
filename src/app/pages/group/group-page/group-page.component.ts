import { Component } from '@angular/core';
import { GroupHeaderSectionComponent } from "../../../shared/components/group/group-header-section/group-header-section.component";
import { GroupMainContentSectionComponent } from "../../../shared/components/group/group-main-content-section/group-main-content-section.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { NavbarAltTreeComponent } from "../../../shared/components/navbar-alt-tree/navbar-alt-tree.component";

@Component({
  selector: 'app-group-page',
  imports: [GroupHeaderSectionComponent, GroupMainContentSectionComponent, FooterComponent, NavbarAltTreeComponent],
  templateUrl: './group-page.component.html',
  styleUrl: './group-page.component.scss'
})
export class GroupPageComponent {

}
