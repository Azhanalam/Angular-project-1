import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyCayeSubmissionNewComponent } from './apply-caye-submission-new.component';

describe('ApplyCayeSubmissionNewComponent', () => {
  let component: ApplyCayeSubmissionNewComponent;
  let fixture: ComponentFixture<ApplyCayeSubmissionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyCayeSubmissionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyCayeSubmissionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
