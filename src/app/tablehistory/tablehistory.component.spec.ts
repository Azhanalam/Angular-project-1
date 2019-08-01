import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablehistoryComponent } from './tablehistory.component';

describe('TablehistoryComponent', () => {
  let component: TablehistoryComponent;
  let fixture: ComponentFixture<TablehistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablehistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
