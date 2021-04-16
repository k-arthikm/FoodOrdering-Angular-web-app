import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.css']
})
export class ItemslistComponent implements OnInit {
 
  constructor(private httpObj: HttpClient) { }

  ngOnInit() {
  }

@Input() itemList_var

public modifyItem():void{
  var url: string = "http://localhost/food-ordering-system-master/api/update-item-api.php";
var obj:any={};

console.log(this.itemList_var);

   this.httpObj.post<any>(url, { mdata:this.itemList_var}).subscribe((data: any) => {

    console.log(data);

    if(data.result=="success"){
      alert("Record Modifed Successfully");
    }else{
      alert("Record failed to modify!");
    }
//     obj.name=this.name;
//     obj.price=this.price;
//     obj.id=this.itemList.length+1;
//     obj.deleted="0";
//     console.log("here",obj)
//     this.itemList.push(obj);
//     console.log(this.itemList);

 });
}
}
