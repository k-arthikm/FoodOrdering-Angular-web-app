import { CommonService } from './../../services/common-service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usersallorders',
  templateUrl: './usersallorders.component.html',
  styleUrls: ['./usersallorders.component.css']
})
export class UsersallordersComponent implements OnInit {

  constructor(private httpObj: HttpClient, private route: ActivatedRoute, private router:Router,private service:CommonService) { }

  ngOnInit() {
    this.service.cs();
  }
@Input() orders_var

public calculateTotal(order) {
 return this.service.calculateTotal(order);
}

public cancelOrder(order){
  let common_url=this.service.apiUrl;
  var url: string = common_url+"/cancel-order.php";
  let token = localStorage.getItem("userId_token");
  let status="Cancelled by Customer";
  let payment_type=order.payment_type;
  let orderId=order.id;

  this.httpObj.post<any>(url, { user_id: token, status: status,payment_type: payment_type,id:orderId }).subscribe((data: any) => {
    console.log("orders::", data);
    if( data.result=="success"){
      console.log("in result if")
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        
        return false;
      };
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/user/allorders']);

    }

   

  });
  

}



}
