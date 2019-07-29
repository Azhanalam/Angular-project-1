import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequeststatusnewComponent } from './requeststatusnew.component';

describe('RequeststatusnewComponent', () => {
  let component: RequeststatusnewComponent;
  let fixture: ComponentFixture<RequeststatusnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequeststatusnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequeststatusnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
