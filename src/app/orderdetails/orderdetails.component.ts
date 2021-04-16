import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var Razorpay:any;
@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  public user;
  public items;
  public ptype: string = "";
  public total: number = 0;


  constructor(private router: Router,private httpObj: HttpClient) { }

  ngOnInit() {

    let token = localStorage.getItem("userToken");
    console.log("token::", token);
    console.log("parsedtoken::", JSON.parse(token));
    this.user = JSON.parse(token);
    var retrievedObject = localStorage.getItem("oitems");
   

    console.log("retrieveObj::", retrievedObject);

    if(retrievedObject==null){
      this.router.navigate(['/user/order']); 
    }
    //console.log("retrieveObj::",retrievedObject);
    console.log("parsedretrieveObj::", JSON.parse(retrievedObject));
    this.items = JSON.parse(retrievedObject);

    let obj = this.items.map(value => {
      this.total = value.price * value.quantity + this.total;
    })


    var selectedOption = localStorage.getItem("selectedOption");
    console.log("selectedOption::", selectedOption);
    //console.log("parsedselectedOption::",JSON.parse(selectedOption));
    this.ptype = selectedOption;

   

  }

  /**
   * confirmOrder
   */
  public confirmOrder() {
    var url: string = "http://localhost/food-ordering-system-master/api/order.php";
  //var obj:any={};
  //userId_token
  let userId_token = localStorage.getItem("userId_token");
  
  this.httpObj.post<any>(url, {items:this.items,user_id:userId_token,payment_type:this.ptype,total:this.total,address:this.user[0].address}).subscribe((data: any) => {
  

  console.log("data:::" ,data);
  if(data.result=="success"){
    localStorage.removeItem("oitems");
    localStorage.removeItem("selectedOption");
    
    this.router.navigate(['/user/allorders']);

  }
  });
  }

  public pay() {
    var options = {
      "key": "rzp_test_8N2mCS4wl6REgb", // Enter the Key ID generated from the Dashboard
      "amount": this.total*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "FoodOnline",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      //"order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
        this.confirmOrder();
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
      },
      "prefill": {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9999999999"
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  var rzp1 = new Razorpay(options);
    rzp1.open();
    
  }

  // public modifyItem():void{
  //   var url: string = "http://localhost/food-ordering-system-master/api/update-item-api.php";
  // var obj:any={};
  
  // console.log(this.itemList);
  
  //    this.httpObj.post<any>(url, { mdata:this.itemList}).subscribe((data: any) => {
  
  //     console.log(data);
  
  //     if(data.result=="success"){
  //       alert("Record Modifed Successfully");
  //     }else{
  //       alert("Record failed to modify!");
  //     }
  // //     obj.name=this.name;
  // //     obj.price=this.price;
  // //     obj.id=this.itemList.length+1;
  // //     obj.deleted="0";
  // //     console.log("here",obj)
  // //     this.itemList.push(obj);
  // //     console.log(this.itemList);
  
  //  });
  // }
  // }


}
