import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReopenLectureComponent } from './reopen-lecture.component';

describe('ReopenLectureComponent', () => {
  let component: ReopenLectureComponent;
  let fixture: ComponentFixture<ReopenLectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReopenLectureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReopenLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
