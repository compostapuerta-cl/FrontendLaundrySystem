import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarlateralComponent } from './navbarlateral.component';

describe('NavbarlateralComponent', () => {
  let component: NavbarlateralComponent;
  let fixture: ComponentFixture<NavbarlateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarlateralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarlateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
