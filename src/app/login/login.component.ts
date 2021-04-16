import { formatCurrency } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var Razorpay:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public output:string="";
  public username:string="";
  public password:string="";
  public form1;
  public submitted=false;


  // constructor(private httpObj: HttpClient) { 

  // }

  public  getOutput(userName,password):void
  {
      var url:string  = "http://localhost/food-ordering-system-master/api/router-api.php";
      // this.httpObj.get(url).subscribe(  (resstr:any) =>
      // {          this.output = resstr;
      //     console.log(this.output)
      // });
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'});
    let options = { headers: headers };

      this.httpObj.post<any>(url, { username: userName, password: password},options).subscribe(data => {
        console.log(data);
        if(data.result=="admin"){
          this.router.navigate(['admin']);
        }else if(data.result=="customer"){
          localStorage.setItem("userId_token",data.user_id);
          this.router.navigate(['user']);
        }else 
        alert("Login Failed!");

      });
  }
  constructor(private router: Router,private httpObj: HttpClient) { }

  public login(form1){
    console.log(form1);
    if(form1.form.status=="INVALID"){
      this.submitted=true;


    }else{
      this.getOutput(this.username,this.password);
    }
    
    
    //console.log("herrrrreeeeeee");
    console.log(this.username);
    // if(this.username=="root" &&this.password=="toor"){

    //    this.router.navigate(['admin']);

    // }

  }

  /**
   * pay
   
   rzp1.open();*/
 
}
