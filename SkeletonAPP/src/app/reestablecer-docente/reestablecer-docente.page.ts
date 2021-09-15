import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reestablecer-docente',
  templateUrl: './reestablecer-docente.page.html',
  styleUrls: ['./reestablecer-docente.page.scss'],
})
export class ReestablecerDocentePage implements OnInit {
  img:String;
  dato:String;
  
  constructor(public toastController: ToastController,private router:Router) {}

  ngOnInit() {
    this.img ='./assets/img/1.png';
  }
  ingresa(){

    let navigationExtra :NavigationExtras={
      state:{dato: this.dato}
    };
    //Utilizar API enrutador para llamar a la siguiente página

    this.router.navigate(['/home'],navigationExtra);

  }
}
