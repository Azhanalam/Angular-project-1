import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftsubmissionComponent } from './draftsubmission.component';

describe('DraftsubmissionComponent', () => {
  let component: DraftsubmissionComponent;
  let fixture: ComponentFixture<DraftsubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftsubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftsubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
