import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public usersList: any[] = [];
  // <th data-field="name">Username</th>
  //                               <th data-field="name">Password</th>
  //                               <th data-field="name">Name</th>
  //                               <th data-field="price">Email</th>
  //                               <th data-field="price">Phone number</th>
  //                               <th data-field="price">Address</th>
  //                               <th data-field="price">Role</th>
  //                               <th data-field="price">Verified</th>
  //                               <th data-field="price">Enable</th>
  public user={name:"",username:"",password:"",email:"",contact:"",address:"",role:"Administrator",verified:"0",deleted:"0"};
  constructor(private httpObj: HttpClient) { }
  ngOnInit() {
    this.getOutput();
  }
  public getOutput(): void {
    var url: string = "http://localhost/food-ordering-system-master/api/list-user-api.php";
    this.httpObj.post<any>(url, { status: status }).subscribe((data: any) => {
      console.log(data);
      this.usersList = data;
    });
  }


  public addUser(user):void{
    console.log("start::",user)
    var url: string = "http://localhost/food-ordering-system-master/api/add-user-api.php";

 var obj:any={};


    this.httpObj.post<any>(url, {name:user.name,username:user.username,password:user.password,email:user.email,contact:user.contact,address:user.address,role:user.role,verified:user.verified,deleted:user.deleted }).subscribe((data: any) => {
      console.log(data);
      obj=user;

      // obj.name=this.name;
      // obj.price=this.price;
      // obj.id=this.itemList.length+1;
      // obj.deleted="0";
      console.log("here",obj)

      this.usersList.push(obj);
      console.log(this.usersList);

  });

}
public modifyUser():void{
  var url: string = "http://localhost/food-ordering-system-master/api/update-user-api.php";
var obj:any={};

console.log(this.usersList);

   this.httpObj.post<any>(url, { mdata:this.usersList}).subscribe((data: any) => {

    console.log(data);

    if(data.result=="success"){
      alert("Record Modifed Successfully");
    }else{
      alert("Record failed to modify!");
    }
//     obj.name=this.name;
//     obj.price=this.price;
//     obj.id=this.itemList.length+1;
//     obj.deleted="0";
//     console.log("here",obj)
//     this.itemList.push(obj);
//     console.log(this.itemList);

 });
}

}
