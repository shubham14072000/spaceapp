import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from '../services/confirmedvalidator';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passwordPattern = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$";

  hide = true;
  constructor( private http: HttpClient) { }

  signupform = new FormGroup(
    {
      firstName: new FormControl(
        '',
      [Validators.required]
      ),
      lastName: new FormControl(
        '',
        [Validators.required]
      ),
      email: new FormControl(
        '',
       [
          Validators.required,
          // Validators.minLength(6),
          // Validators.maxLength(30),
        ]
      ),
      password: new FormControl(
        '',
      [
          Validators.required,
          Validators.minLength(6),
          // Validators.maxLength(30),
        ]
      ),
      confirmPassword: new FormControl(
        '',
     [
          Validators.required,
          Validators.minLength(6),
          // Validators.maxLength(30),
        ]
      ),

      phone: new FormControl(
        '',
      [
          Validators.required,
          Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        ]
      ),
      type: new FormControl('',Validators.required),
      dob: new FormControl(
        '',
       [Validators.required]
      ),
    },
    // {
    //   validator: PasswordValidation.MatchPassword, // your validation method
    // }
  );

  error_messages = {
    firstname: [{ type: 'required', message: 'First Name is required.' }],

    lastname: [{ type: 'required', message: 'Last Name is required.' }],
    

    dob: [{ type: 'required', message: 'Date Of birth is required.' }],
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'minlength', message: 'Invalid email' },
      { type: 'maxlength', message: 'Invalid email.' },
     
    ],

    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password too short.' },
    ],
    confirmpassword: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password too sort.' },
    ],
   
    contact: [
      { type: 'required', message: 'Contact Number is required.' },
      { type: 'pattern', message: 'Invalid Number.' },
    ],
    type:[
      { type: 'required', message: 'Type is required'}
    ]
  };

  
//   static MatchPassword(AC: AbstractControl) {
//     let password = AC.get('password').value; // to get value in input tag
//     let confirmpassword = AC.get('confirmpassword').value; // to get value in input tag
//      if(password != confirmpassword) {
//          // console.log('false');
//          AC.get('confirmpassword').setErrors( {MatchPassword: true} )
//      } else {
//          // console.log('true');
//          return null
//      }
//  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.signupform.value);
    // if(this.signupform.valid){
    //   console.log(this.signupform.value);
      
    // }
    // if (this.signupform.valid) { 
const headers = { 'Content-Type': 'application/json' }
this.http.post<any>("https://cms.getspaceshuttle.com/api/auth/signup", this.signupform.value, { headers }).subscribe(
  ($data) => {
  
      console.log($data);
      alert($data.message);
  
  },
  (error) => {
    if (this.signupform.valid) {
      console.log(error.error);
      alert(error.error.message);
    } else {
      alert('You are missing something2');
    }
  }
)
  }

// else {
//  alert('You are missing something1');
 
// }
//   }
}
