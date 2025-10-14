import { Component } from '@angular/core';
import { GroupHeaderSectionComponent } from '../../../shared/components/group-components/group-header-section/group-header-section.component';
import { GroupMainContentSectionComponent } from '../../../shared/components/group-components/group-main-content-section/group-main-content-section.component';

@Component({
    selector: 'app-group-page',
    imports: [GroupHeaderSectionComponent, GroupMainContentSectionComponent],
    templateUrl: './group-page.component.html',
    styleUrl: './group-page.component.scss'
})

export class GroupPageComponent {
    
}
