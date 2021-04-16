import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {

  public status:string="";
  public orders:any[]=[];
   constructor(private httpObj: HttpClient,private route: ActivatedRoute,private router:Router) {
   

  }

  ngOnInit() {
    
    let status= "";
    this.route.queryParams
      //.filter(params => params.order)
      .subscribe(params => {
        //1console.log("here",params); // { order: "popular" }

        //this.order = params.order;
        //console.log(this.order); // popular
        
        //status=params.status;
        status= params.status === undefined ? '' : params.status;
        console.log("here2",status);
        this.getOutput(status);
        console.log("here3",status);

      }
    );
    console.log(status);
  }

  public  getOutput(status):void
  {
   
      var url:string  = "http://localhost/food-ordering-system-master/api/all-orders-api-m.php";
      // this.httpObj.get(url).subscribe(  (resstr:any) =>
      // {          this.output = resstr;
      //     console.log(this.output)
      // });

      //comment n see
    //   let headers = new HttpHeaders({
    //     'Content-Type': 'application/json'});
    // let options = { headers: headers };

      this.httpObj.post<any>(url, {status: status}).subscribe((data:any) => {
        console.log(data);
        this.orders=data;
        // if(data.result=="admin"){
        //   this.router.navigate(['admin']);
        // }else if(data.result=="customer"){
        //   this.router.navigate(['admin']);
        // }else 
        // alert("Login Failed!");

      });
  }

  /**
   * name
   */
  // public calculateTotal(item) {
  //   console.log("order::", item);

  //   let total = 0;
  //   let obj = item.itemDetails.map(value => {
  //     total = parseInt(value.price)+total;


  //   });
  //   return total;
  // }

  /**
   * chnageStatus
   */
//   public changeStatus(order) {

//     var url: string = "http://localhost/food-ordering-system-master/api/edit-orders-api.php";

//     this.httpObj.post<any>(url, { id: order.id, status: order.status}).subscribe((data: any) => {
//       //console.log(order);
//       if( data.result=="success"){
//         console.log("in result if")
//         this.router.routeReuseStrategy.shouldReuseRoute = function () {
          
//           return false;
//         };
//         this.router.onSameUrlNavigation = 'reload';
//         this.router.navigate(['/admin/allorders']);

//       }

    
//   });

// }
}
