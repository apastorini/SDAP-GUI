import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';

@Directive({
  selector: '[uniqueEmail]',
  providers:[
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting:UniqueEmailValidatorDirective,
      multi: true
    }
  ]
})

export class UniqueEmailValidatorDirective implements AsyncValidator {

  constructor(private userService:UserService) { }

  validate(c:AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null >{
    return this.userService.exist(c.value).pipe(
      map(res =>{
        return (res) ? {'uniqueEmail': true} : null;
      })
    );

  }

}
