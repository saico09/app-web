import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.page.html',
  styleUrls: ['./home-alumno.page.scss'],
})
export class HomeAlumnoPage implements OnInit {
  img:String;
  dato:String;
  constructor(public toastController: ToastController,private router:Router) {}

  ngOnInit() {
    this.img ='./assets/img/1.png';
  }
  bienvenida(){
    //Llamar a Toast
    this.presentToast("Bienvenido "+this.dato)
  }
  ingresa(){

    let navigationExtra :NavigationExtras={
      state:{dato: this.dato}
    };
    //Utilizar API enrutador para llamar a la siguiente página

    this.router.navigate(['/pagealumno'],navigationExtra);

  }
  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
