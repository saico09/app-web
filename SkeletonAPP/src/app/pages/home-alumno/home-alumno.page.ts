import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';

import { FormControl , FormGroup, Validators } from '@angular/forms';
import { BdLocalService } from 'src/app/services/bd-local.service';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { Auth2Guard } from 'src/app/guards/auth2.guard';




@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.page.html',
  styleUrls: ['./home-alumno.page.scss'],
})
export class HomeAlumnoPage implements OnInit {
  img:string;
  dato1:string;
  contrasena:string;
  user:any;
  

  usuario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  nombre = new FormControl('');
  public validador:any;

  constructor(public toastController: ToastController,private router:Router,private bdlocal: BdLocalService) {}
    public navCtrl: NavController;

  guardar(){
    this.validador=this.bdlocal.contactoExiste(this.dato1);
    
    if(this.bdlocal.contactoExiste(this.dato1)){
      this.presentToast2('Iniciando sesión')

      let navigationExtra :NavigationExtras={
        state:{dato: this.dato1}
      };
      
      //console.log(this.dato1);
      Auth2Guard;
      this.router.navigate(['/pagealumno/Perfil'],navigationExtra)
      //this.navCtrl.navigateRoot(['/pagealumno/Perfil'],navigationExtra)
      return true;
    }
    else{
      this.presentToast2("ERROR: Usuario no existe")
      return false;
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
    if(this.bdlocal.contactoExiste(this.dato1)){
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
    this.bdlocal.guardarContactos(this.dato1,this.contrasena,this.user);
    
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
