import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMakecayeModifiedComponent } from './header-makecaye-modified.component';

describe('HeaderMakecayeModifiedComponent', () => {
  let component: HeaderMakecayeModifiedComponent;
  let fixture: ComponentFixture<HeaderMakecayeModifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMakecayeModifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMakecayeModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
