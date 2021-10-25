import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { FormControl , FormGroup, Validators } from '@angular/forms';
import { BdLocalService } from 'src/app/services/bd-local.service';


@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.page.html',
  styleUrls: ['./home-alumno.page.scss'],
})
export class HomeAlumnoPage implements OnInit {
  img:string;
  dato1:string;
  contrasena:string;


  usuario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  nombre = new FormControl('');

  constructor(public toastController: ToastController,private router:Router,private bdlocal: BdLocalService) {}

  guardar(){
    
    if(this.bdlocal.contactoExiste(this.dato1)){
      this.presentToast2('Iniciando sesión')
      let navigationExtra :NavigationExtras={
        state:{dato: this.dato1}
      };
      console.log(this.dato1);
      this.router.navigate(['/pagealumno/Perfil'],navigationExtra)
    }
    else{
      this.presentToast2("ERROR: Usuario no existe")
    }
    //this.bdlocal.guardarContactos(this.dato,this.contrasena);
  }
  
  registrar(){
    this.router.navigate(['/registrar']);
  }

  ngOnInit() {
    this.img ='./assets/img/1.png';
  }
  bienvenida(){
    //Llamar a Toast
    if(this.bdlocal.contactoExiste(this.contrasena)){
      this.presentToast("Bienvenido "+this.dato1)
    }
    
  }
  ingresa(){

    let navigationExtra :NavigationExtras={
      state:{dato: this.dato1}
    };
    //Utilizar API enrutador para llamar a la siguiente página

    this.router.navigate(['/pagealumno/Perfil'],navigationExtra);

  }
  ingresa4(){

    let navigationExtra :NavigationExtras={
      state:{dato: this.dato1}
    };
    //Utilizar API enrutador para llamar a la siguiente página

    this.router.navigate(['/reestablecer'],navigationExtra);

  }
  ingresa3(){

    //Utilizar API enrutador para llamar a la siguiente página

    this.router.navigate(['/inicio']);

  }
  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  guardarDatos(){
    console.log(this.usuario.value);
    this.bdlocal.guardarContactos(this.dato1,this.contrasena);
    
  }

  async presentToast2(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      translucent:false,
      color:'medium',
      position: 'top',
      duration: 2000
    });
    toast.present();

  }
}
