import { CommonService } from './../services/common-service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.css']
})
export class FoodmenuComponent implements OnInit {
public itemList:any[]=[];
public name:string;
public price:number;

  constructor(private httpObj: HttpClient,private service: CommonService) { }

  ngOnInit() {
    this.getOutput();
  }

  public getOutput(): void {

    //var url: string = "http://localhost/food-ordering-system-master/api/food-menu-api.php";

    this.service.httpPost("food-menu-api.php",{status:status}).subscribe((data: any) => {
      console.log(data);
      this.itemList = data;


    });
  }
//added this method to test additem-outputdemo component
  public addItem1(item):void{
    var url: string = "http://localhost/food-ordering-system-master/api/add-item-api.php";
 var obj:any={};

    this.httpObj.post<any>(url, { name: item.name, price: item.price }).subscribe((data: any) => {
      console.log(data);
      obj.name=item.name;
      obj.price=item.price;
      obj.id=data.id;
      obj.deleted="0";
      console.log("here",obj)
      this.itemList.push(obj);
      console.log(this.itemList);
      

  });
console.log(name);
}

  


}
