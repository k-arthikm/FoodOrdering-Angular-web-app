import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userorder',
  templateUrl: './userorder.component.html',
  styleUrls: ['./userorder.component.css']
})
export class UserorderComponent implements OnInit {


  public status: string = "";
  public orders: any[] = [];

  constructor(private httpObj: HttpClient, private route: ActivatedRoute, private router:Router) {


  }

  ngOnInit() {

    let status = "";
    this.route.queryParams
      //.filter(params => params.order)
      .subscribe(params => {
        //1console.log("here",params); // { order: "popular" }

        //this.order = params.order;
        //console.log(this.order); // popular

        //status=params.status;
        status = params.status === undefined ? '' : params.status;
        console.log("here2", status);
        this.getOutput(status);
        console.log("here3", status);

      }
      );
    console.log(status);
  }

  public getOutput(status): void {

    var url: string = "http://localhost/food-ordering-system-master/api/user-order-api.php";
    // this.httpObj.get(url).subscribe(  (resstr:any) =>
    // {          this.output = resstr;
    //     console.log(this.output)
    // });

    //comment n see
    //   let headers = new HttpHeaders({
    //     'Content-Type': 'application/json'});
    // let options = { headers: headers };
    let token = localStorage.getItem("userId_token");
    this.httpObj.post<any>(url, { status: status, user_id: token }).subscribe((data: any) => {
      console.log("orders::", data);
      this.orders = data;
      console.log("price::", this.orders[0].itemDetails[0].price);



      // if(data.result=="admin"){
      //   this.router.navigate(['admin']);
      // }else if(data.result=="customer"){
      //   this.router.navigate(['admin']);
      // }else 
      // alert("Login Failed!");

    });
  }
  /**
   * calculateTotal
   */
  // public calculateTotal(order) {
  //   //console.log("order::", order);

  //   let total = 0;
  //   let obj = order.itemDetails.map(value => {
  //     total = parseInt(value.price)+total;


  //   });
  //   return total;
  // }

  // public cancelOrder(order){
  //   var url: string = "http://localhost/food-ordering-system-master/api/cancel-order.php";
  //   let token = localStorage.getItem("userId_token");
  //   let status="Cancelled by Customer";
  //   let payment_type=order.payment_type;
  //   let orderId=order.id;

  //   this.httpObj.post<any>(url, { user_id: token, status: status,payment_type: payment_type,id:orderId }).subscribe((data: any) => {
  //     console.log("orders::", data);
  //     if( data.result=="success"){
  //       console.log("in result if")
  //       this.router.routeReuseStrategy.shouldReuseRoute = function () {
          
  //         return false;
  //       };
  //       this.router.onSameUrlNavigation = 'reload';
  //       this.router.navigate(['/user/allorders']);

  //     }

     

  //   });
    
  // }





}

