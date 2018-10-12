import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean>
  {
   return this.authService.isLoggedIn         // {1}
     .pipe(take(1),
     map((l: boolean) =>{
       console.log("IS LOGED IN!  " + l);
       if (!l){
         this.router.navigate(['/login']);  // {4}
           return false;
         }
         return true;
       })
     )
  }




}
