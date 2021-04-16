import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersallordersComponent } from './usersallorders.component';

describe('UsersallordersComponent', () => {
  let component: UsersallordersComponent;
  let fixture: ComponentFixture<UsersallordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersallordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersallordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
