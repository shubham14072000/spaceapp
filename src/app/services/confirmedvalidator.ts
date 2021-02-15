import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       let password = AC.get('password').value; // to get value in input tag
       let confirmpassword = AC.get('confirmpassword').value; // to get value in input tag
        if(password != confirmpassword) {
            // console.log('false');
            AC.get('confirmpassword').setErrors( {MatchPassword: true} )
        } else {
            // console.log('true');
            return null
        }
    }
}