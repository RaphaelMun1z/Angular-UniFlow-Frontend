import { Component } from '@angular/core';
import { GroupHeaderSectionComponent } from "../../../shared/components/group-components/group-header-section/group-header-section.component";
import { GroupMainContentSectionComponent } from "../../../shared/components/group-components/group-main-content-section/group-main-content-section.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { NavbarAltWithAuthComponent } from '../../../shared/components/navbar-versions-components/navbar-alt-with-auth/navbar-alt-with-auth.component';

@Component({
  selector: 'app-group-page',
  imports: [GroupHeaderSectionComponent, GroupMainContentSectionComponent, FooterComponent, NavbarAltWithAuthComponent],
  templateUrl: './group-page.component.html',
  styleUrl: './group-page.component.scss'
})
export class GroupPageComponent {

}
