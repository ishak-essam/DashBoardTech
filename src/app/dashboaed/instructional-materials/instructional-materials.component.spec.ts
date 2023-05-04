import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionalMaterialsComponent } from './instructional-materials.component';

describe('InstructionalMaterialsComponent', () => {
  let component: InstructionalMaterialsComponent;
  let fixture: ComponentFixture<InstructionalMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionalMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructionalMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
