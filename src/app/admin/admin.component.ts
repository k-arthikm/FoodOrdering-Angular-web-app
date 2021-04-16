import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  constructor(@Inject(DOCUMENT) private document: Document, private router:Router ) { }

  ngOnInit() {
    this.document.body.classList.remove('cyan');
  }

  /**
   * logout
   */
  public logout():void {
    localStorage.removeItem("userId_token");
    this.router.navigate(["/"]);
    
  }

  

}
