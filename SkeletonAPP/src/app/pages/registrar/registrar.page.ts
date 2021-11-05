import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { FormControl , FormGroup, Validators } from '@angular/forms';
import { BdLocalService } from 'src/app/services/bd-local.service';

import { APIClientService } from 'src/app/services/apiclient.service';


@Component({
  selector: 'app-Registrar',
  templateUrl: './Registrar.page.html',
  styleUrls: ['./Registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  img:string;
  dato:string;
  contrasena:string;

  user:any;
  users:any;

  usuario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(4)]),
    user: new FormControl('')
  });

  nombre = new FormControl('');

  constructor(public toastController: ToastController,private router:Router,private bdlocal: BdLocalService, 
    private api:APIClientService) {}

  ionViewWillEnter(){
    this.getUsuarios()
  }

  getUsuarios(){
    this.api.getUsuarios().subscribe((data)=>{
      this.users=data;
    });
  }


  guardar(){
    
    if(this.bdlocal.contactoExiste(this.dato,this.contrasena)){
      this.presentToast2('ERROR: El ususuario ya existe')
    }
    else{
      this.presentToast2("Registro exitoso")
      this.bdlocal.guardarContactos(this.dato,this.contrasena,this.user)
      this.ingresa3()
    }
    
  }
  
  registrar(){
    this.router.navigate(['/registrar']);
  }

  ngOnInit() {
    this.img ='./assets/img/1.png';
  }
  bienvenida(){
    //Llamar a Toast
    if(this.bdlocal.contactoExiste(this.dato,this.contrasena)){
      this.presentToast("Bienvenido "+this.dato)
    }
    
  }
  ingresa(){

    let navigationExtra :NavigationExtras={
      state:{dato: this.dato}
    };
    //Utilizar API enrutador para llamar a la siguiente página

    this.router.navigate(['/pagealumno/Perfil'],navigationExtra);

  }
  ingresa4(){

    let navigationExtra :NavigationExtras={
      state:{dato: this.dato}
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
    this.bdlocal.guardarContactos(this.dato,this.contrasena,this.user);
    
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
