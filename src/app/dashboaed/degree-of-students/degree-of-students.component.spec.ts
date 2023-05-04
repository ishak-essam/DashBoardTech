import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeOfStudentsComponent } from './degree-of-students.component';

describe('DegreeOfStudentsComponent', () => {
  let component: DegreeOfStudentsComponent;
  let fixture: ComponentFixture<DegreeOfStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegreeOfStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DegreeOfStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
