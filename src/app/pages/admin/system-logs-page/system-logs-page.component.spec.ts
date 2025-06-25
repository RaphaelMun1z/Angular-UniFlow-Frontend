import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemLogsPageComponent } from './system-logs-page.component';

describe('SystemLogsPageComponent', () => {
  let component: SystemLogsPageComponent;
  let fixture: ComponentFixture<SystemLogsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemLogsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemLogsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
