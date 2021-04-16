import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditemOutputdemoComponent } from './additem-outputdemo.component';

describe('AdditemOutputdemoComponent', () => {
  let component: AdditemOutputdemoComponent;
  let fixture: ComponentFixture<AdditemOutputdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditemOutputdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditemOutputdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
