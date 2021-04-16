import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {
  public itemList:any[]=[];
public name:string;
public price:number;

  constructor(private httpObj: HttpClient) { }

  ngOnInit() {
  }
  public addItem(name,price):void{
    var url: string = "http://localhost/food-ordering-system-master/api/add-item-api.php";
 var obj:any={};

    this.httpObj.post<any>(url, { name: name, price: price }).subscribe((data: any) => {
      console.log(data);
      obj.name=this.name;
      obj.price=this.price;
      obj.id=data.id;
      obj.deleted="0";
      console.log("here",obj)
      this.itemList.push(obj);
      console.log(this.itemList);
      

  });

}

}
