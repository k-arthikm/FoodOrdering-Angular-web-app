import { CommonService } from './../../services/common-service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminallorders',
  templateUrl: './adminallorders.component.html',
  styleUrls: ['./adminallorders.component.css']
})
export class AdminallordersComponent implements OnInit {
  @Input() orders_var
  constructor(private httpObj: HttpClient,private route: ActivatedRoute,private router:Router,private service:CommonService) { }

  ngOnInit() {
  }

  public calculateTotal(order) {
  //   console.log("order::", order);

  //   let total = 0;
  //   if("itemDetails" in order){
  //   let obj = order.itemDetails.map(value => {
  //     total = parseInt(value.price)+total;


  //   });
  //   return total;
  // }
  return this.service.calculateTotal(order);
  }

  public changeStatus(order) {

    var url: string = "http://localhost/food-ordering-system-master/api/edit-orders-api.php";

    this.httpObj.post<any>(url, { id: order.id, status: order.status}).subscribe((data: any) => {
      //console.log(order);
      if( data.result=="success"){
        console.log("in result if")
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          
          return false;
        };
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/admin/allorders']);

      }

    
  });

}

}
