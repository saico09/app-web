import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Asistencia } from '../interfaces/asistencia';
import { IAgenda } from '../interfaces/iagenda';

@Injectable({
  providedIn: 'root'
})
export class BdLocalService {

  agenda: IAgenda[]=[];

  asistencia: Asistencia[]=[]; //ASISTENCIA
  
  private _storage: Storage | null = null;
  

  constructor(private storage: Storage, public toastController: ToastController) { 
    this.init();
    this.cargarContactos();
    this.cargarAsistencia();//ASISTENCIA
  }
  async cargarContactos() {
    const miAgenda= await this.storage.get('agenda');
    if(miAgenda){
      this.agenda=miAgenda;
      return miAgenda;
    }
  }

  async cargarAsistencia() {//ASISTENCIA
    const miAsistencia= await this.storage.get('asistencia');
    if(miAsistencia){
      this.asistencia=miAsistencia;
      return miAsistencia;
    }
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  guardarContactos(dato:string,contrasena:string,user:string){
    const existe=this.contactoExiste(dato,contrasena);
    if(!existe){
      this.agenda.unshift({strNombre:dato, strContrasena: contrasena, strUser: user})
      this._storage.set('agenda',this.agenda)
      this.presentToast('Registrado')
    }
    else{
      this.presentToast("ERROR: no se pudo registrar")
    }
  }

  guardarAsistencia(nombre:string,fecha:string,hora:string,clase:any){//ASISTENCIA
    const existe=this.asistenciaExiste(fecha,clase);
    if(!existe){
      this.asistencia.unshift({strNom:nombre,strFecha:fecha, strHora: hora, strClase: clase})
      this._storage.set('asistencia',this.asistencia)
      this.presentToast('Asistencia registrada con éxito '+nombre)
      console.log("ASISTENCIA REGISTRADA "+fecha+" "+hora+" "+clase)
    }
    else{
      this.presentToast("ERROR: asistencia "+fecha+" "+hora+" "+clase)
    }
  }

  contactoExiste(dato:string,contrasena:string){
    const existe=this.agenda.find(c=>c.strNombre==dato)
    if(existe){
      const existe2=this.agenda.find(c=>c.strContrasena==contrasena)
      return existe2;
    }
    else{
      return existe
    }
    //return existe;
  }

  asistenciaExiste(fecha:string,nombre:string){ //ASISTENCIA
    const existe=this.asistencia.find(c=>c.strNom==nombre)
    if(existe){
      const existe2=this.asistencia.find(c=>c.strFecha==fecha)

      return existe2;
    }
    else{
      
      return existe
    }
    //return existe;
  }

  buscar(dato:string){
    
    const existe=this.agenda.find(c=>c.strNombre==dato)
    if(existe){
      console.log(this.agenda.find(c=>c.strNombre==dato).strUser['nombre'])
      const region=this.agenda.find(c=>c.strNombre==dato).strUser['nombre'];
      return region
    }
    
  }

  async presentToast(mensaje:string) {
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
