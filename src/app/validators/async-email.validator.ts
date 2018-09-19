  import { AbstractControl } from '@angular/forms';
  import { UserService } from '../services/user.service';

  export class ValidateEmailNotTaken {
    public createValidator(userService: UserService) {
      return (control: AbstractControl) => {
        return userService.exist(control.value).map(res => {
          return res ? true : { emailTaken: true };
        });
      };
    }
  }
