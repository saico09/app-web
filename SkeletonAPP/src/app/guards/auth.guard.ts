import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeAlumnoPage } from '../pages/home-alumno/home-alumno.page';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  dato: any;

  constructor(private router:Router){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | 
    Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('ingresado')){
        console.log('GUARD correcto')
        return  true;
      }
      else{
        console.log('GUARD error')
        this.router.navigate(['/not-found']);
        return false
      }
  }

  //path: 'pagealumno',
}
