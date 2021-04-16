import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersitemlistComponent } from './usersitemlist.component';

describe('UsersitemlistComponent', () => {
  let component: UsersitemlistComponent;
  let fixture: ComponentFixture<UsersitemlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersitemlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersitemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
