import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-usersitemlist',
  templateUrl: './usersitemlist.component.html',
  styleUrls: ['./usersitemlist.component.css']
})
export class UsersitemlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() itemList_var
  @Output() outputdemo_func:EventEmitter<any>=new EventEmitter<any>();
  @Output() orderItem:EventEmitter<any>=new EventEmitter<any>();
  
 

/**
 * name
 */
public name() {
  console.log("in name func");
  this.outputdemo_func.emit();
}

public orderItems() {
  console.log("in name func");
  let item="item argument";
  this.orderItem.emit(item);
}

}
