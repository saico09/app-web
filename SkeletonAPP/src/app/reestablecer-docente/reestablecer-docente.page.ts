import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FormControl , FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reestablecer-docente',
  templateUrl: './reestablecer-docente.page.html',
  styleUrls: ['./reestablecer-docente.page.scss'],
})
export class ReestablecerDocentePage implements OnInit {
  img:String;
  dato:String;

  grupo = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)])
  });
  
  constructor(public toastController: ToastController,private router:Router) {}
  nombre = new FormControl('');

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

  mensaje(){
    //Llamar a Toast
    this.presentToast("Correo de recuperación enviado a "+this.dato)
  }
  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  guardarDatos(){
    console.log(this.grupo.value);
  }
}
