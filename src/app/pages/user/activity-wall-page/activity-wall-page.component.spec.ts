import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityWallPageComponent } from './activity-wall-page.component';

describe('ActivityWallPageComponent', () => {
  let component: ActivityWallPageComponent;
  let fixture: ComponentFixture<ActivityWallPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityWallPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityWallPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
