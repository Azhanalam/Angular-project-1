import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRegloginComponent } from './header-reglogin.component';

describe('HeaderRegloginComponent', () => {
  let component: HeaderRegloginComponent;
  let fixture: ComponentFixture<HeaderRegloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRegloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRegloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
