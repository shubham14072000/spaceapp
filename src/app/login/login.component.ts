import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform= new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl( '', [Validators.required])
  })
 
  constructor(  private http: HttpClient , public router: Router) { }
  hide = true;
  ngOnInit(): void {
  }


  onSubmit(){
   
//     console.log(this.loginform.value)
// if(this.loginform.valid){
//   console.log(this.loginform.value)
// }
// else{
//   console.log("Invalid form")
// }

const headers = { 'Content-Type': 'application/json' }
this.http.post<any>("https://cms.getspaceshuttle.com/api/auth/signin", JSON.stringify(this.loginform.value), { headers }).subscribe(
  ($data) => {
    if (this.loginform.valid) {
      console.log($data);
      alert('THANK YOU FOR LOGIN IN');
      localStorage.setItem('login_auth_token', $data.token);
      this.router.navigate(['home']);
    } else {
      alert('You are missing something1');
      
    }
  },
  (error) => {
    if (this.loginform.valid) {
      console.log(error.error);
      alert(error.error.message);
    } else {
      alert('You are missing something2');
    }
  }
)
  }
}
