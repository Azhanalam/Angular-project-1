import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderModifiedComponent } from './header-modified.component';

describe('HeaderModifiedComponent', () => {
  let component: HeaderModifiedComponent;
  let fixture: ComponentFixture<HeaderModifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderModifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
