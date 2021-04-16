import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminallordersComponent } from './adminallorders.component';

describe('AdminallordersComponent', () => {
  let component: AdminallordersComponent;
  let fixture: ComponentFixture<AdminallordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminallordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminallordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
