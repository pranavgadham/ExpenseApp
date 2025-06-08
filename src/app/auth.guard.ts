import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service:AppService, private router:Router){}
  
  canActivate(): Observable<boolean | UrlTree> {
    return this.service.getLoginStatus().pipe(
      map((isLoggedIn) => {
        if (isLoggedIn) {
          return true;
        } else {
          return this.router.createUrlTree(['']);
        }
      })
    );
  }
  
}
