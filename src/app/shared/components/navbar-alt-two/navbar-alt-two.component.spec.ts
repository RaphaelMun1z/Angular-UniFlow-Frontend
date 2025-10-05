import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAltTwoComponent } from './navbar-alt-two.component';

describe('NavbarAltTwoComponent', () => {
  let component: NavbarAltTwoComponent;
  let fixture: ComponentFixture<NavbarAltTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarAltTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarAltTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
