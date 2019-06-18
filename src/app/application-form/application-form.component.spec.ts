import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedFormComponent } from './requested-form.component';

describe('RequestedFormComponent', () => {
  let component: RequestedFormComponent;
  let fixture: ComponentFixture<RequestedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
