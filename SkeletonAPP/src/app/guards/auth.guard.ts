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
      if(this.router.getCurrentNavigation().extras.state){
        this.dato=this.router.getCurrentNavigation().extras.state.dato;
        console.log('permitido')
        return  true;
      }
      else{
        console.log('error')
        this.router.navigate(['/not-found']);
        return false
      }
  }

  //path: 'pagealumno',
}
