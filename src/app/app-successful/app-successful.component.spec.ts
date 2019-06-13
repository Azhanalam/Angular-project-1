import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSuccessfulComponent } from './app-successful.component';

describe('AppSuccessfulComponent', () => {
  let component: AppSuccessfulComponent;
  let fixture: ComponentFixture<AppSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
