import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCayeRefundReqComponent } from './view-caye-refund-req.component';

describe('ViewCayeRefundReqComponent', () => {
  let component: ViewCayeRefundReqComponent;
  let fixture: ComponentFixture<ViewCayeRefundReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCayeRefundReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCayeRefundReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
