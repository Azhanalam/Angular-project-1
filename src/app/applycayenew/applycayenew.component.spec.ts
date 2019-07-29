import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplycayenewComponent } from './applycayenew.component';

describe('ApplycayenewComponent', () => {
  let component: ApplycayenewComponent;
  let fixture: ComponentFixture<ApplycayenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplycayenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplycayenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
