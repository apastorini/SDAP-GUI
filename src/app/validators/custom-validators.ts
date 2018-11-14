import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

export class CustomValidators{

public static passwordsMatch(registrationFormGroup: FormGroup) {

      let password = registrationFormGroup.controls.password.value;
      let repeatPassword = registrationFormGroup.controls.r_password.value;

      if (repeatPassword.length <= 0) {
          return null;
      }

      if (repeatPassword !== password) {
          return {
              doesMatchPassword: true
          };
      }

      return null;

  }
}











//  return (control: FormControl) : { [s: string]: boolean } =>{
//    //getting undefined values for both variables
//    console.log(password,confirmedPassword);
//    console.log("∆˚∆");
//     //if I change this condition to === it throws the error if the
// //  two fields are the same, so this part works
//     if (password !== confirmedPassword) {
//       return { 'passwordMismatch': true }
//     } else {
//       //it always gets here no matter what
//       return null;
//     }
// }
//   }
//
//
// }
