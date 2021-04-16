import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-additem-outputdemo',
  templateUrl: './additem-outputdemo.component.html',
  styleUrls: ['./additem-outputdemo.component.css']
})
export class AdditemOutputdemoComponent implements OnInit {
  public name:string;
  public price:number;

  @Output() addItem:EventEmitter<any>=new EventEmitter<any>();//cannot send multiple values

  constructor() { }

  ngOnInit() {
  }

  /**
   * addItemFromComp
   */
  public addItemFromComp(name,price) {
    console.log("in addItemFromComp")
    this.name=name;
    this.price=price;
    this.addItem.emit({name:this.name,price:this.price});
console.log("this.name::",this.name)
console.log("this.price::",this.price)
    
  }

}
