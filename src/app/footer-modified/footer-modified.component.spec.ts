import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterModifiedComponent } from './footer-modified.component';

describe('FooterModifiedComponent', () => {
  let component: FooterModifiedComponent;
  let fixture: ComponentFixture<FooterModifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterModifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
