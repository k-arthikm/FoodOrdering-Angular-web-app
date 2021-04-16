import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {
       public item:any[]=[];
       public total:number=0;
       public user={};
       //public payment_type: string="";
       public selectedOption: string="Wallet";
       
       constructor(private router:Router) { }

  ngOnInit() {
    this.getItems();
  }

  public getItems():void{
    var retrievedObject = localStorage.getItem("oitems");

    if(retrievedObject==null){
      this.router.navigate(['/user/order']);
    }
    //item=retrievedObject
    this.item= JSON.parse(retrievedObject);
    console.log(this.item);

    let obj=this.item.map(value=>{
      this.total=value.price*value.quantity+this.total;
     })
     let token=localStorage.getItem("userToken");

     this.user=JSON.parse(token);


     console.log("parsed token::",this.user);
}

public getPaymentType(): void{
  this.selectedOption;
  console.log("this.payment_type::",this.selectedOption);
  localStorage.setItem("selectedOption", this.selectedOption);
  

  this.router.navigate(['/user/orderdetails']);

}

// public getOption(event):void{
// console.log("event::",event);


// }





}




