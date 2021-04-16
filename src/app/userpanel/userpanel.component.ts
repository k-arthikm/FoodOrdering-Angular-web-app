import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {
  

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router , private httpObj: HttpClient) { }

  ngOnInit() {
    this.document.body.classList.remove('cyan');
    this.getOutput();
  }

  public logout():void {
    console.log("logout function")
    localStorage.removeItem("userId_token");
    this.router.navigate(["/"]);
    
  }
  //user-details

  public  getOutput():void
  {
   
      var url:string  = "http://localhost/food-ordering-system-master/api/user-details.php";
      // this.httpObj.get(url).subscribe(  (resstr:any) =>
      // {          this.output = resstr;
      //     console.log(this.output)
      // });

      //comment n see
    //   let headers = new HttpHeaders({
    //     'Content-Type': 'application/json'});
    // let options = { headers: headers };
    let token=localStorage.getItem("userId_token");
      this.httpObj.post<any>(url, {userId: token}).subscribe((data:any) => {
        console.log(data);
        let user=data;
        console.log("user::",user);
       localStorage.setItem("userToken",JSON.stringify(user));
        // if(data.result=="admin"){
        //   this.router.navigate(['admin']);
        // }else if(data.result=="customer"){
        //   this.router.navigate(['admin']);
        // }else 
        // alert("Login Failed!");

      });
  }

}
