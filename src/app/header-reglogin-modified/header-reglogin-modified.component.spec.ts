import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRegloginModifiedComponent } from './header-reglogin-modified.component';

describe('HeaderRegloginModifiedComponent', () => {
  let component: HeaderRegloginModifiedComponent;
  let fixture: ComponentFixture<HeaderRegloginModifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRegloginModifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRegloginModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
