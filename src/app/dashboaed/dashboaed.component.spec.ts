import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboaedComponent } from './dashboaed.component';

describe('DashboaedComponent', () => {
  let component: DashboaedComponent;
  let fixture: ComponentFixture<DashboaedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboaedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboaedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
