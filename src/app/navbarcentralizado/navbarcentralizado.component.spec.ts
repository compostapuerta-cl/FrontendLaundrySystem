import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcentralizadoComponent } from './navbarcentralizado.component';

describe('NavbarcentralizadoComponent', () => {
  let component: NavbarcentralizadoComponent;
  let fixture: ComponentFixture<NavbarcentralizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarcentralizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarcentralizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
