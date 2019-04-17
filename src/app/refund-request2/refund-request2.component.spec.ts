import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundRequest2Component } from './refund-request2.component';

describe('RefundRequest2Component', () => {
  let component: RefundRequest2Component;
  let fixture: ComponentFixture<RefundRequest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundRequest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundRequest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
