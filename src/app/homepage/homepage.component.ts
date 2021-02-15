import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }
token;
  ngOnInit(): void {
   
  }
  logout(){
     this.token = localStorage.getItem('login_auth_token');
    console.log(this.token);
    this.token=null;
    localStorage.removeItem('login_auth_token');
    console.log(this.token)
  }
}
