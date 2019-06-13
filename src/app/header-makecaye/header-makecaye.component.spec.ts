import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMakecayeComponent } from './header-makecaye.component';

describe('HeaderMakecayeComponent', () => {
  let component: HeaderMakecayeComponent;
  let fixture: ComponentFixture<HeaderMakecayeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMakecayeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMakecayeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
