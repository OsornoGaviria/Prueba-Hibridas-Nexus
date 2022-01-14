import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth} from '@angular/fire/auth';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogueadoGuard implements CanActivate {
 
  constructor(private Afauth: AngularFireAuth, public router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.Afauth.authState.pipe(map(
        auth=> {
            if(!auth)
            {
              this.router.navigate(['/login']);
              console.log("Usuario No Logueado")
              return false
            }else
            {
              console.log("Usuario Si Logueado")
              return true
            }
      }
   ))
  
  }

  
}
