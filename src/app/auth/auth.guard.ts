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
     map((isLoggedIn: boolean) =>{
       if (!isLoggedIn){
         this.router.navigate(['/login']);  // {4}
           return false;
         }
         return true;
       })
     )
  }
}
  // auth.guard.ts
// import {Injectable} from '@angular/core';
// import {Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
// import {AuthService} from './auth.service';
//
// @Injectable()
// export class AuthGuard implements CanActivate {
//     constructor(private router: Router,
//                 private authService: AuthService) {
//     }
//
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         const userRole: string = sessionStorage.getItem('role');
//         const permission = route.data["permission"];
//
//         let canActivate: boolean;
//
//         if (!permission) throw new Error('Permissions is not setup!');
//         if (!permission.only.length) throw new Error('Roles are not setup!');
//
//         canActivate = permission.only.includes(userRole);
//
//         if (!canActivate) this.router.navigate([permission.redirectTo]);
//
//         return canActivate;
//     }
// }
