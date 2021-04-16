import { CommonService } from './services/common-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {Routes,RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { FoodmenuComponent } from './foodmenu/foodmenu.component';
import { FormsModule } from '@angular/forms';
import { AllordersComponent } from './allorders/allorders.component';
import { UsersComponent } from './users/users.component';
import { UserpanelComponent } from './userpanel/userpanel.component';
import { OrderComponent } from './order/order.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { AuthguardServiceService } from './authguard-service.service';
import { UserguardService} from './userguard.service';
import { UserorderComponent } from './userorder/userorder.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { ItemslistComponent } from './components/itemslist/itemslist.component';
import { AdditemsComponent } from './components/additems/additems.component';
import { UsersitemlistComponent } from './components/usersitemlist/usersitemlist.component';
import { AdditemOutputdemoComponent } from './components/additem-outputdemo/additem-outputdemo.component';
import { AdminallordersComponent } from './components/adminallorders/adminallorders.component';
import { UsersallordersComponent } from './components/usersallorders/usersallorders.component';

const appRoutes:Routes=[
  {path:"",component:LoginComponent,canActivate : [UserguardService]},
  {path:"register",component:RegisterComponent},
  {path:"admin",component:AdminComponent, 
    children: [
        { path: "foodmenu", component: FoodmenuComponent },
        { path: "allorders", component: AllordersComponent},
        { path: "users", component: UsersComponent,}
        
    ]
  },
  {path:"user",component:UserpanelComponent,canActivate : [AuthguardServiceService],
  children: [
    { path: "order", component: OrderComponent},
    { path: "porder",component: PlaceorderComponent},
    { path: "allorders", component: UserorderComponent},
    {path:"orderdetails",component:OrderdetailsComponent},

  ]
},

 // {path:"allorders/:id", component:YetToBeDeliveredComponent}

]
 @NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    FoodmenuComponent,
    AllordersComponent,
    UsersComponent,
    UserpanelComponent,
    OrderComponent,
    PlaceorderComponent,
    UserorderComponent,
    OrderdetailsComponent,
    ItemslistComponent,
    AdditemsComponent,
    UsersitemlistComponent,
    AdditemOutputdemoComponent,
    AdminallordersComponent,
    UsersallordersComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' }),HttpClientModule, FormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
