import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyCayeComponent } from './apply-caye.component';

describe('ApplyCayeComponent', () => {
  let component: ApplyCayeComponent;
  let fixture: ComponentFixture<ApplyCayeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyCayeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyCayeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
