import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescheduleExamsComponent } from './reschedule-exams.component';

describe('RescheduleExamsComponent', () => {
  let component: RescheduleExamsComponent;
  let fixture: ComponentFixture<RescheduleExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RescheduleExamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RescheduleExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
