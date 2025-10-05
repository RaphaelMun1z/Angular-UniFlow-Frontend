import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudanteDashboardPageComponent } from './estudante-dashboard-page.component';

describe('EstudanteDashboardPageComponent', () => {
  let component: EstudanteDashboardPageComponent;
  let fixture: ComponentFixture<EstudanteDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudanteDashboardPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudanteDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
