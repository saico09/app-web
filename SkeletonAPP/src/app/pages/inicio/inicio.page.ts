import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Animation, AnimationController } from '@ionic/angular';
import { Auth2Guard } from 'src/app/guards/auth2.guard';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  anim:Animation;
  @ViewChild('square', {static: false} ) square:ElementRef;
  isPlaying=false;

  constructor(private router:Router,private animationCtrl: AnimationController) { }

  

  ngOnInit() {
  }
  ingresa2(){

    //Utilizar API enrutador para llamar a la siguiente página

    this.router.navigate(['/home']);

  }
  ingresa(){

    //Utilizar API enrutador para llamar a la siguiente página
    Auth2Guard;
    if(localStorage.getItem('ingresado')){
      console.log('GUARD sesión abierta')
      this.router.navigate(['/pagealumno']);
      return  true;
    }
    else{
      console.log('GUARD sesion cerrada')
      this.router.navigate(['/home-alumno']);
      return false
    }
    //this.router.navigate(['/home-alumno']);

  }
  registrar(){
    this.router.navigate(['/registrar']);
  }
}
