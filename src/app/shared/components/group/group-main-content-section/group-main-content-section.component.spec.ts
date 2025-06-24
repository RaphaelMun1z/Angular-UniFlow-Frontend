import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMainContentSectionComponent } from './group-main-content-section.component';

describe('GroupMainContentSectionComponent', () => {
  let component: GroupMainContentSectionComponent;
  let fixture: ComponentFixture<GroupMainContentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupMainContentSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupMainContentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
