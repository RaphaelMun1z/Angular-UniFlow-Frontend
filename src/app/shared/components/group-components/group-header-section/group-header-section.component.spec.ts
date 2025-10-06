import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupHeaderSectionComponent } from './group-header-section.component';

describe('GroupHeaderSectionComponent', () => {
  let component: GroupHeaderSectionComponent;
  let fixture: ComponentFixture<GroupHeaderSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupHeaderSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupHeaderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
