import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationForm2Component } from './application-form2.component';

describe('ApplicationForm2Component', () => {
  let component: ApplicationForm2Component;
  let fixture: ComponentFixture<ApplicationForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
