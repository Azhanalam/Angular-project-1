import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadernicoleComponent } from './headernicole.component';

describe('HeadernicoleComponent', () => {
  let component: HeadernicoleComponent;
  let fixture: ComponentFixture<HeadernicoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadernicoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadernicoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
