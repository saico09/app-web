import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Asistencia } from '../interfaces/asistencia';

@Injectable({
  providedIn: 'root'
})
export class BdLocal2Service {

  asistencia: Asistencia[]=[];

  private _storage: Storage | null = null;

  constructor(private storage: Storage, public toastController: ToastController) { 
    this.init;
    this.cargarAsistencia();
  }

  async cargarAsistencia() {
    const miAsistencia= await this.storage.get('asistencia');
    if(miAsistencia){
      this.asistencia=miAsistencia;
      return miAsistencia;
    }
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  guardarAsistencia(nombre:string,fecha:string,hora:string,clase:any){
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

  asistenciaExiste(fecha:string,clase:any){
    const existe=this.asistencia.find(c=>c.strClase==clase)
    if(existe){
      const existe2=this.asistencia.find(c=>c.strFecha==fecha)
      return existe2;
    }
    else{
      return existe
    }
    //return existe;
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
