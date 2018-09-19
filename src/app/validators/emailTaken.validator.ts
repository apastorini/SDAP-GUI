import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {UserService} from '../services/user.service';

export function emailTaken(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return userService.exist(control.value).map(
      res => {
        return (res) ? {"emailExists": true} : null;
      }
    );
  };
}
