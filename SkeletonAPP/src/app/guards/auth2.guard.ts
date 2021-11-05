import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth2Guard implements CanActivate {
  dato: any;

  constructor(private router:Router){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | 
    Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('ingresado')){
        console.log('GUARD correcto')
        this.router.navigate(['/pagealumno']);
        return  true;
      }
      else{
        console.log('GUARD error')
        this.router.navigate(['/home-alumno']);
        return false
      }
  }

  //path: 'pagealumno',
}
