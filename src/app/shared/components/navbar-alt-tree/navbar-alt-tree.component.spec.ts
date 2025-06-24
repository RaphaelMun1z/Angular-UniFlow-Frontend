import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAltTreeComponent } from './navbar-alt-tree.component';

describe('NavbarAltTreeComponent', () => {
  let component: NavbarAltTreeComponent;
  let fixture: ComponentFixture<NavbarAltTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarAltTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarAltTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
