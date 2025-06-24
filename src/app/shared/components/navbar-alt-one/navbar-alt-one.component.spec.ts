import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAltOneComponent } from './navbar-alt-one.component';

describe('NavbarAltOneComponent', () => {
  let component: NavbarAltOneComponent;
  let fixture: ComponentFixture<NavbarAltOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarAltOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarAltOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
