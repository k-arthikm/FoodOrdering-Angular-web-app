import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserguardService {

  constructor(private router:Router)
  {

  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean
    {
      // Verify the token
        if( localStorage.getItem("userId_token") != null)
        {
          // this.router.navigate(["/Login"]);
          this.router.navigate(["/user"]);
          return false;
        }
        else
        {
          return true;
        }

    }
}
