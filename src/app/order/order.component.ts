import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public itemList:any[]=[];

  constructor(private httpObj: HttpClient,private router: Router) { }

  ngOnInit() {
    this.getOutput();
    //console.log("hereeeeeeee");
  }
//@Input() itemList_var
  public getOutput(): void {

   // var url: string = "http://localhost/food-ordering-system-master/api/food-menu-api.php";
   var url: string = "http://localhost/food-ordering-system-master/api/item-list-api.php";

   
    this.httpObj.post<any>(url, { status: status }).subscribe((data: any) => {
      console.log(data);
      this.itemList = data;


    });
  }

  /**
   * name
   */
  public outputDemo() {
    console.log("@outputdemo");
    console.log(this.itemList);
  }

  public getOrderedItem(item):void{
    console.log("item::", item);
    let obj=this.itemList.map(value=>{
     if(value.quantity!=null && value.quantity!=undefined){
       //value==undefined//value==null
       return value;
     }
    }
   ).filter(f=>f!=undefined)//quantity==null
   console.log("objnew::",obj);
   localStorage.setItem("oitems", JSON.stringify(obj));
   this.router.navigate(['/user/porder']);

  //  <a [routerLink]="['/user/porder']">
  //    }

  }


}
