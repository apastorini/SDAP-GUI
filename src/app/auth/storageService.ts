import {Injectable} from '@angular/core';
import {Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class StorageService {

 private storageSub = new Subject<boolean>();

 watchStorage(): Observable<any> {
   return this.storageSub.asObservable();
 }

 setItem(key: string, data: any) {
   sessionStorage.setItem(key, data);
   this.storageSub.next(data);
 }

 removeItem(key) {
   sessionStorage.removeItem(key);
   this.storageSub.next(null);
 }
}
